const baseUrl = "https://m2-api-adot-pet.herokuapp.com";

export async function registerUser(body) {
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
