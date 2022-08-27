const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click',()=>{
    //generate color with concat elements arr
    const randomHex = generateHex()
    console.log(randomHex)
    document.body.style.backgroundColor = randomHex
    color.textContent = randomHex
})

function generateHex(){
    let hexColor = '#'
    for(let i=0;i<6;i++){
        hexColor += hex[generateRandomNumber()]
    }
    return hexColor
}

function generateRandomNumber(){
    return Math.floor(Math.random()*hex.length)
}