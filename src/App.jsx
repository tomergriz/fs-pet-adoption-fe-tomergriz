import { Heading } from '@chakra-ui/react'
import { useState } from 'react'
import NavBar from '../Pages/NavBar'


function App() {

  return (
    <>
    <NavBar/>
    <Heading as="h1" color="brand.color3">Hello world!</Heading>
    <Heading as="h2">Foo</Heading>
    </>
)}

export default App
