<?php
    echo "Hello DIO!!";
?>

<?php
    $cursos = "php";
    $pagina = 30;

    if($pagina === 30){
        $cursos = "Laravel + Symfony";
        echo "Temos cursos de $cursos disponíveis na página $pagina.";
    }
?>