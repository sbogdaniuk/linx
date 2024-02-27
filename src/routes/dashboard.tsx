import { HeaderTitle } from '../components/header-title'
import React from 'react'

export function Dashboard () {
  return (
    <div>
      <HeaderTitle>Dashboard</HeaderTitle>
      <div>Custom variable {process.env.REACT_APP_VARIABLE}</div>
    </div>
  )
}
