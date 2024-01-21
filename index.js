const root = document.querySelector('.quiz-root')

const questions = [
  {
    question: 'You are at a pedestrian crossing with no cars around but the light is red. Do you...',
    choices: [
      'Wait until it turns green',
      'Cross anyway',
      'Give up and walk back',
    ],
  },
  {
    question: 'You are very hungry... but a delicious meal suddenly appears in front of you!',
    choices: [
      'Eat it all up now',
      'Check the meal for tampering',
      'Refuse the meal',
      'Eat the plates!'
    ],
  },
  {
    question: 'You just woke up and want something to drink. Do you drink...',
    choices: [
      'Good old water :)',
      'Juice',
      'Tea',
      'Coffee',
    ],
  },
  {
    question: 'You are walking down the street and see a girl with long purple and gold hair handing out flyers. Do you...',
    choices: [
      'Ignore the girl',
      'Swat the flyers out of their hand',
      'Accept the flyer',
      'Befriend the girl',
      'Burn down her house',
    ],
  },
  {
    question: 'Y...',
    choices: [
      'ou really need to stop eating so much',
      ' is my favorite letter :)',
      'atteyanyo!!',
      'ametetteba!',
      'A SAY YA SAY YA',
      'outube is my favorite source of music',
      'oshika is so cool',
      'o',
    ],
  },
  {
    question: 'When you grow up, you wanted to be a(n)...',
    choices: [
      'Extreme Ski Jumper',
      'Girl',
      'Chocolatier',
      'Robot',
    ],
  },
  {
    question: 'What is your favorite sport?',
    choices: [
      'Extreme Ski Jumping',
      'Making chocolate',
    ],
  },
  {
    question: 'Who is your favorite character?',
    choices: [
      'Nazrin',
      'Reimu (Lost Word Lunar War Shaman Variant)',
      'Byakuren',
      'Shinmyoumaru',
      'Kana',
    ],
  },
  {
    question: 'Who is your least favorite character?',
    choices: [
      'Sanae',
      'Flandre',
      'Cirno',
      'Okina',
      'I love all characters equally',
    ],
  },
  {
    question: 'Someone cut you in line at the grocery store. Do you...',
    choices: [
      'Confront the person',
      'Accept your fate',
      'Move to a different line',
      'Do nothing but complain about it online later',
    ],
  },
  {
    question: 'You drew a character but you do not feel like drawing a background. Instead you...',
    choices: [
      'Draw abstract shapes in the back',
      'Leave it pure white',
      'Splatter it with random stamp brushes',
      'Mess around with blending layers',
    ],
  },
]

const results = [
  {
    name: 'Soga no Tojiko',
    imageUrl: 'https://cdn.discordapp.com/attachments/1174572746525646911/1198742663244042340/tojiko.png?ex=65c0031a&is=65ad8e1a&hm=c4fbb1f3e00eb21268ac40c920f1fa63ca3f74f9fa887867e0445b1c4e78dc03&',
    description: 'You have green hair (like in spirit I guess) and have an electrifying personality.',
  },
  {
    name: 'Yoshika Miyako',
    imageUrl: 'https://pbs.twimg.com/media/F43iRK6aMAAr40H.jpg',
    description: 'You are basically a zombie.',
  },
  {
    name: 'Seiga Kaku',
    imageUrl: 'https://cdn.donmai.us/original/52/66/52662c100945df2d897b48f9928cd823.jpg',
    description: 'You are a wicked person who is old.',
  },
  {
    name: 'Momonobe no Futo',
    imageUrl: 'https://cdn.discordapp.com/attachments/1059179632160673822/1177558020952170496/49583675_p7-1.jpg?ex=65bcc55e&is=65aa505e&hm=72e201143d62ff862c63cda928cb1d220e9e1486b81371187da80169b1c67188&',
    description: 'You enjoy the thrill of doing things that others do not typically find enjoyment in.'
  },
  {
    name: 'Toyota something Miko',
    imageUrl: 'https://cdn.discordapp.com/attachments/1196826578831810671/1196837195839967295/36122574.jpg?ex=65b9147f&is=65a69f7f&hm=4e6358384a8f7eab047152d3ccefe588209aeae45a831f70facd89fe6f449a0e&',
    description: 'You really like animals so you style your hair into an ear-like shape.'
  },
  {
    name: 'Sunny Milk',
    imageUrl: 'https://cdn.discordapp.com/attachments/1174572746525646911/1198754576757698620/sunny_wink.png?ex=65c00e32&is=65ad9932&hm=8eb253f90347f9d0fcfcc75fab055c0f8142c34b2d3cfb364bafa90b3c40480c&',
    description: 'SNUNNBY'
  }
]

