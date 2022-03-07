import * as React from "react"

import Layout from "../components/layout"
import ProvidersList from "../components/providers-list"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Public Directory" />
    <p><em>Under Construction:</em> Please excuse our dust</p>
    <ProvidersList/>
  </Layout>
)

export default IndexPage
