import { openMenuNav, openCreatePetModal } from "../../scripts/openModal.js";
import { renderAllMyPets } from "../../scripts/render.js";
import { logout } from "../../scripts/logout.js";
import { openMenuNavProfile } from "../../scripts/openModalProfile.js";
import { renderProfileUser } from "../../scripts/render.js";

const tokenUser =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc5MjUyNjUsImV4cCI6MTY2ODUzMDA2NSwic3ViIjoiMzU4MjQ5OGYtZWJkOC00N2NhLWJmZGYtYjA4Y2U1MjFjZmVlIn0.eOYPot70aYLB3VJoa3RSWlfpc4Dibdg_oZYM5H9BotY";

openMenuNav();
openCreatePetModal(tokenUser);
renderAllMyPets(tokenUser);
openMenuNavProfile();
renderProfileUser();
logout();
