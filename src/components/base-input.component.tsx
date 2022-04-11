import { forwardRef, InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

export type BaseInputProps = {} & InputHTMLAttributes<HTMLInputElement>;

export const BaseInput = forwardRef<
  HTMLInputElement,
  BaseInputProps & ReturnType<UseFormRegister<any>>
>(({ className, ...props }, ref) => {
  return <input className="form-control__input" {...props} ref={ref} />;
});
