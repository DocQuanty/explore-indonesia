import s from './PhotoGalleryBlock.module.scss';
import DefaultText from '../DefaultText/DefaultText';

const data = [
    { img01: "https://images.unsplash.com/photo-1524341661047-3a38ae8987f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img02: "https://images.unsplash.com/photo-1523592121529-f6dde35f079e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img03: "https://images.unsplash.com/photo-1512631118612-7bf02594062b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img04: "https://images.unsplash.com/photo-1469967700385-5b0140e16e33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img06: "https://images.unsplash.com/photo-1514351606796-9d81063e482d?q=80&w=1718&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg", img05: "https://images.unsplash.com/photo-1476158085676-e67f57ed9ed7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
]

const PhotoGalleryBlock = () => {
    return <section className={s.PhotoGalleryBlock}>
        <div className={s.PhotoGalleryBlock_wrapper}>
            <div className={s.PhotoGalleryBlock_textBlock}>
                <div className={s.PhotoGalleryBlock_title}>
                    <DefaultText text={"Photo Gallery"} color={"#000"} className={"title"} />
                </div>
                <div className={s.PhotoGalleryBlock_text}>
                    <DefaultText text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt."} className={"additional_GreyText"} />
                </div>
            </div>
            {data.map((el, i) => (
                <div key={i} className={s.PhotoGalleryBlock_gallery}>
                    <div className={s.gallery_row}>
                        <div className={s.gallery_img01}><img src={el.img01} alt="gallery" /></div>
                        <div className={s.gallery_img02}><img src={el.img04} alt="gallery" /></div>
                    </div>
                    <div className={s.gallery_row}>
                        <div className={s.gallery_img03}><img src={el.img02} alt="gallery" /></div>
                        <div className={s.gallery_img04}><img src={el.img05} alt="gallery" /></div>
                    </div>
                    <div className={s.gallery_row}>
                        <div className={s.gallery_img05}><img src={el.img03} alt="gallery" /></div>
                        <div className={s.gallery_img06}><img src={el.img06} alt="gallery" /></div>
                    </div>
                </div>
            ))}
        </div>
    </section>
};
export default PhotoGalleryBlock;