import s from './VideoContainer.module.scss';
import indonesia from "../../assets/video/Indonesia(1080p).mp4"

const VideoContainer = () => {
    return <div className={s.videoContainer}>
        <video className={s.videoContainer_video} src={indonesia} controls autoPlay />
    </div>
};
export default VideoContainer;