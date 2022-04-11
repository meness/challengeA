import { forwardRef, HTMLAttributes } from 'react';

type FormControlProps = { disabled?: boolean } & HTMLAttributes<HTMLDivElement>;

export const FormControl = forwardRef<HTMLInputElement, FormControlProps>((props, ref) => {
  return <div className="form-control" {...props} ref={ref} />;
});
