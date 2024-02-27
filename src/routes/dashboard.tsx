import { HeaderTitle } from '../components/header-title'
import React from 'react'
import { WeatherWidget } from '../components/weather-widget'

const KYIV_LOCATION = {
  id: 1,
  name: "Kyiv",
  latitude: 50.45466,
  longitude: 30.5238,
}
export function Dashboard () {
  return (
    <div>
      <HeaderTitle>Dashboard</HeaderTitle>
      <div>Custom variable {process.env.REACT_APP_VARIABLE}</div>
      <WeatherWidget location={KYIV_LOCATION} />
    </div>
  )
}
