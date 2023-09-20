import { useState } from "react";

const TutorialCarousel = () => {
    const [index, setIndex] = useState(0);
    const length = 4;
    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
      };
    
      const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
      };
    return(<div className="tutorial-carousel">
        <div className="tutorial-buttons-header">
            <button onClick={handlePrevious}>PREVIOUS</button>
            <button onClick={handleNext}>NEXT</button>
        </div>
        {index}
    </div>)
}
export default TutorialCarousel;