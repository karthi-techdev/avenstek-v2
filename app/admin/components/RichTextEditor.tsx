"use client";
import React, { useEffect, useRef } from 'react';

interface Props {
  data: string;
  onChange: (data: string) => void;
  // Unique identifier for each instance
  id?: string; 
}

const RichTextEditor: React.FC<Props> = ({ data, onChange, id = "editor" }) => {
  const editorRef = useRef<any>(null);
  // Ensure each instance has a truly unique DOM ID
  const containerId = `ck-editor-${id}`;

  useEffect(() => {
    const initEditor = async () => {
      const ClassicEditor = (await import('@ckeditor/ckeditor5-build-classic')).default;
      const element = document.getElementById(containerId);
      
      if (element && !editorRef.current) {
        ClassicEditor.create(element, {
          toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'insertTable', 'undo', 'redo'],
        })
          .then((editor: any) => {
            editorRef.current = editor;
            editor.setData(data);
            editor.model.document.on('change:data', () => {
              onChange(editor.getData());
            });
          })
          .catch((err) => console.error(err));
      }
    };

    initEditor();

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy().then(() => {
          editorRef.current = null;
        });
      }
    };
  }, [containerId]);

  return <div id={containerId} className="min-h-[400px]"></div>;
};

export default RichTextEditor;