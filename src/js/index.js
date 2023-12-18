let btn = document.getElementById('btn');
let textCard = document.getElementById('text-card');
let titleId = document.getElementById('title-id');


const getRandomAdvice = async () =>  {
    let url = 'https://api.adviceslip.com/advice'

    return fetch(url)
            .then((response) => response.json())
            .then((data) => data.slip)
}

const addRadomAdvice = async () => {
    const advices = await getRandomAdvice();

    titleId.innerHTML = advices.id
    textCard.innerHTML = advices.advice
}


btn.addEventListener('click', () => {
    addRadomAdvice()
})


addRadomAdvice()
