import * as React from 'react'
import { graphql } from 'gatsby'
import MDX from '../components/MDX'

import Layout from '../layouts'

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    post: {
      body: string
      excerpt: string
      frontmatter: {
        title: string
      }
    }
  }
}

const PageTemplate: React.FC<PageTemplateProps> = ({ data }) => (
  <Layout>
    <MDX>{data.post.body}</MDX>
  </Layout>
)

export default PageTemplate

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    post: mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt
      frontmatter {
        title
      }
    }
  }
`
