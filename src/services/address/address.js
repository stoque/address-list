import axios from 'axios'

const getAddressData = async (zipcode) => {
  if (zipcode.length === 8) {
    const apiUrl = `https://viacep.com.br/ws/${zipcode}/json/`
    const data = (await axios.get(apiUrl)).data
    return !data.erro 
      ? {
        neighborhood: data.bairro,
        street: data.logradouro,
        city: data.localidade,
        state: data.uf,
        zipcode: data.cep
      } 
      : {
        isError: true
      }
  }
  return {}
}

const addAddress = (addressList, payload) => [...addressList, payload]

const removeAddress = (addressList, index) => addressList.filter((item, i) => i !== index)

const updateAddress = (addressList, index, changes) => (
  addressList.map((item, i) => i === index ? {...item, ...changes} : item)
)

export {
  getAddressData,
  addAddress,
  removeAddress,
  updateAddress
}