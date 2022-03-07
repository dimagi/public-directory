import * as React from "react"

import ProviderTile from "./provider-tile"

const ProvidersList = () => {
  return (
    <div>
      <h2>Healthcare Providers</h2>
      {["Mercy Hospital", "Jackson"].map((providerName, index) => (
        <ProviderTile providerName={providerName}/>
      ))}
    </div>
  )
}

export default ProvidersList
