
const fetchReverseString = (string) => {
    return fetch("http://localhost:8080/reverse", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(string)
    }).then((res) => res.json());
}

const StringReverser = () => {

    const handleButtonClick = (data) => {
        fetchReverseString(data).then((result) => {
            document.getElementById("stringInput").value = result;
        })
    }


    return (
        <>
            <h1>TEXT REVERSER</h1>
            <div>
                <label>Enter text to be reversed: </label>
                <input type="text" id="stringInput"></input>
                <button type="button" onClick={() => handleButtonClick(document.getElementById("stringInput").value)}>
                    Reverse
                </button>
            </div>
        </>
    )
}

export default StringReverser;