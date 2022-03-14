import * as React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import ProvidersList from "../components/providers-list"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Public Directory" />
    <div dangerouslySetInnerHTML={{ __html: data.mainPageBlurb.html }} />
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
    mainPageBlurb: markdownRemark(frontmatter: {slug: {eq: "main-page-blurb"}}) {
        html
    }
  }
`

export default IndexPage
