export const toast = (title, message) => {
  const body = document.querySelector("body");

  const containerToast = document.createElement("div");
  containerToast.classList = "container-toast";

  const divTitle = document.createElement("div");
  divTitle.classList = "flex gap12";

  const divImg = document.createElement("div");

  const imgCheck = document.createElement("img");

  const titleToast = document.createElement("h3");

  const messageToast = document.createElement("p");
  messageToast.classList = "toast-text";

  if (title == "Sucesso!" || title == "Sua conta foi criada com sucesso!") {
    titleToast.classList = "toast-h3Sucess";
    divImg.classList = "box-checkSucess";
    imgCheck.src = "/src/assets/check-solid.svg";
  } else {
    titleToast.classList = "toast-h3Error";
    divImg.classList = "box-checkError";
    imgCheck.src = "/src/assets/exclamation-solid.svg";
  }
  titleToast.innerText = title;
  messageToast.innerText = message;

  containerToast.append(divTitle, messageToast);
  divImg.append(imgCheck);
  divTitle.append(divImg, titleToast);
  body.appendChild(containerToast);
};
