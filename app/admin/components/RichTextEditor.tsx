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
  const isInitializing = useRef(false);
  const isDestroying = useRef(false);

  // Ensure each instance has a truly unique DOM ID
  const containerId = `ck-editor-${id.replace(/[^a-zA-Z0-9]/g, '-')}`;

  useEffect(() => {
    const initEditor = async () => {
      // Don't start if already initializing, already has an editor, or is currently being destroyed
      if (isInitializing.current || editorRef.current || isDestroying.current) return;

      const ClassicEditor = (await import('@ckeditor/ckeditor5-build-classic')).default;
      const element = document.getElementById(containerId);

      if (element && !editorRef.current && !isInitializing.current) {
        // Double check DOM to prevent duplicates if cleanup hasn't finished or race condition occurred
        if (element.querySelector('.ck-editor')) return;

        isInitializing.current = true;
        ClassicEditor.create(element, {
          toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'insertTable', 'undo', 'redo'],
        })
          .then((editor: any) => {
            editorRef.current = editor;
            isInitializing.current = false;
            editor.setData(data);
            editor.model.document.on('change:data', () => {
              onChange(editor.getData());
            });
          })
          .catch((err) => {
            console.error(err);
            isInitializing.current = false;
          });
      }
    };

    initEditor();

    return () => {
      if (editorRef.current) {
        isDestroying.current = true;
        const currentEditor = editorRef.current;
        editorRef.current = null; // Clear ref immediately
        currentEditor.destroy().then(() => {
          isDestroying.current = false;
        });
      }
    };
  }, [containerId]);

  return <div id={containerId} className="min-h-[400px]"></div>;
};

export default RichTextEditor;