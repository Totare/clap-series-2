<!DOCTYPE html>
<html lang="en">
<head>  
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title ?></title>
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    
    <!-- CALL MY APP FILES JS -->
    <script src="js/isAFlush.js"></script>
    <script src="js/isAFull.js"></script>
    <script src="js/isAHighest.js"></script>
    <script src="js/isAPair.js"></script>
    <script src="js/getIndex.js"></script>

    <script src="js/bestCombo.js"></script>
    <script src="js/compareCombo.js"></script>

    <script src="js/dealer.js"></script>

    <script src="js/app.js"></script>

    <link rel="stylesheet" href="style.css">

</head>

<body>
    <main>
        <?php require('header.php');  ?>
        <?= $content ?>
        <?php require('footer.php');  ?>
    </main>
</body>
</html>