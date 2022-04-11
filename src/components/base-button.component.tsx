import { ButtonHTMLAttributes, forwardRef } from 'react';

export type BaseButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ children, type, ...props }, ref) => {
    return (
      <button
        // eslint-disable-next-line react/button-has-type
        type={type}
        className="btn btn--fill"
        ref={ref}
        {...props}>
        {children}
      </button>
    );
  },
);
