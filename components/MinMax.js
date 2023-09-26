import React from 'react'
import { Text } from "react-native"

export default function MinMax(props) {

    const {min=55, max=789} = props
    console.warn(min + " é maior que " + max)
      
      return (
        <>
          <Text>{max} é maior que {min}</Text>
        </>
      )
  } 