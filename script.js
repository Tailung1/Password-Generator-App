const submitBtn=document.querySelector('.generateBtn')
const reset=document.querySelector('.resetBtn')

submitBtn.addEventListener('click',()=> {
    const length=document.querySelector('#length').value

    const uppercaseInclude=document.querySelector('#uppercase').checked;
    const lowercaseInclude=document.querySelector('#lowercase').checked;
    const numbersInclude=document.querySelector('#numbers').checked;
    const symbolsInclude=document.querySelector('#symbols').checked;

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let characters="";

    if(uppercaseInclude) characters+=uppercaseChars
    if(lowercaseInclude) characters+=lowercaseChars
    if(numbersInclude) characters+=numberChars
    if(symbolsInclude) characters+=symbolChars

    if(characters==="") {
        alert('Please select at least one checkbox')
        return;
    }
    reset.style.display='block'
    reset.addEventListener('click',()=> {
        document.querySelector('.password').textContent='Generated Password';
        reset.style.display='none'
        
        document.querySelector('#uppercase').checked=false;
        document.querySelector('#lowercase').checked = false;
        document.querySelector('#numbers').checked = false;
        document.querySelector('#symbols').checked = false;
    })

    let password="";

   for(let i=0;i<length;i++) {
    const randomIndex=Math.floor(Math.random()*characters.length)
    password+=characters[randomIndex]
   }
   document.querySelector('.password').textContent=password
   
})
