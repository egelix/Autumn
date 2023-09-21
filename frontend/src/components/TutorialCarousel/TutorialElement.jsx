const TutorialElement = ({title, text, imgSrc}) => {
    return(
        <div className="tutorial-element-container">
            <img src={imgSrc}></img>
            <p>{text}</p>
        </div>
    )
}
export default TutorialElement;