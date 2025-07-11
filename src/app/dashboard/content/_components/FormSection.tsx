'use client';
import React, { useState, useContext } from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { planLimits } from '../../../../../utils/planLimits';

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: any;
  loading: boolean;
}

export default function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
  const [formData, setFormData] = useState<any>({});
  const { totalUsage } = useContext(TotalUsageContext);

  const userPlan = "starter"; // later get from DB
  const maxLimit = planLimits[userPlan];
  const isLimitReached = totalUsage >= maxLimit;

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData);
  };

  return (
    <div className="p-5 shadow-md border rounded-lg bg-white">
      {/* @ts-ignore */}
      <Image
        src={selectedTemplate?.icon || "/fallback-icon.png"}
        alt="Image Not Found"
        width={70}
        height={70}
      />
      <h2 className="font-bold text-2xl mb-2 text-primary">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-semibold">{item.label}</label>
            {item.field === "input" ? (
              <Input name={item.name} required={item?.required} onChange={handleInputChange} />
            ) : item.field === "textarea" ? (
              <Textarea name={item.name} required={item?.required} onChange={handleInputChange} />
            ) : null}
          </div>
        ))}
        <Button
          type="submit"
          className="w-full py-6"
          disabled={loading || isLimitReached}
        >
          {loading && <Loader2Icon className="animate-spin" />}
          {isLimitReached ? "Limit Reached" : "Generate Content"}
        </Button>
      </form>
    </div>
  );
}