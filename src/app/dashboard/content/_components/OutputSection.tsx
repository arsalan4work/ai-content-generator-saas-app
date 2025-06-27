'use client';
import { Button } from "@/components/ui/button";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Copy } from "lucide-react";
import { useEffect, useRef } from "react";

interface OutputSectionProps {
  outputText?: string;
}

export default function OutputSection({ outputText }: OutputSectionProps) {
  const editorRef = useRef<Editor | null>(null);

  // ✅ Whenever outputText changes, update the editor
  useEffect(() => {
    if (editorRef.current && outputText) {
      editorRef.current.getInstance().setMarkdown(outputText);
    }
  }, [outputText]);

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button className="cursor-pointer flex gap-2"
        onClick={()=>{navigator.clipboard.writeText(outputText || "")}}>
          <Copy className="w-4 h-4" /> Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue={outputText || "Write here!"}
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        
      />
    </div>
  );
}
