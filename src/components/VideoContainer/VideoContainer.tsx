import s from './VideoContainer.module.scss';
import indonesia from "../../assets/video/Indonesia(1080p).mp4"
import { useEffect, useState } from 'react';

// The clip is decorative and hidden below 1280px, so on smaller screens it is
// not rendered at all (8.5 MB would otherwise still be fetched). Autoplay
// needs `muted` + `playsInline`, otherwise browsers block it.
const VideoContainer = () => {
    const query = '(min-width: 1280px)';
    const [wide, setWide] = useState(() => window.matchMedia(query).matches);
    useEffect(() => {
        const mq = window.matchMedia(query);
        const onChange = () => setWide(mq.matches);
        mq.addEventListener('change', onChange);
        return () => mq.removeEventListener('change', onChange);
    }, []);
    // Start the 8.5 MB clip only after the page (and the hero frame) has loaded.
    const [loaded, setLoaded] = useState(document.readyState === 'complete');
    useEffect(() => {
        if (loaded) return;
        const onLoad = () => setLoaded(true);
        window.addEventListener('load', onLoad);
        return () => window.removeEventListener('load', onLoad);
    }, [loaded]);
    if (!wide || !loaded) return null;
    return <div className={s.videoContainer}>
        <video className={s.videoContainer_video} src={indonesia} muted loop playsInline autoPlay preload="metadata" controls />
    </div>
};
export default VideoContainer;
