(function(){
     const createLabel = document.createElement("label");
    createLabel.setAttribute("for", "name");
    document.getElementById("input").append(createLabel);
    createLabel.innerHTML = `Player 1:`;
    const createTag = document.createElement("p");
    createTag.setAttribute("id", "values");
    document.getElementById("input").append(createTag);
    const addPara = document.querySelector("p");
    const playerOneText = `Chris`;
    addPara.innerHTML = playerOneText;
    const createForm = document.createElement("input");
     createForm.setAttribute("type", "text");
     createForm.setAttribute("name", "playerName");
     createForm.setAttribute("placeholder", "Enter Name");
     createForm.setAttribute("ID", "name");
     createForm.setAttribute("maxlength" , "12")
     document.getElementById("container").append(createForm);
     const log = document.getElementById("values");
     createForm.addEventListener("input", updateValue);
     function updateValue(e){
    log.textContent = e.target.value;
     }
})()