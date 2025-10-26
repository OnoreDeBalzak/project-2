
document.addEventListener('DOMContentLoaded', function() {
    const phoneButton = document.querySelector('.phone-button');
    
    if (phoneButton) {
        phoneButton.addEventListener('click', function() {
            console.log('???? ?? ????????: 045 7832 5225');
        });
    }
});


function initMap() {
    const location = { lat: 60.4518, lng: 22.2666 }; 
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
    });
    new google.maps.Marker({
        position: location,
        map: map,
        title: "Beni Autokorjaamosi",
    });
}