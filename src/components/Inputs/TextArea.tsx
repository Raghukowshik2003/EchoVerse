import React from "react";

interface TextAreaProps {
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

const TextArea: React.FC<TextAreaProps> = ({ id, value, onChange, placeholder }) => (
  <textarea
    rows={5}
    id={id}
    className="py-2.5 px-4 border-none focus:outline-none block w-full rounded-lg 
    bg-gray-900 text-white dark:bg-gray-800 dark:text-white mb-4"


    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default TextArea;