import { openMenuNav, openCreatePetModal } from "../../scripts/openModal.js";
import { renderAllMyPets } from "../../scripts/render.js";
import { logout } from "../../scripts/logout.js";
import { openMenuNavProfile } from "../../scripts/openModalProfile.js";
import { renderProfileUser } from "../../scripts/render.js";

localStorage.setItem("@kezieAdopt:User", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc5NjM1MjEsImV4cCI6MTY2ODU2ODMyMSwic3ViIjoiNDg3OTIzY2EtMTE2Zi00ZDFkLWEwNjMtZmFhYzhhOWEyNjNmIn0.FyVuPremQ3MVmCdLMB5wVhUNeUTdLQq1Jfiyf4jiD50")
const tokenUser = localStorage.getItem("@kezieAdopt:User")
console.log(tokenUser)


openMenuNav();
openCreatePetModal(tokenUser);
renderAllMyPets(tokenUser);
openMenuNavProfile();
renderProfileUser();
logout();
