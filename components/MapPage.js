import dynamic from 'next/dynamic'
import { useMemo } from 'react'

const MapPage = ({ data }) => {
  const Map = useMemo(
    () =>
      dynamic(() => import('./RadarMap'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    [],
  )
  return data ? <Map data={data} /> : null
}
export default MapPage
