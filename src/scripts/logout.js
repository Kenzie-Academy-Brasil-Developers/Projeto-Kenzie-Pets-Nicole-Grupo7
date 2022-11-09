export function logout() {
  const button = document.querySelector("#btnlogout");
  button.addEventListener("click", () => {
    // console.log("oii");
    localStorage.removeItem("@kenzieAdopt:User");
    window.location.replace("/index.html");
  });
}
