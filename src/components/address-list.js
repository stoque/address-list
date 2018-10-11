import React from 'react'

import AddressItem from './address-item'
import Form from './form'
import Error from './error'

const AddressList = ({
    addressList,
    newAddress,
    isError,
    handleGetAddressData,
    handleChangeNewAddress,
    handleAddAddress,
    handleRemoveAddress,
}) => (
  <div>
    <Form
      newAddress={newAddress}
      handleGetAddressData={handleGetAddressData}
      handleChangeNewAddress={handleChangeNewAddress} 
      handleAddAddress={handleAddAddress} 
    />
    <Error isError={isError}/>

    {addressList &&
      <ul>
        {addressList.map((address, index) => (
          <AddressItem 
            key={index}
            address={address} 
            index={index}
            handleRemoveAddress={handleRemoveAddress} 
          />
        ))}
      </ul>
    }
  </div>
)

export default AddressList
