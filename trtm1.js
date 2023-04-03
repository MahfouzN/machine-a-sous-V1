

function redirect(){
    if (objetXHR.readyState==4){
        if(objetXHR.status==200){
            document.getElementById('jeu').style.visibility="visible";
            document.getElementById("charge").style.visibility="hidden";
            var retour= objetXHR.responseText.split(":");
            document.getElementById('tirage1').innerHTML = decodeURI(retour[1]);
           
            document.getElementById('joueur').innerHTML = decodeURI(retour[2]);
            document.getElementById('solde').innerHTML = decodeURI(retour[3]);
            document.getElementById('level').innerHTML = decodeURI(retour[4]);
          
            
            //window.location.href = url;

           
            
        }
    }
           
   
    

 
   //var url = "page1.html?nom=" + encodeURIComponent(nom) + "&niveau=" + encodeURIComponent(niveau) + "&solde=" + encodeURIComponent(solde);

    //var url ="page1.html"
    //window.location.href = url;
    
    
}



function start(){
    

    

    var temps = new Date().getTime();

    var nom = document.getElementById("nom").value;
    var niveau = document.getElementById("niveau").value;
    var prtf = document.getElementById("prtf").value;


    var parametres = "nom="+ nom +"&niveau="+ niveau +"&prtf="+ prtf +"&anticache="+temps;

    objetXHR = create();
    objetXHR.open("get","serveur.php?"+parametres,true);

    objetXHR.onreadystatechange = redirect;
    document.getElementById('button').disabled= true;
    
    document.getElementById('charge').style.visibility="visible";
    document.getElementById('form').style.visibility="hidden";
    objetXHR.send();

    
}

