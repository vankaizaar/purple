 var center = [-1.282906, 36.791445];
$('#gmap').gmap3({
        center: center,
        zoom: 18,
        mapTypeId : google.maps.MapTypeId.ROADMAP
      })
.marker({
        position: center,
        icon: 'marker.png'
      });
