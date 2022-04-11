import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { BaseButton, Form, FormControl, FormHelperText } from '~components';
import { addCommentAction } from '~store/reducers';
import { commentsForVideo, findVideo } from '~store/selectors';
import { State } from '~store/store';

type VideoPageQueryParams = {
  id?: string;
};

const VideoPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id }: VideoPageQueryParams = router.query;
  const addCommentFormSchema = yup.object({
    text: yup.string().required(),
  });
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<yup.InferType<typeof addCommentFormSchema>>({
    resolver: yupResolver(addCommentFormSchema),
  });

  const video = useSelector((state: State) => {
    if (id) {
      return findVideo(state, Number(id));
    }

    return null;
  });
  const comments = useSelector((state: State) => {
    if (id) {
      return commentsForVideo(state, Number(id));
    }

    return null;
  });

  const onAddComment = handleSubmit(({ text }) => {
    dispatch(addCommentAction({ videoId: Number(id), text }));
    setValue('text', '');
  });

  if (video) {
    return (
      <div className="flex flex-col gap-3">
        <div>
          <ReactPlayer width="100%" url={video.path} controls />
        </div>

        <Form onSubmit={onAddComment}>
          <FormControl>
            <textarea className="border-2" {...register('text')} />
            {errors.text && <FormHelperText>{errors.text.message}</FormHelperText>}
          </FormControl>

          <BaseButton type="submit">Add Comment</BaseButton>
        </Form>

        <div className="flex flex-col gap-5">
          {comments?.map((comment) => {
            return (
              <div key={comment.id} className="border-b-2">
                {comment.text}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
};

export default VideoPage;
