import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { PropsWithChildren } from 'react';
import { Footer, FooterProps } from '~components';

type TwoColumnsProps = PropsWithChildren<{ footer?: boolean; footerProps?: FooterProps }>;

export const TwoColumnsPicture = ({ footer = true, footerProps, ...props }: TwoColumnsProps) => {
  const { t } = useTranslation();

  return (
    <div className="two-columns-picture">
      <div>
        <main {...props} />
        {footer && <Footer {...footerProps} />}
      </div>
      <div className="two-columns-picture__picture-container">
        <Image
          src="/assets/sample-image.jpg"
          className="two-columns-picture__picture"
          layout="fill"
        />
        <h2 className="two-columns-picture__quote">
          {t('“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”')}
        </h2>
      </div>
    </div>
  );
};
