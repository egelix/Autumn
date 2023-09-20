const TutorialElement = ({title, text, imgSrc}) => {
    return(
        <div className="tutorial-element-container">
            <h2>{title}</h2>
            <img src={imgSrc}></img>
            <p>{text}</p>
        </div>
    )
}
export default TutorialElement;