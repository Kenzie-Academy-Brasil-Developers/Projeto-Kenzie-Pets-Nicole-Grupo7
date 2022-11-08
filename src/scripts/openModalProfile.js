export const openMenuNavProfile = () => {
    const buttonOpen = document.querySelector("#btnModalNav");
    const modal = document.querySelector("#modalNav");
    const img = document.querySelector(".imgBtnNav");
    const btnClose = document.querySelector("#btnCloseNav");
  
    buttonOpen.onclick = () => {
      img.src = "";
      modal.show();
    };
    btnClose.onclick = () => {
      img.src = "../../assets/btn menu.png";
      modal.close();
    };
  };