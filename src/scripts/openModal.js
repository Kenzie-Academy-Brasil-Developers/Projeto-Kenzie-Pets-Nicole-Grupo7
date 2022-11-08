import {requestCreatePet} from "./requests.js"

export const openMenuNav = () => {
  const buttonOpen = document.querySelector("#btnModalNav");
  const modal = document.querySelector("#modalNav");
  const img = document.querySelector(".imgBtnNav");
  const btnClose = document.querySelector("#btnCloseNav");

  buttonOpen.onclick = () => {
    img.src = "";
    modal.show();
  };
  btnClose.onclick = () => {
    img.src = "./src/assets/btn menu.png";
    modal.close();
  };
};

export const openRegisterModal = async () => {
  const buttonOpen = document.querySelectorAll(".btnRegister");
  const modal = document.querySelector("#modalRegister");
  const btnCloseModal = document.querySelector("#btnCloseRegister");

  buttonOpen.forEach((element) => {
    element.addEventListener("click", async (e) => {
      modal.showModal();
    });

    const form = document.querySelector("#registerForm");
    const elements = [...form.elements];

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const body = {};

      elements.forEach((ele) => {
        body[ele.id] = ele.value;
      });
      console.log(body);
    });
  });
  btnCloseModal.onclick = () => {
    modal.close();
  };
};

export const openLoginModal = async () => {
  const buttonOpen = document.querySelectorAll(".btnLogin");
  const modal = document.querySelector("#modalLogin");
  const btnCloseModal = document.querySelector("#btnCloseLogin");
  buttonOpen.forEach((element) => {
    element.addEventListener("click", async (e) => {
      modal.showModal();
    });
  });
  btnCloseModal.onclick = () => {
    modal.close();
  };
};

<<<<<<< HEAD
export const openCreatePetModal = async (token) => {

  const buttonOpen = document.querySelectorAll("#btnCreatePet");
  const modal = document.querySelector("#modalCreatepet");
  const btnCloseModal = document.querySelector("#btnCloseCreatePet");

  buttonOpen.forEach((element) => {
    element.addEventListener("click", async (e) => {
      modal.showModal();
    });

    const form = document.querySelector("#createPetForm");
    const elements = [...form.elements];

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const body = {};

      elements.forEach((ele) => {
        if ((ele.tagName == "INPUT" || ele.tagName == "SELECT") && ele.value !== ""){

          body[ele.id] = ele.value;
        }
      });
      
      requestCreatePet(token, body)
      // location.reload();
    });
  });
  btnCloseModal.onclick = () => {
    modal.close();
  };
}
=======
export const openMenuNavDashboard = () => {
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
>>>>>>> c989b5e89a3ec8dbcfe61d5a58592482798815fe
