<?php $title = 'Reward - PHP '; ?>

<?php ob_start(); ?>
<section class='container' style='height:70vh'>
    <article class="h-100 row align-items-center">
        <form class="col" >
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone         else.</small>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </article>
</section>
    

<?php $content = ob_get_clean(); ?>

<?php require('view/template.php'); ?>