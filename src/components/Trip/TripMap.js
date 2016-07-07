import React from 'react';
import Leaflet from 'leaflet';
import { Map, Marker, Polyline, TileLayer } from 'react-leaflet';

require('./TripMap.scss');
require('./leaflet.scss');

const mapIcon = Leaflet.icon({
  iconUrl: require('./images/leaflet-marker.png'),
  iconRetinaUrl: require('./images/leaflet-marker@2x.png'),
  iconAnchor: [12, 41],
  iconSize: [25, 41],
  shadowUrl: require('./images/leaflet-marker_shadow.png'),
  shadowRetinaUrl: require('./images/leaflet-marker_shadow@2x.png'),
  shadowSize: [25, 25],
  shadowAnchor: [12, 11]
});

const getLocationsDec = (locations) => {
  let locationsDec = [];

  locations.forEach((location) => {
    locationsDec.push(location.dec);
  });

  return locationsDec;
}

const TripMap = ({ locations, mapZoom = 5, date, excerpt, summaryPs }) =>
  <div className="trip-map">
    <div className="trip-map-leaflet">
      <Map
        center={ locations[0].dec }
        zoom={ mapZoom }
        touchZoom={ false }
        touchZoom={ false }
        doubleClickZoom={ false }
        scrollWheelZoom={ false }
        zoomControl={ false }>
        <TileLayer url='https://api.mapbox.com/styles/v1/adambbecker/ciq8qkvds0023b3nivyn1ntey/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWRhbWJiZWNrZXIiLCJhIjoiV2VkVktrNCJ9.kPJgMRlA-et5ZzKv1kADXQ' />
        {
          locations.length > 1 ?
            <Polyline positions={ getLocationsDec(locations) } color="white" />
          : null
        }
        {
          locations.map((location, ind) =>
            <Marker position={ location.dec } icon={ mapIcon } key={ `loc-marker-${ ind }` } />
          )
        }
      </Map>
    </div>
    <div className="trip-map-intro">
      <div className="trip-map-intro-top-bg"></div>
      <div className="trip-map-intro-text">
        <div className="trip-map-intro-center">
          <p className="trip-map-intro-date">{ date }</p>
          <h2 className="trip-map-intro-location">{ locations[0].name }</h2>
          <p className="trip-map-intro-gps">{ locations[0].gps.lat.deg }&deg;{ locations[0].gps.lat.min }&#8217;N { locations[0].gps.long.deg }&deg;{ locations[0].gps.long.min }&#8217;W</p>
          <p className="trip-map-intro-lead">{ excerpt }</p>
        </div>
      </div>
      <div>
        {
          summaryPs.map((text, ind) =>
            <p className="trip-map-intro-desc" key={ `summary-p-${ ind }` }>{ text }</p>
          )
        }
      </div>
    </div>
  </div>

export default TripMap;
