function voila(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const nom = urlParams.get('nom');
    const niveau = urlParams.get('niveau');
    const solde = urlParams.get('solde');
    
    document.getElementById('nom').innerHTML = nom;
    document.getElementById('solde').innerHTML = solde;
    document.getElementById('niveau').innerHTML = niveau;
}