'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import toast from 'react-hot-toast';
import { marked } from 'marked';

interface OutputSectionProps {
  outputText?: string;
}

export default function OutputSection({ outputText }: OutputSectionProps) {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const convertMarkdownToHTML = async () => {
      if (outputText) {
        const html = await marked.parse(outputText); // ✅ Await the Promise
        setHtmlContent(html);
      }
    };
  
    convertMarkdownToHTML(); // ✅ Call the async function
  }, [outputText]);
  

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText || '');
    toast.success('Text copied to clipboard!');
  };

  return (
    <div className="bg-white border border-gray-200 shadow-xl rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
        <h2 className="text-xl font-semibold text-gray-800">📝 Generated Result</h2>
        <Button
          variant="outline"
          className="gap-2 hover:bg-gray-100 transition"
          onClick={handleCopy}
        >
          <Copy className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">Copy</span>
        </Button>
      </div>

      {/* Rendered Markdown */}
      <div className="px-6 py-5 bg-white max-h-[600px] overflow-y-auto">
        <div
          className="prose prose-lg prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
}
