import React, { useState } from 'react'
import { HeaderTitle } from '../components/header-title'
import { Weather } from '../widgets/weather-widget'

const KYIV = {
  id: 1,
  name: "Kyiv",
  latitude: 50.45466,
  longitude: 30.5238,
}
export function Dashboard () {
  const [location] = useState(KYIV);

  return (
    <div>
      <HeaderTitle>Dashboard</HeaderTitle>
      <Weather location={location} />
    </div>
  )
}
