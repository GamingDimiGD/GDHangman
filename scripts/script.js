console.log('你好呀 不要在這裡放入文字 除非你是設計遊戲的人')

let funMode = false
let winStreak = 0
let rmv = 255
const pngAmount = 2
const gifAmount = 2
let autosaveText = '每10秒自動儲存'
let version = 'BETA v1.0'
const keyboardDiv = document.querySelector(".keyboard");
const worddisplayDiv = document.querySelector('.word-display')
const gameModal = document.querySelector('.game-modal')
const pab = document.querySelector('.play-again')
const hangman = document.querySelector('body')
const game = document.querySelector('.container')
let currentWord, wordmeaning, correctLetters, wrongGuessCount
const maxGuesses = 6
let vocabAmount = 0
let oVocab = vocab
document.querySelector('.info li b#via').innerText = vocab.length
if ($.jStorage.get('vocabAmount')) vocabAmount = $.jStorage.get('vocabAmount')
if ($.jStorage.get('vocab')) vocab = $.jStorage.get('vocab')


const toggleflash = () => {
    if (rmv === 255) {
        rmv = 0
        document.getElementById('tfl').innerText = '開啟閃爍'
        document.getElementById('tfl2').innerText = '開啟閃爍'
    } else {
        rmv = 255
        document.getElementById('tfl').innerText = '關閉閃爍'
        document.getElementById('tfl2').innerText = '關閉閃爍'
    }
}

document.getElementById('tfl').addEventListener('click', toggleflash)
document.getElementById('tfl2').addEventListener('click', toggleflash)

const removeWord = (wordToRemove) => {
    const newArray = []
    for (let i = 0; i < vocab.length; i++) {
        if (vocab[i].word !== wordToRemove) {
            newArray.push(vocab[i])
        }
    }
    vocabAmount++
    if(vocabAmount !== oVocab.length - newArray.length) vocabAmount = oVocab.length - newArray.length
    return newArray
}

const resetGame = () => {
    document.querySelector('.info li b#va').innerText = vocabAmount
    correctLetters = [], wrongGuessCount = 0
    worddisplayDiv.innerHTML = currentWord.toLowerCase().split("").map(() => `<li class="letter"></li>`).join("")
    gameModal.classList.remove("show")
    document.querySelector('.guesses-text b').innerText = wrongGuessCount + ' / ' + maxGuesses
    document.querySelector('.hangman-box').innerHTML = `
    <h6>${version}</h6>
    <img src="../images/hangman-${wrongGuessCount}.png" alt="hangman" />
    <h6 class="autosave-text">${autosaveText}</h6>
    <h1 id="hangman">Hangman 遊戲</h1>`
    keyboardDiv.querySelectorAll('button').forEach(btn => {
        btn.disabled = false
        if (btn.innerText === ' ') {
            btn.style.opacity = '0'
            btn.style.width = 'calc(100% / 9 - 20px)'
            btn.disabled = true
        }
    })
    qwerty.disabled = false
    if (vocab[0].word === '') {
        keyboardDiv.querySelectorAll('button').forEach(btn => btn.disabled = true)
        qwerty.disabled = true
    }
}

let bda = false
let bd = 10

const getRandomWord = () => {
    if (vocab.length === 0) {
        bda = true          /**/
        if (bd === 10)  /**/    /**/bossSays('哈囉', 7)
    else if (bd === 9)/**/bossSays/**/('你玩太久了', 7)
    else if (bd === 8) /**/   /**/ bossSays('該休息了', 6)
                           /**/
        else if (bd === 7) /**/bossSays('聽話，不然我會爆炸', 10) 
        else if (bd ===/***********/6) bossSays('喂', 4)
    else if (bd ===/**/5)  /**/    /**/bossSays('趕快關頁面', 6)
        else if (bd === 4) /**/bossSays('快點', 4)
        else if (bd === 3) /**/bossSays('不關我要爆炸囉', 4)
        else if (bd ===/**/ 2) /**/{
            bossSays('哈阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿', 4)
            sfx('../sfx/augh.mp3')
        } else if (bd === 1) {
            let dfahjshkjdafshj = 40000
            if(antiLag) dfahjshkjdafshj = 400
            bossSays(glitch(dfahjshkjdafshj), 4)
            sfx('../sfx/ah.mp3')
        } else if (bd === 0) {
            game.style.display = 'none'
            game.style.width =
            bossLi.style.display = 'none'
            document.querySelector('.navbar').style.display = 'none'
            bossSays('', 0.001)
            bossReady()
        }
        
        vocab.push({
            word: String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97) + String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97),
            hint: '太厲害了，你把這個遊戲玩完了',
            meaning: '隨機選出來的'
        })
        setInterval(() => {
            if(antiLag) return
            vocabAmount = glitch(20)
            document.getElementById('va').innerText = vocabAmount
        }, 200)
    }
    const { word, hint, meaning } = vocab[Math.floor(Math.random() * vocab.length)]
    currentWord = word
    wordmeaning = meaning
    document.querySelector('.hint-text b').innerText = hint
    resetGame()
}

