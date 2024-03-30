document.addEventListener('DOMContentLoaded',function () {
    let addUserBtn = document.querySelector('#addUserBtn')
    addUserBtn.addEventListener('click',()=>{
        const userName = document.querySelector('#username').value
        let USERNAME_LIST = JSON.parse(localStorage.getItem('USERNAME_LIST')) || [];
        if (USERNAME_LIST.includes(userName)) {
            alert('player already added')
        }else{
            USERNAME_LIST.push(userName)
        localStorage.setItem('USERNAME_LIST', JSON.stringify(USERNAME_LIST))
            
        }
        document.querySelector('#username').value=''
    })
    
})