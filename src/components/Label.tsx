import { LabelHTMLAttributes, memo, ReactNode } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export const Label = memo(function Label({ children, ...rest }: LabelProps) {
  return (
    <label {...rest} className="mb-2 ml-2 block text-xs font-medium uppercase tracking-widest text-gray-700">
      {children}
    </label>
  );
});
