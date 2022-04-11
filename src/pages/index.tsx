import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useSelector } from 'react-redux';
import { Video } from '~components';
import { State } from '~store/store';

const OverviewPage = () => {
  const videos = useSelector((state: State) => {
    return state.videos;
  });

  return (
    <div className="grid grid-cols-2 grid-flow-row gap-6">
      {videos.map((video) => {
        return <Video key={video.id} video={video} />;
      })}
    </div>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default OverviewPage;
