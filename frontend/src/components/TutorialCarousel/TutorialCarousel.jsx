import { useState } from "react";
import TUTORIAL_DATA from "./tutorialData";
import TutorialElement from "./TutorialElement";

const TutorialCarousel = () => {
    const [index, setIndex] = useState(0);
    const [currentInfoElement, setCurrentInfoElement] = useState(TUTORIAL_DATA[index]);
    const length = TUTORIAL_DATA.length;
    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
        setCurrentInfoElement(TUTORIAL_DATA[index]);
      };
    
      const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
        setCurrentInfoElement(TUTORIAL_DATA[index]);
      };
    return(<div className="tutorial-carousel">
        <div className="tutorial-buttons-header">
            <button onClick={handlePrevious}>PREVIOUS</button>
            {TUTORIAL_DATA.map((infoElement) => {
                return <button key={infoElement.index} onClick={() => {
                    setIndex(infoElement.index);
                    setCurrentInfoElement(TUTORIAL_DATA[index]);
                }}>{infoElement.title}</button>
            })}
            <button onClick={handleNext}>NEXT</button>
        </div>
        <TutorialElement title={currentInfoElement.title} text={currentInfoElement.text} imgSrc={currentInfoElement.imgSrc} />
    </div>)
}
export default TutorialCarousel;