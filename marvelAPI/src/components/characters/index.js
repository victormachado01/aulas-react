import React, { useState, useEffect } from 'react'

import * as resources from '../../resources/index'

import { Box, CircularProgress } from '@material-ui/core'

import useCharacter from '../../hook/useCharacter'

const {response, setResponse} = useCharacter

const Characters = () => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=> {

    const loadData = async () => {
      return await resources.marvel.get(setResponse)
    }

    loadData()
    .then((response) => {
      console.log(response)
      setResponse(response)
      setIsLoading(false)
    })
    .catch(err => err)
  },[
    response
  ]
  )

  return (
    <>
    {isLoading ? (
      <Box>
        <CircularProgress/>
      </Box>
    ) : (
      <Box>
        <p>{response}</p>
      </Box>
    )}
    </>
  )
}

export default Characters

