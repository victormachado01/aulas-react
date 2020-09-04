import CreateContextCharacter from '../context/characterContext';
import { useState, useContext } from 'react'

const useCharacter = () => {

  const [response, setResponse] = useContext(CreateContextCharacter.Provider);

  return {response, setResponse}
}

export default useCharacter