function createQuestionBox(question) {
  const questionBox = document.createElement('div')
  questionBox.classList.add('question-container')
  const questionText = document.createElement('div')
  questionText.classList.add('question-text')
  questionText.textContent = question.question
  const choicesBox = document.createElement('div')
  choicesBox.classList.add('choices-container')
  const choiceBtns = question.choices.map(choice => {
    const btn = document.createElement('button')
    btn.textContent = choice
    return btn
  })
  questionBox.appendChild(questionText)
  choiceBtns.forEach(btn => { choicesBox.appendChild(btn) })
  questionBox.appendChild(choicesBox)
  return questionBox
}

function createTitleScreen(onStart) {
  const titleScreen = document.createElement('div')
  titleScreen.classList.add('title-screen-container')
  const title = document.createElement('div')
  title.classList.add('title')
  title.textContent = 'Which Touhou Character Are You?'
  const startBtn = document.createElement('button')
  startBtn.classList.add('start-btn')
  startBtn.addEventListener('click', onStart)
  startBtn.textContent = 'Start'
  titleScreen.appendChild(title)
  titleScreen.appendChild(startBtn)
  return titleScreen
}

function createResultsBox(result, onPlayAgain) {
  const resultBox = document.createElement('div')
  resultBox.classList.add('results-container')
  const resultsTitle = document.createElement('div')
  resultsTitle.classList.add('results-title')
  resultsTitle.textContent = `You are ${result.name}`
  const resultsImg = document.createElement('img')
  resultsImg.classList.add('results-img')
  resultsImg.src = result.imageUrl
  const resultsDesc = document.createElement('div')
  resultsDesc.classList.add('results-desc')
  resultsDesc.textContent = result.description
  const playAgainBtn = document.createElement('button')
  playAgainBtn.classList.add('play-again-btn')
  playAgainBtn.textContent = 'Play again'
  playAgainBtn.addEventListener('click', onPlayAgain)
  resultBox.appendChild(resultsTitle)
  resultBox.appendChild(resultsImg)
  resultBox.appendChild(resultsDesc)
  resultBox.appendChild(playAgainBtn)
  return resultBox
}

function clearRoot() {
  root.innerHTML = ''
}

function selectRandomFromList(list) {
  return list[Math.floor(Math.random() * list.length)]
}

async function showResult(results, answered, onPlayAgain) {
  const finalResult = (() => {
    if (answered.includes('atteyanyo!!') || answered.includes('Flandre')) {
      return results.find(x => x.name === 'Soga no Tojiko')
    } 
    if (answered.includes('Burn down her house')) {
      return results.find(x => x.name === 'Momonobe no Futo')
    }
    if (answered.includes('Eat the plates!')) {
      return results.find(x => x.name === 'Yoshika Miyako')
    }
    if (answered.includes('A SAY YA SAY YA')) {
      return results.find(x => x.name === 'Sunny Milk')
    }
    const randomResult = selectRandomFromList(results.filter(x => x.name !== 'Sunny Milk'))
    return randomResult
  })()
  const resultsBox = createResultsBox(finalResult, onPlayAgain)
  clearRoot()
  root.appendChild(resultsBox)
}

async function askQuestion(question) {
  const questionBox = createQuestionBox(question)
  const btns = questionBox.querySelectorAll('button')
  clearRoot()
  root.appendChild(questionBox)
  const clicked = await new Promise((res) => {
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        res(btn.textContent)
      })
    })
  })
  return clicked
}

async function runQuiz(questions, results) {
  const answered = []
  for (const question of questions) {
    answered.push(await askQuestion(question))
  }
  showResult(results, answered, () => { runQuiz(questions, results) })
}

function main() {
  const titleScreen = createTitleScreen(() => { runQuiz(questions, results) })
  root.appendChild(titleScreen)
}

main()
