import * as React from "react"

const ProviderTile = ({ provider }) => {
  return (
    <div>
      <h3>{provider.name}</h3>
      <p>{provider.description}</p>
    </div>
  )
}

export default ProviderTile
