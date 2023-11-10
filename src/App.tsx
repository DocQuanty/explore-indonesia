import Header from "./components/Header/Header"
import BlockNavFirstBlock from "./blocks/BlockNav/BlockNav"
import ImageTextBlock from "./blocks/ImageTextBlock/ImageTextBlock"

import roadImg from './assets/images/jpg/road.jpg'
import palmOcean from './assets/images/jpg/palmOcean.jpg'
import SliderBlock from "./components/SliderBlock/SliderBlock"

const textBlockObj1 = { title: "The walkways of Indonesia spellbind", describe: "Lorem ipsum dolor sit amet, consectetur adip iscing elit. Fusce commodo magna et libero mollis rhoncus." }
const textBlockObj2 = { title: "Perfect beaches exude relaxation and fun", describe: "Lorem ipsum dolor sit amet, consectetur adip iscing elit. Fusce commodo magna et libero mollis rhoncus." }

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <BlockNavFirstBlock />
        <ImageTextBlock img={roadImg} text={textBlockObj1} />
        <ImageTextBlock img={palmOcean} text={textBlockObj2} gradient="top" />
        <SliderBlock />
      </div >
    </>
  )
}

export default App
