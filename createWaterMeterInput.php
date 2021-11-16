<?php
include("config.php");
if (isset($_POST['done'])) {


    $indeks = filter_var($_POST['indeks'], FILTER_SANITIZE_STRING);
echo $indeks;

}
?>