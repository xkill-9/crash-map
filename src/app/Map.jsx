import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

const position = [51.505, -0.09];

const CrashMap = () => (
  <Map className="c-map" center={position} zoom={13} >
    <TileLayer
      url="https://api.mapbox.com/styles/v1/jorgeimo/ciux8iibx002h2ikh7un00c3s/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam9yZ2VpbW8iLCJhIjoiY2lzM21kOXppMDVnZDJ5cDFubGwwYnNrYiJ9.CgZX66X7QQkfVD5tFGTxuw"
      attribution="<a href='https://www.mapbox.com/about/maps/' target='_blank'>&copy; Mapbox</a> <a href='http://www.openstreetmap.org/about/' target='_blank'>&copy; OpenStreetMap</a>"
    />
  </Map>
);

export default CrashMap;
