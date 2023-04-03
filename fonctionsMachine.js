
function lancement(){
    if (objetXHR.readyState==4){
        if(objetXHR.status==200){
            var retour= objetXHR.responseText.split(":");
            
            
            document.getElementById('tirage1').innerHTML = decodeURI(retour[1]);
            
            document.getElementById('nom').innerHTML = decodeURI(retour[2]);
            document.getElementById('solde').innerHTML = decodeURI(retour[3]);
            document.getElementById('niveau').innerHTML = decodeURI(retour[4]);
           
           
            
            
            document.getElementById("info").style.visibility="visible";
            document.getElementById("button").disabled=false;
            document.getElementById("charge").style.visibility="hidden";
            

        }else{
            document.getElementById("info").innerHTML="erreur serveur:"+objetXHR.status+"-"+objetXHR.statusText;
            document.getElementById("info").style.visibility="visible";
            document.getElementById("button").disabled=false;
            document.getElementById("charge").style.visibility="hidden";
            objetXHR.abort();
            objetXHR=null;
        }
    }
}
function jouer(){
    
    var temps = new Date().getTime();
    var res=parseFloat(document.getElementById("tirage1").textContent);
   
    var solde = parseFloat(document.getElementById("solde").textContent);
    var mise = parseFloat(document.getElementById("mise").value);
    var niveau = document.getElementById("niveau").value;
    var nom = document.getElementById("nom").value;


    if(mise > solde || isNaN(mise) || mise <= 0){
        alert("saississez une valeur juste");}

        else{
            if(res  < 50 ){
                //"Votre mise est doublé X2"
                solde = solde + (mise*2);
                document.getElementById('solde').innerHTML = solde;
                document.getElementById('resultat').innerHTML = "Votre mise est doublé X2";
                console.log(res)
            }else if(res>=51 && res <=90){
                //"Vous aurez peut etre plus de chance la prochaine fois"
                solde= solde-mise;
                document.getElementById('solde').innerHTML = solde;
                document.getElementById('resultat').innerHTML = "Vous aurez peut etre plus de chance la prochaine fois";
                console.log(res)
            } else{
                //"Votre mise est multiplié par 10 ****Jackpot**** Bravo"
                solde= solde + (mise * 10);
                document.getElementById('solde').innerHTML = solde;
                document.getElementById('resultat').innerHTML = "Votre mise est multiplié par 10 ****Jackpot**** Bravo";
                console.log(res)
            }
            var parametres = "nom="+ nom +"&niveau="+ niveau +"&prtf="+ solde +"&anticache="+temps;

   
       
            objetXHR = create();
            objetXHR.open("get","serveur.php?"+parametres,true);
    
            objetXHR.onreadystatechange = lancement;
            document.getElementById('button').disabled= true;
            document.getElementById('charge').style.visibility="visible";
            objetXHR.send(null);
        }
   
       

    }
       
        

