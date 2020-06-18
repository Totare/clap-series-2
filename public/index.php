<?php
require __DIR__.'/../vendor/autoload.php';

$router = new App\Router\Router($_SERVER['REQUEST_URI']);

$router->get('/', "Home#show");

$router->get('/reward', "Reward#show");







// $router->get('/posts', function(){ echo 'tous les articles';});
// $router->get('/article/:id-:slug',
//     function($id,$slug) use ($router){
//         echo  $router->url('posts.show',['id'=>1,'slug'=>'salut-les-gens'])
//         ->with('id','[0-9]+')
//         ->with('slug','[a-z\0-9]+');
//     }
// );
// $router->get('/posts/:id', "Posts#show");
// $router->get('/post/:id', "Article#show");
// $router->get('/posts/:id', function($id){ echo 'article '.$id ;});
// $router->post('/posts/:id', function($id){ echo 'article avec id= '.$id ;});
// $router->delete('/sup', function(){ echo 'ACCUEIL';});

// verifie si la route existe
$router->run();
