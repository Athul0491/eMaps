export class CustomMap {
  public googleMap: google.maps.Map;
  constructor(divID) {
    new google.maps.Map(document.getElementById(divID), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
}
