import {requestReadAllMyPets} from "./requests.js"


export async function renderAllMyPets (token){

    const ul = document.querySelector(".ulRenderAllMyPets")

    const list = await requestReadAllMyPets(token)

    list.forEach(element => {
        
        const {id, name, bread, species, available_for_adoption, avatar_url, guardian_id} = element
        
        function available (){
            if(available_for_adoption){
                return "Sim"
            }
            return "Não"
        }

        ul.insertAdjacentHTML("beforeend", `
        
        <li>
        <img src="${avatar_url}" alt="${name}">
        <section>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Espécie:</strong> ${species}</p>
          <p><strong>Adotável:</strong> ${available ()}</p>
          <button id="${id}" class="btnYellow-box"> Atualizar </button>
        </section>
        </li>
        `)
    });
    
}

