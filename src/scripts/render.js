import { requestReadAllMyPets } from "./requests.js";

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
}

import { requestReadProfile } from "./requests.js";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc5MTg0MjMsImV4cCI6MTY2ODUyMzIyMywic3ViIjoiMWJjYTNlNzUtNjIwNS00NmNmLTk3ZWYtMGE1NDllYzk0YzRjIn0.zURUiOyxu0CjoHk7WNQ5ndn6XCePzWzMmSP7hbtXVOQ";
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
