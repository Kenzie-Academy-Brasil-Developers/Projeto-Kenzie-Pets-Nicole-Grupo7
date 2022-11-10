import { closeRegisterAuto, openLoginAuto } from "./openModal.js";
import { toast } from "./toast.js";

const baseUrl = "https://m2-api-adot-pet.herokuapp.com";

async function registerUser(body) {
  // console.log(body);
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
      toast(`Erro!`, ` Verifique o e-mail ou a URL`);
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
      console.log(response);

      localStorage.setItem("@kenzieAdopt:User", JSON.stringify(token));
      toast("Sucesso!", "Direcionando para HomePage");
      setTimeout(() => {
        window.location.assign("/src/pages/dashboard/index.html");
      }, 3000);
    } else {
      toast("Erro!", " Verifique o e-mail ou a senha");
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

    const response = await request.json();
    return response;
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
async function requestEditPet(token, body, endpoint) {

  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(body)
  };
  
  fetch(`https://m2-api-adot-pet.herokuapp.com/pets/${endpoint}`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

}



async function requestCreateAdoption(petId){
  const token = JSON.parse(localStorage.getItem('@kenzieAdopt:User'))
  
    const request = await fetch(baseUrl + "/adoptions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(petId),
    })
    .then(res => res.json())
    .then(res => res)
    .then(res =>  {
      console.log("RESPOSTA API CREATEADOPTION", res)
      return res
    })
    .catch(err=> console.log("ERRO API CREATEADOPT",err))
    return request
}


async function requestUpdateAdption(changes, adoptionId) {
  const token = JSON.parse(localStorage.getItem('@kenzieAdopt:User'))
  try {
    const request = await fetch(baseUrl + "/adoptions/update/" + adoptionId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        body: changes,
      },
    })
    if (request.ok) {
      console.log(response)
      const response = await request.json();
      return response;
    }
  } catch (err) {
    console.log(err);
  }
}

async function requestDeletePet(token, endpoint){

  try{
      const request = await fetch(baseUrl + "/pets/" + endpoint, {
        method: "DELETE",
        headers: {
        Authorization: `Bearer ${token}`
        }
      })

      if (request.ok) {
        console.log("deu certo")
      }else{
        console.log("deu ruim")
      }
  }catch(err){
    console.log(err)
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
  requestEditPet,
  requestUpdateAdption,
  requestCreateAdoption,
  requestDeletePet
};