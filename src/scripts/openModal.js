import { getUserTokenLocalStorage } from "./localStorage.js";
import {
  registerUser,
  requestCreatePet,
  requestEditPet,
  requestLogin,
} from "./requests.js";

const token = getUserTokenLocalStorage();

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
  const buttonOpen = document.querySelectorAll("#btnRegister");
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
        if (ele.tagName == "INPUT") {
          body[ele.id] = ele.value;
        }
      });

      registerUser(body);
    });
  });
  btnCloseModal.onclick = () => {
    modal.close();
  };
};
export const openRegisterModalMobile = async () => {
  const buttonOpen = document.querySelectorAll("#btnRegisterMobile");
  const modal = document.querySelector(".modalRegisterMobile");
  const btnCloseModal = document.querySelector(".btnCloseRegisterMobile");

  buttonOpen.forEach((element) => {
    element.addEventListener("click", async (e) => {
      modal.showModal();
    });

    const form = document.querySelector(".registerFormMobile");
    const elements = [...form.elements];

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const body = {};

      elements.forEach((ele) => {
        if (ele.tagName == "INPUT") {
          body[ele.id] = ele.value;
        }
      });

      await registerUser(body);
    });
  });
  btnCloseModal.onclick = () => {
    modal.close();
  };
};

export const openLoginModal = async () => {
  const buttonOpen = document.querySelectorAll("#btnLogin");

  const modal = document.querySelector("#modalLogin");
  const btnClose = document.querySelector("#btnCloseLogin");

  buttonOpen.forEach((element) => {
    element.addEventListener("click", async (e) => {
      modal.showModal();
    });
    const form = document.querySelector("#loginModal");
    const elements = [...form.elements];

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const body = {};
      elements.forEach((ele) => {
        if (ele.tagName == "INPUT") {
          body[ele.dataset.id] = ele.value;
        }
      });
      await requestLogin(body);
      // const token = getUserTokenLocalStorage();
    });
  });
  // btnClose.onclick = () => {
  //   // ;
  //   console.log("cliquei");
  btnClose.addEventListener("click", () => {
    modal.close();
  });
};

export const openLoginModalMobile = async () => {
  const buttonOpen = document.querySelectorAll("#btnLoginMobile");

  const modal = document.querySelector(".modalLoginMobile");
  const btnCloseModal = document.querySelector("#btnCloseLoginModal");
  buttonOpen.forEach((element) => {
    element.addEventListener("click", async (e) => {
      modal.showModal();
    });
    const form = document.querySelector(".loginFormMobile");
    const elements = [...form.elements];

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const body = {};
      elements.forEach((ele) => {
        if (ele.tagName == "INPUT") {
          body[ele.dataset.id] = ele.value;
        }
      });
      await requestLogin(body);
      const token = getUserTokenLocalStorage();
    });
  });
  btnCloseModal.addEventListener("click", () => {
    modal.close();
  });
};

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
export const openLoginAuto = () => {
  const modal = document.querySelector("#modalLogin");
  modal.showModal();
  return modal;
};
export const closeRegisterAuto = () => {
  const modal = document.querySelector("#modalRegister");
  const modalMobile = document.querySelector(".modalRegisterMobile");

  modal.close();
  modalMobile.close();
};
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
        if (
          (ele.tagName == "INPUT" || ele.tagName == "SELECT") &&
          ele.value !== ""
        ) {
          body[ele.id] = ele.value;
        }
      });

      await requestCreatePet(token, body);
      window.location.reload();
    });
  });
  btnCloseModal.onclick = () => {
    modal.close();
  };
};

export const changeModalToRegister = () => {
  const btnChange = document.querySelector("#btnChange");
  const modal = document.querySelector("#modalRegister");
  const modalClose = document.querySelector("#modalLogin");

  btnChange.addEventListener("click", (e) => {
    e.preventDefault();
    modal.showModal();
    modalClose.close();
  });
};
export const changeModalToLogin = () => {
  const btnChange = document.querySelectorAll(".btnChangeToLogin");
  const modal = document.querySelector("#modalLogin");
  const modalClose = document.querySelector("#modalRegister");
  const modalCloseMobile = document.querySelector(".modalRegisterMobile");

  btnChange.forEach((clique) => {
    clique.addEventListener("click", (e) => {
      e.preventDefault();

      modal.showModal();
      modalClose.close();
      modalCloseMobile.close();
    });
  });
};
export const modalEditpet = async (token, endpoint, button) => {
  const buttonOpen = document.querySelectorAll(".btnEditPet");
  const modal = document.querySelector("#modalEditpet");
  const btnCloseModal = document.querySelector("#btnCloseEditPet");

  buttonOpen.forEach((element) => {
    element.addEventListener("click", async (e) => {
      modal.showModal();
      console.log("1");
    });

    console.log("2");
  });

  btnCloseModal.onclick = () => {
    modal.close();
  };
};
