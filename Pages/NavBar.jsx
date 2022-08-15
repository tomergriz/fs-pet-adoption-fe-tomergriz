import { Flex } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../components/NavBar/Sidebar'
import SignBar from '../components/SignBar/SignBar'

export default function NavBar() {
  return (
    <Flex>
        <Sidebar/>
        {/* <SignBar/> */}

    </Flex>
  )
}
