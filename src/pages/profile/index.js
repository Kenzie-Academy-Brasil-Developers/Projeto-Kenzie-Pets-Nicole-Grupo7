import { openMenuNav, openCreatePetModal } from "../../scripts/openModal.js";
import { renderAllMyPets } from "../../scripts/render.js";
import { logout } from "../../scripts/logout.js";
import { openMenuNavProfile } from "../../scripts/openModalProfile.js";
import { renderProfileUser } from "../../scripts/render.js";
import { getUserTokenLocalStorage } from "../../scripts/localStorage.js";
import { requestCreatePet } from "../../scripts/requests.js";

<<<<<<< HEAD
localStorage.setItem("@kezieAdopt:User", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc5NjM1MjEsImV4cCI6MTY2ODU2ODMyMSwic3ViIjoiNDg3OTIzY2EtMTE2Zi00ZDFkLWEwNjMtZmFhYzhhOWEyNjNmIn0.FyVuPremQ3MVmCdLMB5wVhUNeUTdLQq1Jfiyf4jiD50")
const tokenUser = localStorage.getItem("@kezieAdopt:User")
console.log(tokenUser)

=======
const token = getUserTokenLocalStorage();
>>>>>>> 05ade89f41d5d2ae323e4932eba5178a32d43524

openMenuNav();
openCreatePetModal(token);
renderAllMyPets(token);
openMenuNavProfile();
renderProfileUser();
logout();
