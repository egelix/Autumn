import TutorialCarousel from "../../components/TutorialCarousel/TutorialCarousel";
import "./Tutorial.css";

const TutorialPage = () => {
    return(<div className="page-root">
        <div className="tutorial-container">
            <div className="tutorial-hl">
                <h1>HOW TO STRUGGLE</h1>
            </div>
        <TutorialCarousel />
        </div>
    </div>
    )
}
export default TutorialPage;