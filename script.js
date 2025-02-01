const submitBtn=document.querySelector('.generateBtn')
const reset=document.querySelector('.resetBtn')
const rangeValue=document.querySelector('.range-value')
const lengthElement=document.querySelector('#length')
rangeValue.textContent=lengthElement.value
const boxes=document.querySelectorAll('.box')
const passRaiting=document.querySelector('.password-strength')
const copyImg=document.querySelector('.copy')
const textToCopy=document.querySelector('.password')

copyImg.addEventListener('click',()=> {
    navigator.clipboard.writeText(textToCopy.textContent)
    .then(()=> {
        alert('Text copied to clipboard')
    }) .catch(error => {
        alert('Failed to copy text:'+error)
    })
})


function strengthLights() {
    const strengthLightsInfo=Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
    let counter=strengthLightsInfo.length

    for(let i=0;i<boxes.length;i++) {
        if(i<counter) {
            boxes[i].style.backgroundColor='red'
        } else {
            boxes[i].style.backgroundColor='white'
        }
        strengthInWords(counter)
    }
    
}

function strengthInWords(counter) {
    const strengths=['None','Medium','Good','Very Good','Best'];
    passRaiting.textContent=strengths[counter]
}

let counter=0;
const checkboxes=Array.from(document.querySelectorAll('input[type="checkbox"]'))

const uppercaseCheckBox=document.querySelector('#uppercase').addEventListener('input',strengthLights)
const lowercaseCheckBox=document.querySelector('#lowercase').addEventListener('input',strengthLights)
const numbersCheckBox=document.querySelector('#numbers').addEventListener('input',strengthLights)
const symbolsCheckBox=document.querySelector('#symbols').addEventListener('input',strengthLights)

lengthElement.addEventListener('input',()=> {
    rangeValue.textContent=Number(lengthElement.value) 
    if (Number(lengthElement.value) === 20 || Number(lengthElement.value) === 4 || Number(lengthElement.value) <4) {
        rangeValue.style.color = 'red';
    } else {
        rangeValue.style.color ='#A4FFAF';
    }
})

submitBtn.addEventListener('click',()=> {
    const length=Number(lengthElement.value)

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
    let password="";

   for(let i=0;i<length;i++) {
        const randomIndex=Math.floor(Math.random()*characters.length)
        password+=characters[randomIndex]
    }
   document.querySelector('.password').textContent=password


   reset.addEventListener('click',()=> {
    document.querySelector('.password').textContent='Generated Password';
    reset.style.display='none'
    rangeValue.textContent=11;
    rangeValue.style.color ='#A4FFAF';
    lengthElement.value=11
    
    document.querySelector('#uppercase').checked=false;
    document.querySelector('#lowercase').checked = false;
    document.querySelector('#numbers').checked = false;
    document.querySelector('#symbols').checked = false;
    passRaiting.textContent='None'

    for(let i=0;i<boxes.length;i++) {
        boxes[i].style.backgroundColor='white' 
    }
  }) 
})
