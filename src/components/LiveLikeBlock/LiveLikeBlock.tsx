import React from 'react';
import s from './LiveLikeBlock.module.scss';
import DefaultText from '../DefaultText/DefaultText';

const data=[
    {title:"Live a life like you wouldn’t imagine, experience a life you wouldn’t expect.",
    video:null,
    cards:[
        {title:"In The Country", text:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore praesentium earum a recusandae mollitia, quia vero obcaecati cupiditate necessitatibus doloribus incidunt quibusdam vel delectus rem ut voluptas. Dolores nulla itaque minus modi placeat perspiciatis velit magni illum labore. Ullam perferendis ad hic voluptatum unde qui? Quisquam nesciunt tenetur porro aut reiciendis laudantium est dicta vitae earum consequuntur omnis incidunt ab quasi provident facilis aliquam, reprehenderit dignissimos ad! A, mollitia sint dolores aperiam fugiat laborum porro harum dignissimos ad? Praesentium modi aliquid id odit sed! At quisquam fugit hic molestias, ea nesciunt esse alias expedita cupiditate officiis iste vitae voluptates ut iusto dolores? Ratione fugiat quia natus voluptatum ullam dolore rerum odio impedit, veritatis dolores iste laborum vitae totam quas harum quis dolor a dolorum mollitia minus? Pariatur vero ipsa nihil voluptas tempore tenetur, accusamus beatae quam odio quis ullam labore est similique? Corrupti temporibus neque ratione sint repellat fuga aspernatur voluptate numquam dolorum, quaerat ex? Numquam at voluptatibus voluptatem sed mollitia ad, molestias quia porro reiciendis animi soluta a sunt inventore exercitationem earum placeat illum architecto incidunt aut velit! Consequuntur praesentium a similique modi quae laudantium voluptatibus dicta soluta obcaecati. Corporis impedit tempore incidunt ipsa neque natus voluptatibus eveniet id."},
        {title:"In The City", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in."}
    ]
        
}
]
const LiveLikeBlock = () => {
    return (
      <section className={s.LiveLikeBlock}>
        {data.map((el, index) => (
          <div className={s.LiveLikeBlock_wrapper} key={index}>
            <div className={s.LiveLikeBlock_title}>
                <DefaultText text={el.title} className={"title"} color={"#000"} />
                {el.title}</div>
            <div className={s.LiveLikeBlock_video}>{el.video}
            </div>
            <div className={s.LiveLikeBlock_wrapperCard}>
              {el.cards.map((card, i) => (
                <div key={i} className={s.wrapperCard_card}>
                    <div key={i} className={s.wrapperCard_title}>{card.title}</div>
                    <div key={i} className={s.wrapperCard_text}>{card.text}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    );
  };
  
  export default LiveLikeBlock;
  