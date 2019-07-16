import axios from 'axios'
const baseUrl = 'http://localhost:3001/songs'

const getAll = () => {
   const nonExisting = {
        id: 10000,
        read:false,
        lyrics: [],
        name: "not a song"
      } 
   // return axios.get(baseUrl);
   const request = axios.get(baseUrl);
   return request.then(response => {return {...response, data: response.data.concat(nonExisting)}})
    }

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

export default { 
  getAll: getAll, 
  create: create, 
  update: update 
}