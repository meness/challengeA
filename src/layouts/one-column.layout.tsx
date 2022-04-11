import { PropsWithChildren } from 'react';
import { Footer, FooterProps } from '~components';

type OneColumnProps = PropsWithChildren<{ footer?: boolean; footerProps?: FooterProps }>;

export const OneColumn = ({ footer = true, footerProps, ...props }: OneColumnProps) => {
  return (
    <div className="flex flex-col h-screen">
      <main className="grow" {...props} />
      {footer && <Footer {...footerProps} />}
    </div>
  );
};
