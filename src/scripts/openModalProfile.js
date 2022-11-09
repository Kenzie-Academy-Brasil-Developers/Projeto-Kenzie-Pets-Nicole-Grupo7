import { requestUpdateProfile } from "./requests.js";
import { getUserTokenLocalStorage } from "./localStorage.js";
import { renderProfileUser } from "./render.js";
import { deleteProfile } from "./requests.js";


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
const token = getUserTokenLocalStorage()
  //================ modal update profile =================
  export const modalUpdateProfile = () =>{
    const buttonOpen = document.querySelector("#updateprofile");
    const modal = document.querySelector("#modalUpdateProfile");
    const btnCloseModal = document.querySelector("#btnCloseUptade");
    buttonOpen.addEventListener('click',()=>{
      modal.showModal()
    })
    
      const form = document.querySelector("#updateProfileForm");
      const elements = [...form.elements];
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const body = {};
  
        elements.forEach((ele) => {
          if (ele.tagName == "INPUT") {
            body[ele.id] = ele.value;
          }
        });
        await requestUpdateProfile(token,body);
        await renderProfileUser()
        modal.close();
      });
      btnCloseModal.onclick = () => {
        modal.close();
      };
  }
  //================ modal remove profile =================
  export const modalDeleteProfile= () =>{
    const buttonOpen = document.querySelector('#deletedProfile')
    const modal = document.querySelector('#modalDeleteProfile')
    const btnCloseModal = document.querySelector("#btnCloseDelete");
    buttonOpen.addEventListener('click',()=>{
      modal.showModal()
    })

    const buttonDelete = document.querySelector('#btnDelete')
    buttonDelete.addEventListener('click', async ()=>{
      await deleteProfile(token)
      modal.close();
      localStorage.removeItem('@kenzieAdopt:User')
      window.location.replace('/index.html')
    })

    const buttonNotDelete = document.querySelector("#btnNotDelete")
    buttonNotDelete.addEventListener('click',()=>{
      modal.close();
    })

    btnCloseModal.onclick = () => {
      modal.close();
    }

  }
