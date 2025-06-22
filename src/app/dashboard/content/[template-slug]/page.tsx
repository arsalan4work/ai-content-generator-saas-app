'use client';

import React, { useState, useContext } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import moment from 'moment';
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { db } from '../../../../../utils/db';
import { AIOutput } from '../../../../../utils/schema';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";
import { planLimits } from '../../../../../utils/planLimits';
import { ArrowLeft } from 'lucide-react';

export default function CreateNewContent() {
  const { user } = useUser();
  const router = useRouter();
  const params = useParams();

  const slugParam = params['template-slug'];
  if (typeof slugParam !== 'string') {
    router.push('/dashboard'); // fallback if invalid param
    return null;
  }

  const templateSlug: string = slugParam;

  const { totalUsage } = useContext(TotalUsageContext);
  const { updateUsage } = useContext(UpdateCreditUsageContext);

  const selectedTemplate: TEMPLATE | undefined = Templates.find(
    (item) => item.slug === templateSlug
  );

  const [loading, setLoading] = useState(false);
  const [generatedResult, setGeneratedResult] = useState<string>('');

  const userPlan = "starter"; // Replace later with DB value
  const maxLimit = planLimits[userPlan];

  const SaveInDb = async (formData: any, slug: string, aiResp: string) => {
    try {
      await db.insert(AIOutput).values({
        formData: JSON.stringify(formData),
        templateSlug: slug,
        aiResponse: aiResp,
        createdBy: user?.primaryEmailAddress?.emailAddress || 'anonymous',
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      });
    } catch (err) {
      console.error("DB Save Error:", err);
    }
  };

  const GenerateAIContent = async (formData: any) => {
    if (!selectedTemplate?.aiPrompt) {
      alert('AI prompt is not available for this template.');
      return;
    }

    if (totalUsage >= maxLimit) {
      alert("You’ve hit your daily limit. Please upgrade.");
      router.push("/dashboard/billing");
      return;
    }

    setLoading(true);

    try {
      const finalPrompt = `${selectedTemplate.aiPrompt}\n\nHere are the user details: ${JSON.stringify(
        formData
      )}\n\nPlease respond in the most appropriate format (text, list, Markdown, tags, title, etc.) based on the template's purpose. Avoid any extra explanations or labels — just output the final result cleanly.`;

      const response = await fetch('/api/generate-text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: finalPrompt }),
      });

      if (!response.ok) throw new Error('Failed to generate AI content');

      const data = await response.json();
      setGeneratedResult(data.text);
      await SaveInDb(formData, templateSlug, data.text);
      updateUsage(data.text.length); // ✅ Update credit after saving

    } catch (error) {
      console.error('Error generating AI content:', error);
      alert('Failed to generate AI content.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10">
      <Link href="/dashboard">
        <Button className="cursor-pointer hover:scale-105 transition-all duration-200">
          <ArrowLeft className="mr-2" /> Back
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={GenerateAIContent}
          loading={loading}
        />
        <div className="col-span-2">
          <OutputSection outputText={generatedResult} />
        </div>
      </div>
    </div>
  );
}
