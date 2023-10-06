const textInput = document.getElementById("textInput");
const button = document.getElementById("btn");
const board = document.getElementById("board");

const fetchName = (textInput) => fetch("https://api.zippopotam.us/be/" + textInput.value);

button.addEventListener("click", () => {
    fetchName(textInput)
	.then((response) => response.json())
	.then((json) => {
        console.log(json.country);
        console.log(json.places);
        console.log(json.zip);
        const list = document.createElement("li");
        list.textContent = `Country : ${json.country}`;
        board.appendChild(list);
	})
	.catch((error) => {
		console.log("There was an error!", error);
	});
});
