import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...rest }: InputProps) => (
  <input {...rest} className="w-full rounded-2xl border border-gray-300 bg-gray-100 px-4 py-2 font-mono" />
);
