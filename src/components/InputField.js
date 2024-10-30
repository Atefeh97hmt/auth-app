import React from 'react';

const InputField = ({ type, name, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      required
      onChange={onChange}
      className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
    />
  );
};

export default InputField;
