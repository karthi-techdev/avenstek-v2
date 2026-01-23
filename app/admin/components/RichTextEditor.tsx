"use client";

import React, { useMemo, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import JoditEditor to prevent SSR issues with 'window'
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

interface Props {
  data: string;
  onChange: (data: string) => void;
  id?: string;
}

const RichTextEditor: React.FC<Props> = ({ data, onChange, id = "editor" }) => {
  const editor = useRef(null);

  const config = useMemo(() => ({
    readonly: false,
    height: 400,
    width: '100%',
    enableDragAndDropFileToEditor: true,
    buttons: [
      'bold', 'italic', 'underline', 'strikethrough', '|',
      'ul', 'ol', '|',
      'font', 'fontsize', 'brush', 'paragraph', '|',
      'image', 'table', 'link', '|',
      'align', 'undo', 'redo', '|',
      'hr', 'eraser', 'copyformat', '|',
      'fullsize', 'source'
    ],
    uploader: {
      insertImageAsBase64URI: true
    },
    removeButtons: ['about', 'print', 'file'],
    showXPathInStatusbar: false,
    showCharsCounter: false,
    showWordsCounter: false,
    toolbarAdaptive: true,
    placeholder: 'Start typing...'
  }), []);

  return (
    <div className="min-h-[400px] bg-white rounded-2xl overflow-hidden" id={id}>
      <JoditEditor
        ref={editor}
        value={data}
        config={config}
        // Jodit's onBlur is preferred for performance in React forms to avoid cursor jumping
        onBlur={(newContent) => onChange(newContent)}
      />
    </div>
  );
};

export default RichTextEditor;