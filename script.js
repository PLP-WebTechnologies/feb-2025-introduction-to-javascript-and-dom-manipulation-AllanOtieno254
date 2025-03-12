// Function to change text dynamically
function changeText() {
    document.getElementById("description").textContent = "Text has been changed!";
}

// Function to modify CSS styles via JavaScript
function toggleColor() {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === "lightblue" ? "#f4f4f4" : "lightblue";
}

// Function to add an element dynamically
function addElement() {
    let newElement = document.createElement("p");
    newElement.textContent = "New Element Added!";
    newElement.style.color = "green";
    document.getElementById("container").appendChild(newElement);
}

// Function to remove an element dynamically
function removeElement() {
    let container = document.getElementById("container");
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
}
