<?php $title = 'Play - PHP '; ?>

<?php ob_start(); ?>

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
            <div class=" m-auto">
                <div class="row m-2 justify-content-center">
                    <button type="button" class="btn btn-dark" onclick='startGame()'>Jouer !</button>
                </div>
                <div id='reward' class="row m-2 justify-content-center" style="display:none">
                    <a href="/reward.php">
                        <button type="button" class="btn btn-dark m-auto">Rewards !</button>
                    </a>
                </div>
            </div>
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
<section id='winner' class="d-flex justify-content-centerpt-5"></section>

<section id="slider">
    <figure>
        <div><img src="/assets/player/hero.png"></div>
        <div><img src="/assets/player/vilain.png"></div>
    </figure>
</section>
<?php $content = ob_get_clean(); ?>

<?php require('view/template.php'); ?>