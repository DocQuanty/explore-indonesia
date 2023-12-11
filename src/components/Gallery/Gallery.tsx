import React from 'react';
import s from './Gallery.module.scss';

type Photo = {
    img01: string;
    img02: string;
    img03: string;
    img04: string;
    img05: string;
    img06: string;
  };
  
  type Photos = Photo[];
  
  const Gallery: React.FC<{dataPhotos:Photos }> = ({ dataPhotos  }) => {
    return (
      <section className={s.gallery}>
        {dataPhotos.map((el, i) => (
          <div key={i} className={s.gallerySection}>
            <div className={s.gallerySection_row}>
              <div className={s.gallerySection_img01}><img src={el.img01} alt="gallerySection" /></div>
              <div className={s.gallerySection_img02}><img src={el.img04} alt="gallerySection" /></div>
            </div>
            <div className={s.gallerySection_row}>
              <div className={s.gallerySection_img03}><img src={el.img02} alt="gallerySection" /></div>
              <div className={s.gallerySection_img04}><img src={el.img05} alt="gallerySection" /></div>
            </div>
            <div className={s.gallerySection_row}>
              <div className={s.gallerySection_img05}><img src={el.img03} alt="gallerySection" /></div>
              <div className={s.gallerySection_img06}><img src={el.img06} alt="gallerySection" /></div>
            </div>
          </div>
        ))}
      </section>
    );
  };
  
  export default Gallery;
  