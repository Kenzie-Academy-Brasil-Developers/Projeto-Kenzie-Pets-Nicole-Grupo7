import { openMenuNav, openCreatePetModal } from "../../scripts/openModal.js";
import { renderAllMyPets } from "../../scripts/render.js";
import { logout } from "../../scripts/logout.js";
import { openMenuNavProfile } from "../../scripts/openModalProfile.js";
import { renderProfileUser } from "../../scripts/render.js";
import { getUserTokenLocalStorage } from "../../scripts/localStorage.js";

const token = getUserTokenLocalStorage();

openMenuNav();
openCreatePetModal(token);
renderAllMyPets(token);
openMenuNavProfile();
renderProfileUser();
logout();
