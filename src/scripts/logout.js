export function logout(){
    const button = document.querySelector('#btnlogout')
    button.addEventListener('click',()=>{
        console.log('oii')
        // localStorage.removeItem('user')
        window.location.replace('/index.html')
    })
}