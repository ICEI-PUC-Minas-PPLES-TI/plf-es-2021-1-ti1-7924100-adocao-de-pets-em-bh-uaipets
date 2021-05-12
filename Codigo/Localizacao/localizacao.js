// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -19.9, lng: -43.9543 },
    zoom: 11,
  });
  infoWindow = new google.maps.InfoWindow();
  const locationButton = document.createElement("button");
  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });


  const aprisco = { lat: -19.9022984901756, lng:-43.942946458131736 };
  new google.maps.Marker({
      position: aprisco,
      map,
      title: "Aprisco",
  });



  const bichosgerais = { lat: -19.90837199068878,  lng:-43.91462861015166};
  new google.maps.Marker({
      position: bichosgerais,
      map,
      title: "Associação Bichos Gerais",
  });
  

  const caoviver = { lat: -19.853118163140817, lng:-44.01114781595673};
  new google.maps.Marker({
      position: caoviver,
      map,
      title: "Cão Viver",
  });
  

  const caesdojardim ={lat:-20.058701949724444, lng:-43.983971130891376}
  new google.maps.Marker({
      position: caesdojardim,
      map,
      title: "Projeto Cães do Jardim",
  });
  
  const pelosepatas ={lat: -19.80956736425331, lng:-43.955697830692934}
  new google.maps.Marker({
    position: pelosepatas,
    map,
    title: "Abrigo Pelos e Patas",
});


const onga ={lat:-19.913598883001008, lng:-43.98226464597812}
  new google.maps.Marker({
    position: onga,
    map,
    title: "ONG A",
});  

const ongb ={lat:-19.85410629311533, lng:-43.95693925395284}
  new google.maps.Marker({
    position: ongb,
    map,
    title: "ONG B",
});  

const ongc ={lat:-19.816969484384256, lng: -43.95735049444568}
  new google.maps.Marker({
    position: ongc,
    map,
    title: "ONG C",
});  

const ongd ={lat:-19.789498137694167, lng:-43.938844672267834}
  new google.maps.Marker({
    position: ongd,
    map,
    title: "ONG D",
});  

const onge ={lat:-19.88311337939873, lng:-43.852895409264036}
  new google.maps.Marker({
    position: onge,
    map,
    title: "ONG E",
});  

const ongf ={lat:-19.936637722376933, lng:-43.96049820631127}
  new google.maps.Marker({
    position: ongf,
    map,
    title: "ONG F",
});  

const ongg ={lat:-19.954497422768515, lng:-44.019297728874356}
  new google.maps.Marker({
    position: ongg,
    map,
    title: "ONG G",
});  


const ongh ={lat:-19.977662442709367, lng:-44.01020488415754}
  new google.maps.Marker({
    position: ongh,
    map,
    title: "ONG H",
});  


const ongi ={lat:-19.996933749237186, lng:-43.848562813156384}
  new google.maps.Marker({
    position: ongi,
    map,
    title: "ONG I",
});  


const ongj ={lat:-19.915137652204955, lng:-44.08562635646162}
  new google.maps.Marker({
    position: ongj,
    map,
    title: "ONG J",
});  

const ongk={lat:-19.939091308566322, lng:-43.92066199675931}
  new google.maps.Marker({
    position: ongk,
    map,
    title: "ONG K",
});  


const ongs ={lat:-19.906602946827128, lng:-43.925030323102256}
  new google.maps.Marker({
    position: ongs,
    map,
    title: "ONG S",
});  

const ongt ={lat:-19.906602946827128, lng:-43.925030323102256}
  new google.maps.Marker({
    position: ongt,
    map,
    title: "ONG T",
});  


const ongu ={lat:-19.926948513549995, lng:-43.936869183304445}
  new google.maps.Marker({
    position: ongu,
    map,
    title: "ONG U",
});

const ongv ={lat:-19.922386954970374, lng:-43.95977058500702}
  new google.maps.Marker({
    position: ongv,
    map,
    title: "ONG V",
});

const ongwa ={lat: -20.00906597469735, lng:-44.20877331971133}
  new google.maps.Marker({
    position: ongwa,
    map,
    title: "ONG W",
});

const ongw ={lat: -19.718919296697923, lng: -44.06500525689549}
  new google.maps.Marker({
    position: ongw,
    map,
    title: "ONG W",
});

const ongx ={lat: -19.936164135044244, lng:-43.93283633918673}
  new google.maps.Marker({
    position: ongx,
    map,
    title: "ONG X",
});

const ongy ={lat: -19.918920082415585, lng:-43.94084781665107}
  new google.maps.Marker({
    position: ongy,
    map,
    title: "ONG Y",
});

const ongz ={lat: -19.944554894561282, lng:-43.93463726703682}
  new google.maps.Marker({
    position: ongz,
    map,
    title: "ONG Z",
});

}




function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}