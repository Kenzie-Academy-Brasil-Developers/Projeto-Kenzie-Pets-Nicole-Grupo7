import { getUserTokenLocalStorage } from "./localStorage.js";
import { modalEditpet } from "./openModal.js";
import {
  requestDeletePet,
  requestEditPet,
  requestReadAllMyPets,
} from "./requests.js";

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
          <button id="${id}" class="btnYellow-box"> Atualizar </button>
        </section>
        </li>
        `
    );
  });
  ul.addEventListener("click", async (e) => {
    e.preventDefault();

    if (e.target.tagName == "BUTTON") {
      const token = getUserTokenLocalStorage();
      const endpoint = e.target.id;
      const modal = document.querySelector("#modalEditpet");
      const btnCloseModal = document.querySelector("#btnCloseEditPet");
      const form = document.querySelector("#editPetForm");
      const elements = [...form.elements];
      const btnDeletepet = document.querySelector("#deletePet");

      modal.showModal();
      console.log(btnDeletepet);

      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const body = {};

        elements.forEach((ele) => {
          if (
            (ele.tagName == "INPUT" || ele.tagName == "SELECT") &&
            ele.value !== ""
          ) {
            body[ele.id] = ele.value;
          }
        });

        await requestEditPet(token, body, endpoint);

        await renderAllMyPets(token);
        modal.close();
        window.location.reload();
      });

      btnDeletepet.addEventListener("click", async (e) => {
        await requestDeletePet(token, endpoint);
        ul.innerHTML = "";
        await renderAllMyPets(token);
        modal.close();
      });

      btnCloseModal.onclick = () => {
        modal.close();
      };
    }
  });
}

import { requestReadProfile } from "./requests.js";

//============== render profile ===================

export async function renderProfileUser() {
  const request = await requestReadProfile(token);

  const avatarUser = document.querySelector("#useravatar");
  const nameUser = document.querySelector("#username");
  const emailUser = document.querySelector("#useremail");

  avatarUser.src = `${request.avatar_url}`;
  nameUser.innerHTML = `<span>nome: </span> ${request.name}`;
  emailUser.innerHTML = `<span>email: </span> ${request.email}`;
}

//============== move to home ===================

export function moveToHome() {
  const button = document.querySelector("#btnToHome");
  button.addEventListener("click", () => {
    window.location.replace("/src/pages/dashboard/index.html");
  });
}
