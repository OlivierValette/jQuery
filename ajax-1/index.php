<!doctype html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ajax Exemple 1</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
  <link rel="stylesheet" href="css/styles.css">
</head>

<body>

  <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
    <div class="container">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand mr-auto" href="#">Ajax Exemple 1</a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="mr-auto"></div>
        <form id="login-form" class="form-inline my-2 my-lg-0" role="log" action="login.php" method="POST">
          <input class="form-control mr-sm-2" type="text" id="username" name="username" placeholder="Identifiant">
          <input type="password" class="form-control mr-sm-2" id="password" name="password" placeholder="Mot de passe">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Connexion</button>
        </form>
        <div id="logout-form" class="navbar-form navbar-right">
          <a id="logout" class="btn btn-default" href="logout.php">Déconnexion</a>
        </div>
      </div>
    </div>
  </nav>

  <main id="main" class="container">

        <nav id="nav-ajax" class="">
          <ul class="nav">
            <li class="nav-item"><a class="nav-link" href="data/js.html">Javascript</a></li>
            <li class="nav-item"><a class="nav-link" href="data/xml.html">XML</a></li>
            <li class="nav-item"><a class="nav-link" href="data/json.html">Json</a></li>
          </ul>
        </nav>

      <article id="main-article" class="card">
        <div class="card-block">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis mollitia sapiente tempore, amet fugiat, adipisci aut quidem deserunt nostrum illo, facere corporis nisi vitae nihil reiciendis dolor consectetur possimus. Quia aliquid pariatur cum. Sapiente voluptates nisi aperiam quia, consequatur ducimus vel, ut, odio eaque itaque numquam sit, at recusandae perspiciatis.</p>
          <p>Aperiam corporis voluptas rem harum aspernatur necessitatibus quod minima similique iure quas sed doloribus fuga ipsam, autem maiores. Id veniam aut consectetur vitae maxime dolorum sint iste consequuntur voluptatem libero, error, doloribus fugiat aliquam quod est obcaecati quisquam explicabo repellendus? Magnam, ea aliquam doloribus quidem earum dignissimos assumenda praesentium. Provident!</p>
        </div>
      </article>

  </main>

  <script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
  <script src="js/scripts.js"></script>
</body>

</html>
