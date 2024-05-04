function toggle(popupID){

    var popup = document.getElementById(popupID);
    popup.classList.toggle('active'); 
    
    var overlay = document.getElementById('overlay');
    overlay.classList.toggle('active');

}


