/* eslint-disable jsx-a11y/anchor-has-content */
import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react';

type LinkButtonProps = {} & LinkProps &
  Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'href'>;

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>((props, ref) => {
  return (
    <Link passHref {...props}>
      <a {...props} className="btn btn--fill" href="/" ref={ref} />
    </Link>
  );
});
