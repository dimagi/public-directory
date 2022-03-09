import * as React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import ProvidersList from "../components/providers-list"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Public Directory" />
    <p><em>Under Construction:</em> Please excuse our dust</p>
    <ProvidersList providers={ data.allObhProvider.nodes }/>
  </Layout>
)

export const query = graphql`
  {
    allObhProvider {
      nodes {
        id
        name
        description
      }
    }
  }
`

export default IndexPage
