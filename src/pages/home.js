import React from 'react'
import { Header } from '../components'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Header />
    <Button as={Link} to="/child">child</Button>
    </>
  )
}

export default Home