import { DetailedHTMLProps, FormHTMLAttributes, forwardRef } from 'react';

type FormProps = {} & DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;

export const Form = forwardRef<HTMLFormElement, FormProps>((props, ref) => {
  return <form noValidate {...props} className="'flex gap-3 items-end flex-col'" ref={ref} />;
});
