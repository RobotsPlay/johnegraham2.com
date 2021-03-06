/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from 'react'
import Layout from './src/components/Layout'

export function wrapPageElement({ element }) {
  return <Layout>{element}</Layout>
}
