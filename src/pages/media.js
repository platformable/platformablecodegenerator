import React, {useState} from 'react'
import {graphql,Link} from 'gatsby'
import Layout from '../components/layout'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import CallMediaModal from '../components/callMediaModal'

export default function Media({data}) {
   
    const [selectedImg,setSelectedImg] = useState('')
  
    return (
        <Layout>
            <Container>
            <h3>Media</h3>
            <CallMediaModal data={data} setSelectedImg={setSelectedImg}/>
       {/*      <ul>
            {data.allStrapiMedia.edges.map(item => <GatsbyImage image={getImage(item.node.localFile)} alt={item.node.name}/>)}
            </ul> */}
            </Container>
        </Layout>
    )
}


export const query  = graphql `
query Media {
    allStrapiMedia {
      edges {
        node {
          name
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FIXED, placeholder: BLURRED)
            }
          }
        }
      }
      pageInfo {
        itemCount
        hasNextPage
        pageCount
        currentPage
        perPage
        totalCount
        hasPreviousPage
      }
    }
  }
`