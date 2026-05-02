// //For name
// let userName = document.getElementById("nameInput");
// let userNameBtn = document.getElementById("nameBtn");
// let allNameBtnRemove = document.getElementById("allNameBtnRemove");
// //Add name
// function nameAdd(){
//     userName.textContent = prompt("Enter Your name :")
//     let value = userName.textContent.trim();
//     while(value === "")
//     {
//        userName.textContent = prompt("Enter Your name :") 
//        value = userName.textContent.trim();
//     }
//     userNameBtn.textContent = "Edit";
// }
// //Remove all btn from nameContainer
// function removeAddBtn()
// {
//     userNameBtn.style.display = "none";
//     allNameBtnRemove.style.display = "none";
// }

//For location
let location = document.getElementById("locationInput");
let locationBtn = document.getElementById("locationBtn");
let removeAllLocationBtn = document.getElementById("removeAllLocationBtn");
let DeleteLocationContainer = document.getElementById("dltLocationContainer");
//Add Location
function locationAdd(){
    location.textContent = prompt("Enter Your location :")
    let value = location.textContent.trim();
    while(value === "")
    {
       location.textContent = prompt("Enter Your location :") 
       value = location.textContent.trim();
    }
    locationBtn.textContent = "Edit Location";
}
//remove Location button
function removeAllLocationButton()
{
    locationBtn.style.display = "none";
    DeleteLocationContainer.style.display = "none";
    removeAllLocationBtn.style.display = "none";
}










let linkedInInput = document.getElementById("linkedInId");
let linkedInLink = document.getElementById("linkedInLink");

let githubInput = document.getElementById("gitHubId");
let githubLink = document.getElementById("githubLink");

//LinkedIn update
linkedInInput.addEventListener("input",() =>{
    let value = linkedInInput.value.trim();
    if(value === "")
    { 
        linkedInLink.style.display = "none";
    }
    else  
    {
        if(!value.startsWith("http"))
        {
            value = "https://" + value;
        }
        linkedInLink.style.display = "inline"; 
        linkedInLink.href = value;
        linkedInLink.textContent = "LinkedIn";
        linkedInInput.style.display = "none";
    }
})

//GitHub update
githubInput.addEventListener("input", ()=>{
    let value = githubInput.value.trim();
    if(value === "")
    { 
        githubLink.style.display = "none";
    }
    else  
    {
        if(!value.startsWith("http"))
        {
            value = "http://" + value;
        }
        githubLink.style.display = "inline";
        githubLink.href= value;
        githubLink.textContent = "GitHub";
        githubInput.style.display = "none";
    }
});