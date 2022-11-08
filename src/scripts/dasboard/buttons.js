
export { logoutFunc, profileRedirect }

function profileRedirect(){
const userProfileBtn = document.querySelectorAll('.btn-profile')

    userProfileBtn.forEach(button => {
        button.addEventListener('click', (event) => {
            window.location.assign("../profile/index.html")
        })
    })

}

function logoutFunc() {
    const logoutBtn = document.querySelectorAll(".btn-logout")
    logoutBtn.forEach(button => {
        button.addEventListener('click', (event) => {
            localStorage.removeItem('token')
            window.location.replace("../../../index.html")
        })
    });
}