const inputfield=document.querySelector('.password')
const outputfield=document.querySelector('.output')

inputfield.addEventListener('input',function(){
    let password=inputfield.value
    if(password.length<8)
    {
        outputfield.innerText='password is too short'
        outputfield.style.color='red'
    }else{
        if(password.search(/[a-z]/)==-1)
        {
            outputfield.innerText='password is too weak'
            outputfield.style.color='red'
        }else if(password.search(/[A-Z]/)==-1)
        {
            outputfield.innerText='password is too weak'
            outputfield.style.color='red'
        }else if(password.search(/[0-9]/)==-1)
        {
            outputfield.innerText='password is too weak'
            outputfield.style.color='red'
        }else if(password.search(/[!@#$%^&*]/)==-1)
        {
            outputfield.innerText='password is too weak'
            outputfield.style.color='red'
        }
        else 
        {
            outputfield.innerText='password is strong'
            outputfield.style.color='green'
        }
        
        
    }
});