
function data() {
    const url = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        // Use the fetched data within this scope
        const firstProjectImg =document.querySelector(".firstProjectImg")
        firstProjectImg.src=data[0].image
        const firstProjectTitle = 
        document.querySelector(".firstProjectTitle")
        firstProjectTitle.innerHTML=data[0].name
        const firstProjectDes =document.querySelector(".firstProjectDes")
        firstProjectDes.innerHTML=data[0].content

        const secondProjectImg =document.querySelector(".secondProjectImg")
        secondProjectImg.src=data[1].image
        const secondProjectTitle = 
        document.querySelector(".secondProjectTitle")
        secondProjectTitle.innerHTML=data[1].name
        const secondProjectDes =document.querySelector(".secondProjectDes")
        secondProjectDes.innerHTML=data[1].content

        const thirdProjectImg =document.querySelector(".thirdProjectImg")
        thirdProjectImg.src=data[2].image
        const thirdProjectTitle = 
        document.querySelector(".thirdProjectTitle")
        thirdProjectTitle.innerHTML=data[2].name
        const thirdProjectDes =document.querySelector(".thirdProjectDes")
        thirdProjectDes.innerHTML=data[2].content
        // You can perform further operations or call other functions using the fetched data here
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }
  

