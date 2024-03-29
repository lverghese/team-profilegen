//CARDS FOR EMPLOYEES 
const genManager = function(manager) {
    return `
    <div class="col-4 mt-5">
        <div class="card h-100">
            <div class="card-header bg-primary text-light">
                <h2>${manager.name}</h2>
                <h3>Manager</h3><i class="material-icons">perm_identity</i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="office">Office Number: ${manager.office}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            </div>

        </div>
    </div>

    `;
};

const genIntern = function(intern) {
    return `
    <div class="col-4 mt-5">
        <div class="card h-100">
            <div class="card-header bg-primary text-light">
                <h2>${intern.name}</h2>
                <h3>Intern</h3><i class="material-icons">transfer_within_a_station</i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="uni">University: ${intern.uni}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            </div>

        </div>
    </div>

    `;
};
const genEngineer = function(engineer) {
    return `
    <div class="col-4 mt-5">
        <div class="card h-100">
            <div class="card-header bg-primary text-light">
                <h2>${engineer.name}</h2>
                <h3>Engineer</h3><i class="material-icons">build</i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="github">GitHub Username: ${engineer.github}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            </div>

        </div>
    </div>

    `;
};

//grabs employeeArray and pushes to site
genHTML = (allData) => {

    //card array for html
    cardArray = [];

    for (let i = 0; i < allData.length; i++) {
        const employee = allData[i];
        const role = employee.getTheRole();


        if (role === 'Manager') {
            const manCard = genManager(employee);

            cardArray.push(manCard);
        }

        if (role === 'Intern') {
            const intCard = genIntern(employee);

            cardArray.push(intCard);
        }

        if (role === 'Engineer') {
            const engCard = genEngineer(employee);

            cardArray.push(engCard);
        }
    }

    //puts them together with join
    const allCards = cardArray.join('')

    //gives back to the genTeamHtml
    const genTeam = genTeamHtml(allCards);
    return genTeam;
}




//plugs in the cards into the html
const genTeamHtml = function (allCards) {
  return  ` <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>
    <body>
    <header>
    <nav class="navbar bg-danger text-light" id="navbar">
        <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Your Whole Team!</span>
    </nav>
</header>
<main>
    <div class="container">
        <div class="row justify-content-center" id="team-cards">
            <!--Team Profile Cards are going to go here when functions are made-->
            ${allCards}

        </div>
    </div>
</main>

    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
  `;


  }
  

  module.exports = genHTML;
  
  
  
 