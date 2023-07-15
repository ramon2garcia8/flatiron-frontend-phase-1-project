let addMartialArts = false;

fetch("http://localhost:3000/martial-arts")
  .then(res => res.json())
  .then(data => data.forEach(martialart => createAllCards(martialart)))

  function createAllCards(martialart) { 
    const divCard = document.createElement("div")
    divCard.className = "card"
    const h2Card = document.createElement("h2")
    h2Card.textContent = martialart.name + " (" + martialart.country + ")"
    const imgCard = document.createElement("img")
    imgCard.src = martialart.image
    imgCard.id = "martial-arts-image"
    //imgCard.height = "500"
    //imgCard.width = "600"
    const brCard = document.createElement("br")
    const buttonCard = document.createElement("button")

    function handleDelete () {
      divCard.remove()
      deleteCard(martialart.id)
    }

    buttonCard.addEventListener('click', handleDelete)
    buttonCard.textContent = "Delete"
   
    divCard.append(h2Card, imgCard, brCard, buttonCard)
    const martialartsCollection = document.getElementById("martial-arts-collection")
    martialartsCollection.append(divCard)
  }

  function deleteCard(id) {
    const config = {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
    }
    fetch(`http://localhost:3000/martial-arts/${id}`, config)
    .then(res => res.json())
    .then(data => console.log(data))
  }

  document.addEventListener("DOMContentLoaded", () => {
    const martialartsForm = document.getElementsByClassName("add-martial-arts-form")[0]

    const addBtn = document.querySelector("#new-martial-arts-button")
    const martialArtsFormContainer = document.querySelector(".container")
    addBtn.addEventListener("click", () => {
      // hide & seek with the form
      addMartialArts = !addMartialArts
      if (addMartialArts) {
        martialArtsFormContainer.style.display = "block"
      } else {
        martialArtsFormContainer.style.display = "none"
      }
    })

    martialartsForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const martialArtsArray = document.getElementsByClassName("input-text")
        const martialArtsName = martialArtsArray[0].value
        const martialArtsCountry = martialArtsArray[1].value
        const martialArtsImage = martialArtsArray[2].value
    
        const martialArtsObj = {
          name: martialArtsName,
          country: martialArtsCountry,
          image: martialArtsImage
        }
    
        const config = {
          method: "POST",
          headers: {"Content-Type": "application/json"},
    
          body: JSON.stringify(martialArtsObj)
        }
        fetch("http://localhost:3000/martial-arts", config)
        .then(res => res.json())
        .then(data => createAllCards(data))
      })
  })


