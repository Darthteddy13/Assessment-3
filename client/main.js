const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById(`fortuneButton`)
const deleteBtn = document.getElementById(`deleteBtn`)
const compForm = document.querySelector(`#compForm`);
const fortForm = document.querySelector(`#fortForm`);
const baseUrl = "http://localhost:4000/api/";
let lastFort = 0;

const getCompliment = () => {
    axios.get(`${baseUrl}compliment`)
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get(`${baseUrl}fortune`)
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const addCompliment = () => 
{   
    let compliment = document.querySelector(`#compliment`)

    let obj = {
     compliment: compliment.value
    }
    axios.post(`${baseUrl}compliment`, obj)
}
const addFortune = () => 
{   
    let fortune = document.querySelector(`#fortune`)

    let obj = {
     fortune: fortune.value
    }
    lastFort++;
    axios.post(`${baseUrl}fortune`, obj)
}

const deleteFortune = () =>
{
    axios.delete(`${baseUrl}fortune/:${lastFort}`)

    .then(res => console.log(res), lastFort--); 
}


fortuneBtn.addEventListener(`click`,getFortune)
complimentBtn.addEventListener('click', getCompliment)
compForm.addEventListener(`submit`, addCompliment)
fortForm.addEventListener(`submit`, addFortune)
deleteBtn.addEventListener(`click`, deleteFortune)