import {
  openMenuNav,
  openCreatePetModal,
  modalEditpet,
} from "../../scripts/openModal.js";
import { renderAllMyPets } from "../../scripts/render.js";
import { logout } from "../../scripts/logout.js";
import { openMenuNavProfile } from "../../scripts/openModalProfile.js";
import { modalUpdateProfile } from "../../scripts/openModalProfile.js";
import { renderProfileUser } from "../../scripts/render.js";
import { getUserTokenLocalStorage } from "../../scripts/localStorage.js";

import { modalDeleteProfile } from "../../scripts/openModalProfile.js";
import { moveToHome } from "../../scripts/render.js";

import { requestCreatePet } from "../../scripts/requests.js";

const token = getUserTokenLocalStorage();

openMenuNav();
openCreatePetModal(token);
renderAllMyPets(token);
openMenuNavProfile();
renderProfileUser();
modalUpdateProfile()
logout();
modalDeleteProfile()
moveToHome()
modalEditpet();

