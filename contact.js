const validation = ()=>{
    const name =document.querySelector(".inputName").value
    if(name === ""){
        alert("Pleas insert a Name")
    }
    else if(name === "Iron Hack"){

        alert("You cannot be Ironhack, because I am Ironhack.")
    }
    
   
}
const form = document.getElementById("form")
form.addEventListener("submit",function submit(e){
    e.preventDefault()
validation()
   
})





