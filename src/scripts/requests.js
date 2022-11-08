const baseUrl = "https://m2-api-adot-pet.herokuapp.com";

<<<<<<< HEAD
async function requestRegisterUser(body) {
=======
async function registerUser(body) {
>>>>>>> c989b5e89a3ec8dbcfe61d5a58592482798815fe
  try {
    const request = await fetch(`${baseUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (request.ok) {
      window.location.href = "teste";
    } else {
      console.log("deu ruim");
    }
  } catch (err) {
    console.log(err);
  }
}

async function requestLogin(body){

  try{
      const request = await fetch(baseUrl + "/session/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
      })  

      if (request.ok){

          const response = await request.json()
          const {user:{name, email, avatar_url}, token} = response
          
          localStorage.setItem("@kezieAdopt:User", JSON.stringify(token))

      }
  }catch(err){
      console.log(err)
  }
}

async function requestCreateUser(body){

  try{
      const request = await fetch(baseUrl + "/users", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
      })  

      if (request.ok){

          const response = await request.json()
          const {id, name, email, avatar_url} = response
          

      }
  }catch(err){
      console.log(err)
  }
}

async function requestGetAllUsers(token){

  try{
      const request = await fetch(baseUrl + "/users", {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        if(request.ok){
          const response = await request.json()
          console.log(response)
          return response
        }
  }catch(err){
          console.log(err)
  }
}

async function requestReadProfile(token){

  try{
      const request = await fetch(baseUrl + "/users/profile", {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

      if(request.ok){
          const response = await request.json()
          return response            
      }
  }catch(err){
          console.log(err)
  }
}

async function requestUpdateProfile(token, body){

  try{
      const request = await fetch (baseUrl + "/users/profile", {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(body)
      })

      if (request.ok){

          console.log("ok")
      }
  }catch(err){
      console.log(err)
  }
}

async function deleteProfile(token){

  try{
      const request = await fetch(baseUrl + "/users/profile", {
          method: 'DELETE',
          headers: { 
            Authorization: `Bearer ${token}`
          },
      })
  }catch(err){
          console.log(err)
  }
}

<<<<<<< HEAD
async function requestCreatePet(token, body) {
  try {
    const request = await fetch(`${baseUrl}/pets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(body),
    });
    if (request.ok) {
      console.log("deu certo")
    } else {
      console.log("deu ruim");
    }
  } catch (err) {
    console.log(err);
  }
}

async function requestReadAllMyPets(token){

  try{
      const request = await fetch(baseUrl + "/pets/my_pets", {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

      if(request.ok){
          const response = await request.json()
          return response            
      }
  }catch(err){
          console.log(err)
  }
}

export {requestRegisterUser, requestLogin, requestCreateUser, requestGetAllUsers, requestReadProfile, requestUpdateProfile, deleteProfile, requestCreatePet, requestReadAllMyPets}
=======
async function requestAllPets(token) {
  try{
    const request = await fetch(baseUrl + "/pets", {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    if(request.ok){
        const response = await request.json()
        return response
    }
}catch(err){
        console.log(err)
}
}
export {registerUser, 
  requestLogin, 
  requestCreateUser, 
  requestGetAllUsers, 
  requestReadProfile, 
  requestUpdateProfile, 
  deleteProfile, 
  requestAllPets}
>>>>>>> c989b5e89a3ec8dbcfe61d5a58592482798815fe
