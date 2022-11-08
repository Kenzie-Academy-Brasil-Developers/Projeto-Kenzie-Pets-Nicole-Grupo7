import { requestReadProfile } from "./requests.js";


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc5MTg0MjMsImV4cCI6MTY2ODUyMzIyMywic3ViIjoiMWJjYTNlNzUtNjIwNS00NmNmLTk3ZWYtMGE1NDllYzk0YzRjIn0.zURUiOyxu0CjoHk7WNQ5ndn6XCePzWzMmSP7hbtXVOQ"
//============== render profile ===================
export async function renderProfileUser(){
    const request = await requestReadProfile(token)
    const avatarUser = document.querySelector('#useravatar')
    const nameUser = document.querySelector('#username')
    const emailUser = document.querySelector('#useremail')

    avatarUser.src = `${request.avatar_url}`
    nameUser.innerHTML = `<span>nome: </span> ${request.name}`
    emailUser.innerHTML = `<span>email: </span> ${request.email}`

}
