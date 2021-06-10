import React from 'react';


type CheckboxProps = {
  onChange: (value: boolean) => void;
  value: boolean;
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ onChange, value, label}) => {

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(event.target.checked);
  }

  return <div className="slider">
  <label>{label}</label>
  <input
    type="checkbox"
    checked={value}
    onChange={handleChange} />
  </div>;
 
}