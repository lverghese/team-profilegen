const genTeamHtml = function () {
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
    <nav class="navbar" id="navbar">
        <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">The Whole Team</span>
    </nav>
</header>
<main>
    <div class="container">
        <div class="row justify-content-center" id="team-cards">
            <!--Team Profile Cards-->

        </div>
    </div>
</main>

    </body>
  `
}