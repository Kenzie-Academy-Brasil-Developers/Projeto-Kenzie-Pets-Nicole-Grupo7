import { requestReadProfile } from "../requests.js";
export { loginVerify };
async function loginVerify() {
  const token = JSON.parse(localStorage.getItem("@kenzieAdopt:User"));
  let verify = await requestReadProfile(token);
  if (verify.message == 'Invalid token') {
    window.location.replace("../../../index.html");
  }
}
