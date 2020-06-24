<!DOCTYPE html>
<html lang="fr">
<head>  
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 shrink-to-fit=no">
    <title><?= $title ?></title>

    <!-- BOOTSTRAP -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">


    <!-- JQUERY -->
    <script
	src="https://code.jquery.com/jquery-3.5.1.js"
	integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
	crossorigin="anonymous"></script>
		
    <!-- CALL MY APP FILES JS -->
    <!-- <script src="js/app.js"></script> -->
    <script src="js/cardGame/CardsClass.js"></script>
    <script src="js/cardGame/DealerClass.js"></script>
    <script src="js/cardGame/LaunchGameClass.js"></script>
    <script src="js/cardGame/ComboClass.js"></script>
    <script src="js/cardGame/CompareComboClass.js"></script>

    <!-- CSS -->
    <link href="../css/style.css" rel="stylesheet" />

    <link rel="icon" type="images/png" href="../images/favicon.png">
    <link rel="shortcut icon" type="image/x-icon" href="../images/favicon.ico">

</head>

<body>
    <main>
        <?php require('header.php');  ?>
        <?= $content ?>
        <?php require('footer.php');  ?>
    </main>

    <!-- SLIDER -->
    
    <script src="js/plugin/slider.js"></script>
</body>
</html>