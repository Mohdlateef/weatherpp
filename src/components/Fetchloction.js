import React, { useState } from "react";

let Fetchloction = () => {
  let [latitude, setLatitude] = useState(0);
  let [longitude, setLongitude] = useState(0);
  let [Hemisphere, setHemisphere] = useState("");
  let [month, setmonth] = useState(() => {
    return new Date().getMonth() + 1;
  });

  console.log(navigator);
  // navigator is a function that gives us location and navigator.geolocation.gives us latitude and langitude;

  function getLocation() {
    let la, lt;
    navigator.geolocation.getCurrentPosition((position) => {
      la = position.coords.latitude;
      lt = position.coords.longitude;
      setLatitude(la);
      setLongitude(lt);
      if (la > 0) {
        setHemisphere("Northen Hemisphere");
      } else if (la < 0) {
        setHemisphere("Southern Hemisphere");
      } else {
        setHemisphere("Equator");
      }
    });
  }

  return (
    <div>
      <button onClick={getLocation}>getLocation</button>
      <h3>langitude|{latitude}</h3>
      <h3>longitude|{longitude}</h3>
      <h3>Hemisphere|{Hemisphere}</h3>
      <h3>month|{month}</h3>

      {(Hemisphere &&
        ((Hemisphere == "Northen Hemisphere" && (month >= 11 || month <= 3)) ||
          (Hemisphere == "Southern" && month >= 6 && month <= 10)) && (
          <h3>winter</h3>
        )) || <h3>Summer</h3>}
    </div>
  );
};

export default Fetchloction;
