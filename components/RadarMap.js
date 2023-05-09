import 'leaflet/dist/leaflet.css'
import {
  LayersControl,
  MapContainer,
  TileLayer,
  WMSTileLayer,
  Marker,
  useMap,
} from 'react-leaflet'
import { OPEN_WEATHER_MAP_API_KEY } from '@/lib/api'
import { useEffect } from 'react'
/* マーカー用 */
import L from 'leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { AspectRatio, chakra } from '@chakra-ui/react'

const RadarMap = ({ data }) => {
  const APIKey = OPEN_WEATHER_MAP_API_KEY

  const lat = data.coord.lat
  const lon = data.coord.lon
  const position = [lat, lon]

  const radarLayers = [
    {
      urlName: `clouds`,
      name: 'Cloud',
      checked: 'checked',
    },
    {
      urlName: `precipitation`,
      name: 'Precipitation',
      checked: null,
    },
    {
      urlName: `pressure`,
      name: 'Sea Level Pressure',
      checked: null,
    },
    {
      urlName: `wind`,
      name: 'Wind Speed',
      checked: null,
    },
    {
      urlName: `temp`,
      name: 'Temperature',
      checked: null,
    },
  ]

  /* マップに移動があるたびに、マーカーの位置を更新する */
  const RecenterAutomatically = ({ lat, lon }) => {
    const map = useMap()
    useEffect(() => {
      map.setView([lat, lon])
    }, [lat, lon, map])
    return null
  }

  /* 表示されないマーカーを修正 */
  delete L.Icon.Default.prototype._getIconUrl
  L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
  })

  const MapStyle = chakra(MapContainer)

  return (
    <>
      {data && (
        <AspectRatio ratio={{ base: 3 / 4, md: 4 / 3, lg: 16 / 9 }}>
          <MapStyle rounded="md" boxShadow="base" center={position} zoom={5}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright";>OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LayersControl position="topright">
              {radarLayers.map((radar, i) => (
                <LayersControl.Overlay
                  name={radar.name}
                  checked={radar.checked}
                  key={i}
                >
                  <WMSTileLayer
                    url={`https://tile.openweathermap.org/map/${radar.urlName}_new/{z}/{x}/{y}.png?appid=${APIKey}`}
                  />
                </LayersControl.Overlay>
              ))}
            </LayersControl>
            <Marker position={position} />
            <RecenterAutomatically lat={lat} lon={lon} />
          </MapStyle>
        </AspectRatio>
      )}
    </>
  )
}
export default RadarMap
