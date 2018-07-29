//Document Vars
const cardTitle = document.querySelector('.card-title');
const agencyForm = document.querySelector('.agency-form');
const agencyHeadingDiv = document.querySelector('.agency-heading');
const moneyBtn = document.querySelector('.money-btn');
const moneyCounter = document.querySelector('.money');

//Game Global Variables
let money = 0;

//Add Agency Name 
agencyForm.addEventListener('submit', agencyName) 

//Get Money
moneyBtn.addEventListener('click', addMoney);

//FUNCTIONS

//Add Agency name and Remove Form
function agencyName(e) {
    e.preventDefault();

    //Creates New Heading With Input Value
    const inputText = cardTitle.value;
    const agencyName = document.createElement('h5');
    agencyName.appendChild(document.createTextNode(inputText));
    agencyHeadingDiv.appendChild(agencyName);

    //Removes Form
    agencyForm.remove();
};

function addMoney() {
    if(money < 20000) {
        money += 1000;
        moneyCounter.textContent = "$" + money;
    } else {
        moneyBtn.textContent = 'Funding Unavailable';
    }   
}