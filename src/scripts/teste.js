buttonOpen.forEach((element) => {
    element.addEventListener("click", async (e) => {
      modal.showModal();
    });

    const form = document.querySelector("#editPetForm");
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
        console.log(body)
      // await requestEditPet(token, body, endpoint);
      // window.location.reload();
    });
  });


  const form = document.querySelector("#editPetForm");
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
      console.log(body)
    // await requestEditPet(token, body, endpoint);
    // window.location.reload();
  });

  await modalEditpet(token, e.target.id)