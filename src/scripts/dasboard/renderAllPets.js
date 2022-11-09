import { requestAllPets, requestReadProfile, requestUpdateAdption, requestCreateAdoption } from "../requests.js"
export { getAllPets }

async function getAllPets() {
    let petRequest = await requestAllPets()

    petRequest.forEach(pet => {
        if (pet.available_for_adoption == true) { renderAllPets(pet) }
    })
    petRequest.forEach(pet => {
        if (pet.available_for_adoption == false) { renderAllPets(pet) }
    })
}

const user = await requestReadProfile(JSON.parse(localStorage.getItem('@kenzieAdopt:User')))


function renderAllPets(pet) {
    const petBoxSelect = document.querySelector('.all-pets-box')
    const card = document.createElement('div')
    const figure = document.createElement('figure')
    const img = document.createElement('img')
    const name = document.createElement('h3')
    const species = document.createElement('p')
    const adoptBtn = document.createElement('button')

    card.classList.add('all-pets-card')
    figure.classList.add('all-pets-figure')
    img.classList.add('all-pets-img')
    name.classList.add('all-pets-name')
    species.classList.add('all-pets-species')

    img.src = pet.avatar_url
    name.innerText = pet.name
    species.innerText = pet.species

    figure.append(img)
    card.append(figure, name, species, adoptBtn)
    petBoxSelect.append(card)

    if (pet.available_for_adoption == true) {
        adoptBtn.classList.add('available-for-adoption-btn')
        adoptBtn.innerText = "Me adota?"
        adoptBtn.addEventListener('click', async (event) => {
            event.preventDefault()
            let petId = {
                pet_id: pet.id
            }
            await requestCreateAdoption(petId)  
            window.location.reload()
        })
    } else {
        adoptBtn.classList.add('already-adopted-btn')
        adoptBtn.innerText = "Já fui adotado"
    }
}