

function calculateAge(){
    const age = document.getElementById('date').value;

    if(!age){
        document.getElementById('result').innerHTML = 'Please Enter A Value'
        return;
    }
     const birthDate = new Date(age + 'T12:00:00');
     const today = new Date();
     
     let years = today.getFullYear() - birthDate.getFullYear();

     let months = today.getMonth() - birthDate.getMonth();

     let days = today.getDate() - birthDate.getDate();

     if (days < 0){
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
     }
     if(months < 0){
        years--;
        months += 12;
     }
     const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
     };
     const formattedBirthdate = birthDate.toLocaleDateString('en-US', options);
     document.getElementById('result').innerHTML=
     `
     <strong> Your Birthdate: </strong> ${formattedBirthdate}
     <div class = "age-breakdown">
     <div class = "age-box">
     <div class = "age-number">${years}</div>
     <div>Years</div>
     </div>
     <div class = "age-box">
     <div class = "age-number">${months}</div>
     <div>Months</div>
     </div>
     <div class = "age-box">
     <div class = "age-number">${days}</div>
     <div>Days</div>
     </div>
     </div>
     `;
};

// function yearsSince(){
// let results = document.getElementById('result')
    
//     let age = new Date(document.getElementById('date').value).toDateString()
//     console.log(age)


//     let newage = new Date(document.getElementById('date').value).getFullYear()

//     let currentDate = new Date();
//     let cyear = currentDate.getFullYear();
//     let newyear = cyear - newage;

//     let ageMonth = new Date(document.getElementById('date').value).getMonth()
//     let cmonth = currentDate.getMonth();
//     let newmonth = cmonth - ageMonth;

//     let ageDays = new Date(document.getElementById('date').value).getDay()
//     let cday = currentDate.getDay();
//     let newday = cday - ageDays;

        
//     html = ''
//     html += 
//     `
//     <h1>Your Birthdate: ${age}</h1>
//     <div class="results"> 
//     ${newyear -1} Years ${newmonth - 1} Months
//     ${newday - 1} Days
//     </div>
//     `
//     results.innerHTML = html;
    

// }


