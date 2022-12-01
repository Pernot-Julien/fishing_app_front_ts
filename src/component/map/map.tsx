import Location from '../Location/Location';
import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import "./index.css";
import LocationMarker from '../locationMarker/locationMarker';

const Map = () => {
   
    const [coord, setCoord] = useState({lat : 545, lng : 547})
    const {lat, lng} = coord;
    const position = [lat, lng]

    

return(
    <MapContainer 
    center={[51.505, -0.09]} 
    zoom={13} 
    scrollWheelZoom={true}
    >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={ position }>
            <Popup minWidth={ 300 }>
                Ajouter ce spot ?
               <button>OK</button>
            </Popup>
        </Marker> 
        <Location coordinates={ setCoord }/>
        <LocationMarker />
    </MapContainer>
   )
}


export default Map