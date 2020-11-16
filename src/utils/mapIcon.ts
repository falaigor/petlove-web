import Leaflet from 'leaflet';
import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [38, 40],
  iconAnchor: [19, 40],
  popupAnchor: [178, 15]
});

export default mapIcon;