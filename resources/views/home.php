<?php $title = 'Play '; ?>

<?php ob_start(); ?>

<section class="container my-5">
    <article id='fight' class="row">
        <div id="hero" class="col">
            <h2 class="d-flex justify-content-center">Hero</h2>
            <img src="/images/player/hero.png" alt="Hero" class="d-flex justify-content-center" style="width:100%;">
            <div class="playerCard row" >
                <div class='col'><img src="/images/cards/back.png" alt="" class="img-thumbnail img-fluid aCard"></div>
                <div class='col'><img src="/images/cards/back.png" alt="" class="img-thumbnail img-fluid aCard"></div>
            </div>
        </div>
        <div id="play" class="col d-flex">
            <div class=" m-auto">
                <div class="row m-2 justify-content-center">
                    <button type="button" class="btn btn-dark" onclick='new LaunchGame()'>Jouer !</button>
                </div>
                <div id='reward' class="row m-2 justify-content-center" style="display:none">
                    <a href="/reward">
                        <button type="button" class="btn btn-dark m-auto">Rewards !</button>
                    </a>
                </div>
            </div>
        </div>
        <div id="Vilain" class="col">
            <h2 class="d-flex justify-content-center">Vilain</h2>
            <img src="/images/player/vilain.png" alt="vilain" class="d-flex justify-content-center" style="width:100%;">
            <div class="playerCard row" >
                <div class='col'><img src="/images/cards/back.png" alt="" class="img-thumbnail img-fluid aCard"></div>
                <div class='col'><img src="/images/cards/back.png" alt="" class="img-thumbnail img-fluid aCard"></div>
            </div>
        </div>
    </article>
</section>
<section class="container">
    <article id='drawCards' class='row' > 
        <div class='col'><img src="/images/cards/back.png" alt="" class="img-thumbnail img-fluid aCard"></div>
        <div class='col'><img src="/images/cards/back.png" alt="" class="img-thumbnail img-fluid aCard"></div>
        <div class='col'><img src="/images/cards/back.png" alt="" class="img-thumbnail img-fluid aCard"></div>
        <div class='col'><img src="/images/cards/back.png" alt="" class="img-thumbnail img-fluid aCard"></div>
        <div class='col'><img src="/images/cards/back.png" alt="" class="img-thumbnail img-fluid aCard"></div>
    </article>
</section>
<section id='winner' class="d-flex justify-content-center pt-5"></section>

<section id="partners" class="container">
    <h2>Nos Partenaires</h2>
    <article>
        <figure class="slideshow">
            <div class="slide"><img src="/images/player/hero.png"></div>
            <div class="slide"><img src="/images/player/hero.png"></div>
            <div class="slide"><img src="/images/player/vilain.png"></div>
            <div class="slide"><img src="/images/player/vilain.png"></div>
            <div class="slide"><img src="/images/player/hero.png"></div>
            <div class="slide"><img src="/images/player/hero.png"></div>
            <div class="slide"><img src="/images/player/vilain.png"></div>
            <div class="slide"><img src="/images/player/vilain.png"></div>
            <div class="slide"><img src="/images/player/hero.png"></div>
            <div class="slide"><img src="/images/player/hero.png"></div>
            <div class="slide"><img src="/images/player/vilain.png"></div>
            <div class="slide"><img src="/images/player/vilain.png"></div>
        </figure>
    </article>
</section>

<?php $content = ob_get_clean(); ?>

<?php require('../resources/views/template/template.php'); ?>