import { closeRegisterAuto, openLoginAuto } from "./openModal.js";
import { toast } from "./toast.js";

const baseUrl = "https://m2-api-adot-pet.herokuapp.com";

async function registerUser(body) {
  try {
    const request = await fetch(`${baseUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (request.ok) {
      toast("Sucesso!", "Usuário criado com sucesso!");
      setTimeout(() => {
        closeRegisterAuto();
        openLoginAuto();
      }, 3000);
    } else {
      toast("Erro!", "Verifique o e-mail e a url da foto");
    }
  } catch (err) {
    console.log(err);
  }
}

async function requestLogin(body) {
  try {
    const request = await fetch(baseUrl + "/session/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (request.ok) {
      const response = await request.json();
      const {
        user: { name, email, avatar_url },
        token,
      } = response;
      window.location.assign("../dashboard/index.html");

      localStorage.setItem("@kezieAdopt:User", JSON.stringify(token));
    }
  } catch (err) {
    console.log(err);
  }
}

async function requestCreateUser(body) {
  try {
    const request = await fetch(baseUrl + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (request.ok) {
      const response = await request.json();
      const { id, name, email, avatar_url } = response;
    }
  } catch (err) {
    console.log(err);
  }
}

async function requestGetAllUsers(token) {
  try {
    const request = await fetch(baseUrl + "/users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (request.ok) {
      const response = await request.json();
      console.log(response);
      return response;
    }
  } catch (err) {
    console.log(err);
  }
}

async function requestReadProfile(token) {
  try {
    const request = await fetch(baseUrl + "/users/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (request.ok) {
      const response = await request.json();
      return response;
    }
  } catch (err) {
    console.log(err);
  }
}

async function requestUpdateProfile(token, body) {
  try {
    const request = await fetch(baseUrl + "/users/profile", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    if (request.ok) {
      console.log("ok");
    }
  } catch (err) {
    console.log(err);
  }
}

async function deleteProfile(token) {
  try {
    const request = await fetch(baseUrl + "/users/profile", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    console.log(err);
  }
}
async function requestCreatePet(token, body) {
  try {
    const request = await fetch(`${baseUrl}/pets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    if (request.ok) {
      console.log("deu certo");
    } else {
      console.log("deu ruim");
    }
  } catch (err) {
    console.log(err);
  }
}
async function requestReadAllMyPets(token) {
  try {
    const request = await fetch(baseUrl + "/pets/my_pets", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (request.ok) {
      const response = await request.json();
      return response;
    }
  } catch (err) {
    console.log(err);
  }
}

async function requestAllPets(token) {
  try {
    const request = await fetch(baseUrl + "/pets", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (request.ok) {
      const response = await request.json();
      return response;
    }
  } catch (err) {
    console.log(err);
  }
}

async function requestEditPet(token, body, endpoint){

  try {
    const request = await fetch(`${baseUrl}/pets/${endpoint}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    if (request.ok) {
      console.log("deu certo");
    } else {
      console.log("deu ruim");
    }
  } catch (err) {
    console.log(err);
  }
}

export {
  requestReadAllMyPets,
  requestCreatePet,
  registerUser,
  requestLogin,
  requestCreateUser,
  requestGetAllUsers,
  requestReadProfile,
  requestUpdateProfile,
  deleteProfile,
  requestAllPets,
  requestEditPet
};
