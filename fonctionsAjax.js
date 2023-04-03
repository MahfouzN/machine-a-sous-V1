function create(){
    var resultat= null;
    try{
        resultat= new XMLHttpRequest();
    }
    catch(error){
        try{
            resultat= new ActiveXObject("Msxml2.XMLHTTP")
        }
        catch(error){
            try{
            resultat= new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch(Error){
            resultat= null;
        }
    }
}
return resultat;
}
//function verif() {
   // if (document.getElementById('nom').value ==" "){
    //    document.getElementById('button').disabled = true;
//     }
//else {
 //   document.getElementById('button').disabled = true;}
//}