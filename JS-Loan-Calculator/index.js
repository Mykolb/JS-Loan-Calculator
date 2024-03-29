//checking to make sure index.js is working
// alert(1)


//listen for submit
//show loader as soon as this is clicked 
document.getElementById('loan-form').addEventListener('submit', e => {
    e.preventDefault();
    //hide loader
    document.getElementById('results').style.display = 'none'
    
    //show results
    document.getElementById('loader').style.display = 'block'

    setTimeout(calculateResults, 3000)
})
//calculate results function
const calculateResults = () => {
    console.log('Loans are being verified by Bank of DC...')




//variables
const amount = document.getElementById('amount')
const interest = document.getElementById('interest')
const years = document.getElementById('years')
const monthlyPayment = document.getElementById('monthly-payment')
const totalPayment = document.getElementById('total-payment')
const totalInterest = document.getElementById('total-interest')

const principal = parseFloat(amount.value)
const calculatedInterest = parseFloat(interest.value) / 100 / 12
const calculatedPayments = parseFloat(years.value) * 12

//compute monthly payments
const x = Math.pow(1 + calculatedInterest, calculatedPayments)
const monthly = (principal *x* calculatedInterest)/(x-1)

//finite method
if(isFinite(monthly)) {
     monthlyPayment.value = monthly.toFixed(2) 
     totalPayment.value = (monthly * calculatedPayments).toFixed(2) 
     totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2)
     //show results
    document.getElementById('results').style.display = 'block'
    //hide the spinner
    document.getElementById('loader').style.display = 'none'
    console.log(loader)

} else {
    showError('Invalid numbers entered')
    }   
}


//show error
const showError = error => {
     //hide results
     document.getElementById('results').style.display = 'none'
     //hide the spinner
     document.getElementById('loader').style.display = 'none'
    //create div
    const errDiv = document.createElement('div')
    //get elemments
    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')
    //add class
    errDiv.className = 'alert alert-danger'
    //create text node and append to div; insert into div error msg
    errDiv.appendChild(document.createTextNode(error))
    //insert error above heading
    card.insertBefore(errDiv, heading)

    //set timeout have something happen after a set amount of seconds; want it to clear error after 5 secs, must use milliseconds 1000 milliseconds = 1 second
    setTimeout(clearError, 3000)
}

    //clear error
    const clearError = () =>  document.querySelector('.alert').remove();




calculateResults()
showError()