let button = document.getElementById("btn");

function request () {

fetch("./script/files.json")
    .then((response) => response.json())
    .then((json) => {
        const unlist = document.createElement("ul");
        document.body.appendChild(unlist);
        for (let i = 0; i < json.length; i++) {
            const obj = json[i];
            const list = document.createElement("li");
            const list1 = document.createElement("li");
            const list2 = document.createElement("li");
            const list3 = document.createElement("li");
            list.textContent = `Firstname : ${obj.firstname}`;
            list1.textContent = `Name : ${obj.name}`;
            list2.textContent = `Age : ${obj.age}`;
            list3.textContent = `City : ${obj.city}`;
            unlist.appendChild(list);
            unlist.appendChild(list1);
            unlist.appendChild(list2);
            unlist.appendChild(list3);
        }
    })
    .catch((error) => {
        console.log("There was an error", error);
    });
}

button.addEventListener("click", request);