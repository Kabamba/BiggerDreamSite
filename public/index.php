<?php

use Applications\Autoloader;

require '../app/Autoloader.php';
Autoloader::register();

if (isset($_GET['p'])) {

    $p = $_GET['p'];
} else {

    $p = 'accueil';
}

ob_start();
if ($p === 'accueil') {

    require '../page/site/accueil.php';
    
} else if ($p === "agence") {

    require '../page/site/agence.php';

} else if ($p === "services") {

    require '../page/site/services.php';

}else if ($p === "contact") {

    require '../page/site/contact.php';
}

$content = ob_get_clean();
require '../page/template/default.php';
