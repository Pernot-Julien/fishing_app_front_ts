import { useMapEvents } from 'react-leaflet'

const Location = ({coordinates}) => {
 
    const map = useMapEvents({
      click: (e) => {
        map.locate()
        coordinates(e.latlng)
      },
    })
    return null
  }
  

  export default Location;