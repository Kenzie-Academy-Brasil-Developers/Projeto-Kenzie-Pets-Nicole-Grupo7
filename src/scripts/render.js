import { getUserTokenLocalStorage } from "./localStorage.js";
import { modalEditpet } from "./openModal.js";
import { requestReadAllMyPets } from "./requests.js";
const token = getUserTokenLocalStorage();

export async function renderAllMyPets(token) {
  const ul = document.querySelector(".ulRenderAllMyPets");

  const list = await requestReadAllMyPets(token);

  list.forEach((element) => {
    const {
      id,
      name,
      bread,
      species,
      available_for_adoption,
      avatar_url,
      guardian_id,
    } = element;

    function available() {
      if (available_for_adoption) {
        return "Sim";
      }
      return "Não";
    }

    ul.insertAdjacentHTML(
      "beforeend",
      `
        
        <li>
        <img src="${avatar_url}" alt="${name}">
        <section>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Espécie:</strong> ${species}</p>
          <p><strong>Adotável:</strong> ${available()}</p>
          <button id="${id}" class="btnYellow-box btnEditPet"> Atualizar </button>
        </section>
        </li>
        `
    );
  });
  ul.addEventListener("click", async (e) => {
    e.preventDefault();

    if (e.target.tagName == "BUTTON") {
      console.log(e.target.id);
      await modalEditpet(token, e.target.id);
    }
  });
}

import { requestReadProfile } from "./requests.js";

//============== render profile ===================
export async function renderProfileUser() {
  const request = await requestReadProfile(token);
  console.log(request);
  const avatarUser = document.querySelector("#useravatar");
  const nameUser = document.querySelector("#username");
  const emailUser = document.querySelector("#useremail");

  avatarUser.src = `${request.avatar_url}`;
  nameUser.innerHTML = `<span>nome: </span> ${request.name}`;
  emailUser.innerHTML = `<span>email: </span> ${request.email}`;
}
