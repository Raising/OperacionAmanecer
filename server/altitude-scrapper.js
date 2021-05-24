function measure(lat1, lon1, lat2, lon2){  // generally used geo measurement function
  var R = 6378.137; // Radius of earth in KM
  var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
  var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
  Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
  Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;
  return d * 1000; // meters
}


function getAltitude(lon,lat,callback){
  fetch("https://www.calcmaps.com/ajax.php?op=elevation_s1&lat=36.90213735102499&lng=" + lon + "&_=" + lat, {
  "headers": {
    "accept": "*/*",
    "accept-language": "es-ES,es;q=0.9,en;q=0.8",
    "content-type": "application/x-www-form-urlencoded;charset=utf-8",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sec-gpc": "1",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://www.calcmaps.com/map-elevation/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
})
.then(response => response.json())
.then((data) => callback(data.elevation));
}



latRAnge = [36.89616,36.90616];
lonRAnge = [-3.563457,-3.55117];
latStep = 0.0008082 ;
lonStep = 0.001011 ;
// latStep = 0.05;


altitudes = [];

for (let lat = 0; (latRAnge[0] +  (lat * latStep)) <= latRAnge[1] ; lat++ ){  
  let latitudeVal = (latRAnge[0] +  (lat * latStep));
  altitudes.push([]);

  for (let lon = 0; (lonRAnge[0] +  (lon * lonStep)) <= lonRAnge[1] ; lon++ ){
    let longitudeVal = (lonRAnge[0] +  (lon * lonStep));
    getAltitude(longitudeVal,latitudeVal, (data ) =>  {
      altitudes[lat].push(data);
    })
      
  }
}

console.log( "Calculated area = [" + measure(latRAnge[0],lonRAnge[0],latRAnge[0],lonRAnge[1])+ " , " + measure(latRAnge[0],lonRAnge[0],latRAnge[1],lonRAnge[0]) + "] ");
console.log( "Steps area = [" + measure(latRAnge[0],lonRAnge[0],latRAnge[0],lonRAnge[0] + lonStep)+ " , " + measure(latRAnge[0],lonRAnge[0],latRAnge[0]+ latStep,lonRAnge[0]) + "] ");

altitudes