import { DetailedHTMLProps, forwardRef, HTMLAttributes } from 'react';
import ReactPlayer from 'react-player';
import { routeConst } from '~common/consts';
import { VideoEntity } from '~entities';
import { LinkButton } from './link-button.component';

export type VideoProps = { video: VideoEntity } & DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Video = forwardRef<HTMLDivElement, VideoProps>(({ video, ...props }, ref) => {
  return (
    <div className="rounded-lg drop-shadow-lg" {...props} ref={ref}>
      <ReactPlayer width="100%" url={video.path} controls />
      <div className="inline-flex gap-2 mt-2">
        <LinkButton href={routeConst.video(video.id)}>Video Profile</LinkButton>
      </div>
    </div>
  );
});
