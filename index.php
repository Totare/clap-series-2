<!DOCTYPE html>
<html lang="en">
<head>  
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Play</title>
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <?php include 'js.php'; ?>
</head>
<body>
    <main>
        <section class="container my-5">
            <article id='fight' class="row">
                <div id="hero" class="col">
                    <h2 class="d-flex justify-content-center">Hero</h2>
                    <img src="/assets/player/hero.png" alt="Hero" class="d-flex justify-content-center" style="width:100%;">
                    <div class="playerCard row" >
                        <div class='col'><img src="/assets/cards/back.png" alt="" class="img-thumbnail img-fluid aCard"></div>
                        <div class='col'><img src="/assets/cards/back.png" alt="" class="img-thumbnail img-fluid aCard"></div>
                    </div>
                </div>
                <div id="play" class="col d-flex">
                    <button type="button" class="btn btn-dark m-auto" onclick='startGame()'>Jouer !</button>
                </div>
                <div id="Vilain" class="col">
                    <h2 class="d-flex justify-content-center">Vilain</h2>
                    <img src="/assets/player/vilain.png" alt="vilain" class="d-flex justify-content-center" style="width:100%;">
                    <div class="playerCard row" >
                        <div class='col'><img src="/assets/cards/back.png" alt="" class="img-thumbnail img-fluid aCard"></div>
                        <div class='col'><img src="/assets/cards/back.png" alt="" class="img-thumbnail img-fluid aCard"></div>
                    </div>
                </div>
            </article>
        </section>
        <section class="container">
            <article id='drawCards' class='row' > 
                <div class='col'><img src="/assets/cards/back.png" alt="" class="img-thumbnail img-fluid aCard"></div>
                <div class='col'><img src="/assets/cards/back.png" alt="" class="img-thumbnail img-fluid aCard"></div>
                <div class='col'><img src="/assets/cards/back.png" alt="" class="img-thumbnail img-fluid aCard"></div>
                <div class='col'><img src="/assets/cards/back.png" alt="" class="img-thumbnail img-fluid aCard"></div>
                <div class='col'><img src="/assets/cards/back.png" alt="" class="img-thumbnail img-fluid aCard"></div>
            </article>
        </section>
        <section id='winner' class="d-flex justify-content-center pt-5"></section>
    </main>
</body>
</html>