getRandomWord()

const gameOver = (isVictory) => {
    if (isVictory) {
        checkStreak()
        vocab = removeWord(currentWord)
        sfx('../sfx/yay.mp3')
        confetti({
            particleCount: 200,
            spread: 360,
            origin: { y: 0.6 },
        });
        if (funMode) {
            party()
        }
    } else sad()
    const modalText = isVictory ? `你找到了: ` : `答案是: `
    const gameOverStatus = isVictory ? `你贏了!` : `你輸了!`
    let pic = isVictory ? 'win.png' : 'lose.png'
    if (funMode) {
        if (rng(1) === 0) pic = Math.floor(Math.random() * gifAmount) + '.gif'
        else pic = Math.floor(Math.random() * pngAmount) + '.png'
    }
    gameModal.classList.add("show")
    gameModal.querySelector('img').src = `../images/${pic}`
    document.querySelector('.content h4').innerText = gameOverStatus
    document.querySelector('.content p#ans').innerHTML = `<p id="ans">${modalText}<b>${currentWord}</b> </p>`
    document.querySelector('.content p#meaning b').innerText = wordmeaning
    document.querySelector('.play-again').innerText = isVictory ? `繼續遊玩!` : `再玩一次!`
}

const initGame = (button, clickedLetter) => {
    if (currentWord.toLowerCase().includes(clickedLetter)) {
        if (clickedLetter !== " ") {
            [...currentWord].forEach((letter, index) => {
                if (letter === clickedLetter) {
                    correctLetters.push(letter)
                    worddisplayDiv.querySelectorAll('li')[index].innerText = letter
                    worddisplayDiv.querySelectorAll('li')[index].classList.add('guessed')
                }
            })
        }
    } else if(clickedLetter !== " ") {
        wrongGuessCount++
        if (wrongGuessCount > 6) wrongGuessCount = 6
        document.querySelector('.guesses-text b').innerText = wrongGuessCount + ' / ' + maxGuesses
        document.querySelector('.hangman-box').innerHTML = `
        <h6 class="version">${version}</h6>
        <img src="../images/hangman-${wrongGuessCount}.png" alt="hangman" />
        <h6 class="autosave-text">${autosaveText}</h6>
        <h1 id="hangman">Hangman 遊戲</h1>
        `
        // sorry for that 
        // here is a cookie: 🍪
    }
    button.disabled = true
    if (clickedLetter !== " ") qwerty.disabled = true

    if (wrongGuessCount === maxGuesses) gameOver(false)
    if (correctLetters.length === currentWord.length) gameOver(true)
}

for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button")
    button.innerText = String.fromCharCode(i)
    keyboardDiv.appendChild(button)
    button.addEventListener('click', e => initGame(e.target, String.fromCharCode(i)))
}

pab.addEventListener('click', getRandomWord);

let funNumber = 0
const versionText = document.querySelector('.hangman-box h6')
let interval;
let is = 50

document.querySelector('.hangman-box img').addEventListener('click', () => {
    funNumber++
    console.log(funNumber, funMode)
    if (funNumber >= 7) {
        version = '好玩版' + funNumber
        funMode = true
        versionText.innerText = version
        interval = setInterval(fun, is)
    }
})