const submitBtn=document.querySelector('.generateBtn')
const reset=document.querySelector('.resetBtn')
const rangeValue=document.querySelector('.range-value')
const lengthElement=document.querySelector('#length')
rangeValue.textContent=lengthElement.value
const boxes=document.querySelectorAll('.box')
const passRaiting=document.querySelector('.password-strength')

function strengthCheck(counter) {
    if(counter ===0) {
        passRaiting.textContent='None'
    } else if(counter === 1) {
        passRaiting.textContent='Medium'
    } else if(counter === 2) {
        passRaiting.textContent='Good'
    } else if(counter === 3) {
        passRaiting.textContent='Very Good'
    } else if(counter === 4) {
        passRaiting.textContent='Best'
    }
}



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



let counter=0;
const checkboxes=Array.from(document.querySelectorAll('input[type="checkbox"]'))

const uppercaseInclude2=document.querySelector('#uppercase')
const lowercaseInclude2=document.querySelector('#lowercase');
const numbersInclude2=document.querySelector('#numbers');
const symbolsInclude2=document.querySelector('#symbols')


uppercaseInclude2.addEventListener('input',()=> {
    if(uppercaseInclude2.checked) {
        counter++
        console.log(counter)
        for(let i=0;i<counter;i++) {
            if(boxes[i]) {
                boxes[i].style.backgroundColor='red'
            }
            strengthCheck(counter)      
        }
    } else {
        counter--
        console.log(counter)
        for(let i=0;i<=counter;i++) {
            if(boxes[i]) {
                boxes[counter].style.backgroundColor='white'
                
            }
            strengthCheck(counter)
        } 
    }
})

lowercaseInclude2.addEventListener('input',()=> {
    if(lowercaseInclude2.checked) {
        counter++
        console.log(counter)
        for(let i=0;i<counter;i++) {
            if(boxes[i]) {
                boxes[i].style.backgroundColor='red'
            }
            if(boxes[i]) {
                boxes[i].style.backgroundColor='red'
            }
            strengthCheck(counter)
        }
    } else {
        counter--
        console.log(counter)
        for(let i=0;i<=counter;i++) {
            if(boxes[i]) {
                boxes[counter].style.backgroundColor='white'             
            }
            strengthCheck(counter)
        }
    }
    
})

numbersInclude2.addEventListener('input',()=> {
    if(numbersInclude2.checked) {
        counter++
        console.log(counter)
        for(let i=0;i<counter;i++) {
            if(boxes[i]) {
                boxes[i].style.backgroundColor='red'
            }
            strengthCheck(counter)
        }
    } else {
        counter--
        console.log(counter)
        for(let i=0;i<=counter;i++) {
            if(boxes[i]) {
                boxes[counter].style.backgroundColor='white'        
            }
            strengthCheck(counter)
        }
    }
})
symbolsInclude2.addEventListener('input',()=> {
    if(symbolsInclude2.checked) {
        counter++
        console.log(counter)
        for(let i=0;i<counter;i++) {
            if(boxes[i]) {
                boxes[i].style.backgroundColor='red'
            }
            strengthCheck(counter)
        }
    } else {
        counter--
        console.log(counter)
        for(let i=0;i<=counter;i++) {
            if(boxes[i]) {
                boxes[counter].style.backgroundColor='white'        
            }
            strengthCheck(counter)     
        }
    }
})



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

        for(let i=0;i<=4;i++) {
            boxes[i].style.backgroundColor='white' 
        }
    })

    let password="";

   for(let i=0;i<length;i++) {
    const randomIndex=Math.floor(Math.random()*characters.length)
    password+=characters[randomIndex]
   }
   document.querySelector('.password').textContent=password
   
})
