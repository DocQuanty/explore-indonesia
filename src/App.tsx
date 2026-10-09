import Header from "./components/Header/Header"
import BlockNavFirstBlock from "./blocks/BlockNav/BlockNav"
import ImageTextBlock from "./blocks/ImageTextBlock/ImageTextBlock"
import PhotoGalleryBlock from "./components/PhotoGalleryBlock/PhotoGalleryBlock"

import roadImg from './assets/images/jpg/road.jpg'
import palmOcean from './assets/images/jpg/palmOcean.jpg'
import OurHillsBlock from "./components/OurHillsBlock/OurHillsBlock"
import LiveLikeBlock from "./components/LiveLikeBlock/LiveLikeBlock"
import SliderSecretsBlock from "./components/SliderBlock/SliderSecretsBlock"
import GettingThere from "./components/GettingThere/GettingThere"
import Footer from "./components/Footer/Footer"



const textBlockObj1 = { title: "The walkways of Indonesia spellbind", describe: "Boardwalks through savanna and cloud forest, with a volcano on the horizon of almost every trail." }
const textBlockObj2 = { title: "Perfect beaches exude relaxation and fun", describe: "Snorkel the reefs of Raja Ampat, then end the day under palms on a beach you have to yourself." }

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <BlockNavFirstBlock />
        <ImageTextBlock id="destinations" img={roadImg} alt="Boardwalk through a mountain valley" text={textBlockObj1} gradient="bot" flexReverse="flex" />
        <ImageTextBlock img={palmOcean} alt="Palm tree over a turquoise sea" text={textBlockObj2} gradient="top" flexReverse="revers" />
        <SliderSecretsBlock />
        <OurHillsBlock />
        <LiveLikeBlock />
        <PhotoGalleryBlock />
        <GettingThere />
        <Footer />
      </div >
    </>
  )
}

export default App
