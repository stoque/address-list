const addAddress = (addressList, payload) => [...addressList, payload]

const removeAddress = (addressList, index) => addressList.filter((item, i) => i !== index)

const updateAddress = (addressList, index, changes) => (
  addressList.map((item, i) => i === index ? {...item, ...changes} : item)
)

export {
  addAddress,
  removeAddress,
  updateAddress
}