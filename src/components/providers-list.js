import * as React from "react"

import ProviderTile from "./provider-tile"

const ProvidersList = ({ providers }) => {
  return (
    <div>
      <h2>Healthcare Providers</h2>
      {providers.map(provider => (
        <ProviderTile provider={provider}/>
      ))}
    </div>
  )
}

export default ProvidersList
