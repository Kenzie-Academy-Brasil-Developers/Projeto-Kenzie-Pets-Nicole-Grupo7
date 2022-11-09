import { requestReadProfile } from "../requests.js";
export { loginVerify };
async function loginVerify() {
  const token = localStorage.getItem("@kezieAdopt:User");
  let verify = await requestReadProfile(token);
  if (verify == undefined) {
    window.location.replace("../../../index.html");
  }
}
