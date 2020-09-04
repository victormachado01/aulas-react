import Axios from 'axios'
import CryptoJS from 'crypto-js/'
import useCharacter from '../hook/useCharacter'

const { setResponse } = useCharacter()

const timestamp = new Date().getTime();

const PUBLIC_KEY = 'f69f177742da382921e8186e35140448'
const privateKey = '93440143f95858fb17332ad79e4959e40af58dbb'
const hash = CryptoJS.MD5(timestamp+PUBLIC_KEY+privateKey).toString()
const urlBase = `https://gateway.marvel.com/v1/public/characters`

const get = async () => {
  
  await Axios.get(urlBase, {
    params: {
      apikey:PUBLIC_KEY,
      hash: hash
    }
  })
  .then((response)=> {

    setResponse(response)
  })
  .catch((err) => {return err})
}

export default { get }

