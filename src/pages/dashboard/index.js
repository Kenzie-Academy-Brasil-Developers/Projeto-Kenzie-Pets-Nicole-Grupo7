import { getAllPets } from "../../scripts/dasboard/renderAllPets.js"
import { logoutFunc, profileRedirect } from "../../scripts/dasboard/buttons.js"
import { loginVerify } from "../../scripts/dasboard/loginVerify.js"
import { openMenuNavDashboard } from "../../scripts/openModal.js"

window.onload = () => {
    loginVerify()
}

getAllPets()
logoutFunc()
openMenuNavDashboard()
profileRedirect()