import { DetailedHTMLProps, forwardRef, HTMLAttributes } from 'react';

type FormHelperTextProps = {} & DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export const FormHelperText = forwardRef<HTMLParagraphElement, FormHelperTextProps>(
  (props, ref) => {
    return (
      <p
        className="input-group__form-helper-text input-group__form-helper-text--error"
        {...props}
        ref={ref}
      />
    );
  },
);
