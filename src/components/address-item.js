import React from 'react'

const AddressItem = ({ address, index, handleRemoveAddress }) => (
  <li>
    <button onClick={() => handleRemoveAddress(index)}>
      <span role='img' aria-label='close'>❌</span>
    </button>
    <p>{address.street}</p>
    <p>{address.number}</p>
    <p>{address.complement}</p>
    <p>{address.neighborhood}</p>
    <p>{address.city}</p>
    <p>{address.zipcode}</p>
  </li>
)

export default AddressItem
