<?php
header("content-type: text/plain");
sleep(2);
$rdm= rand(0,100);

$message="";


if($rdm  < 50 ){
    $message="Vous avez perdu 5000 F";
}elseif(49> $rdm || $rdm<=75){
    $message="Vous avez gagné 5000 F";
}else{
    $message="Vous avez gagné 10 000 F";
}

$resultat=$message.':'.$rdm;


echo $resultat
?>