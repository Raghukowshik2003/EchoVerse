import React from "react";

interface TextAreaProps {
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  maxWords?: number; // Add maxWords prop
}

const TextArea: React.FC<TextAreaProps> = ({ id, value, onChange, placeholder, maxWords = 2000 }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    const wordCount = newValue.trim().split(/\s+/).length;
    if (maxWords && wordCount > maxWords) {
      // Prevent further input if the word count exceeds the limit
      return;
    }
    onChange(event);
  };

  return (
    <textarea
      id={id}
      className="py-2.5 px-4 border-none focus:outline-none block w-full rounded-lg
      bg-gray-900 text-white dark:bg-gray-800 dark:text-white mb-4 resize-none"
      style={{ height: '250px' }} // Set the height to match the card height
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default TextArea;
