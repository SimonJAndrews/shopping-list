




    const unorderedList = document.getElementById("unorderedList");


    const input = document.getElementById("item");


    document.getElementById('addButton').onclick = function () {

        userInput = document.getElementById("item").value;


        let newDiv = document.createElement("div");
        newDiv.className = "newDiv";

        
        let newButton = document.createElement("button");
        newButton.innerText = "Delete";
        newButton.className = "newButton";
        

        newButton.onclick = (event)=> {
            event.target.closest(".newDiv").remove();
        };


        const newListItem = document.createElement("li");
        newListItem.innerText = userInput;
        newListItem.className = "listItem";
        newListItem.id = "listItem";


        newDiv.appendChild(newListItem);
        newDiv.appendChild(newButton);
        unorderedList.appendChild(newDiv);

    };



/*let userInput;

const unorderedList = document.getElementById("unorderedList");
const input = document.getElementById("item");
const addToPage = document.getElementById('addButton').onclick = function(){
    userInput = document.getElementById("item").value;
    let newListItem = document.createElement("li");
    newListItem.innerText = userInput;
    unorderedList.appendChild(newListItem);
    
};*/


