<?php
header("content-type: text/plain");
sleep(1);


$message="fine";
if(isset($_REQUEST['niveau'],$_REQUEST['nom'],$_REQUEST['prtf'])){
    $niveau=$_REQUEST['niveau'];
    $nom=$_REQUEST['nom'];
    $prtf=$_REQUEST['prtf'];

    if ($niveau=="facile"){
        $rdm= rand(0,80);
    }elseif($niveau=="moyen"){
        $rdm= rand(45,80);
    }else{
        $rdm= rand(49,100);
    }
    
    

    $resultat=$message.':'.$rdm.':'.$nom.':'.$prtf.':'.$niveau;

}else{
    $resultat="curieux";
}




echo $resultat
?>