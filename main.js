const letters='abcdefghigklmnopqrstuvwxyz'
let lettersArray = Array.from(letters)


let lettersContainer = document.querySelector('.letters')

lettersArray.forEach(letter=>{
    let span= document.createElement('span')
    let creatlettertextnode = document.createTextNode(letter)
    span.appendChild(creatlettertextnode)
    span.className= 'letter-box'
    lettersContainer.appendChild(span)
})
const words = {
    programming: [ "php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
  }

  let allkeys = Object.keys(words)
  let randomPRopNumber = Math.floor(Math.random() * allkeys.length)
 
  let randompropname = allkeys[randomPRopNumber]
  let randompropvalue = words[randompropname]

  let thevaluenumber = Math.floor(Math.random() * randompropvalue.length )
  console.log(thevaluenumber)
  let thevaluevalue = randompropvalue[thevaluenumber]
  console.log(thevaluenumber)
let gameinfo = document.querySelector('.game-info span')
gameinfo.innerHTML = randompropname

let letterguss = document.querySelector('.letters-guss')
let chossenletterandspace = Array.from(thevaluevalue)
console.log(chossenletterandspace)

chossenletterandspace.forEach(letter=>{
    let span = document.createElement('span')

    if (letter === ' '){
        span.className ='empty-span'
    }

    letterguss.appendChild(span)
})
let gussspans =document.querySelectorAll('.letters-guss span')
let wrongAttempts = 0
let thedraw = document.querySelector('.hangman-draw')
document.addEventListener('click',(e)=>{
    let status = false
if(e.target.className === 'letter-box'){
    e.target.classList.add('clicked')

    let theClickedLetter= e.target.innerHTML.toLowerCase()
    let theChoosenLetters = Array.from(thevaluevalue.toLowerCase())
    theChoosenLetters.forEach((wordletters , wordindex)=>{
       if(theClickedLetter == wordletters){
        gussspans.forEach((span , spanindex)=>{
            if(wordindex === spanindex){
                status = true
                span.innerHTML = theClickedLetter

            }

        })
       }
    })
    if(status !== true){
        wrongAttempts++
        thedraw.classList.add(`wrong-${wrongAttempts}`)
    }
console.log(status)
}
})