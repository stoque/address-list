import React from 'react'

const Form = ({
    handleGetAddressData, 
    handleChangeNewAddress,
    handleAddAddress,
    newAddress
  }) => (
  <form>
    <input type='text' onChange={handleGetAddressData} name='zipcode' placeholder='Digite seu CEP' maxLength='8' />
    
    {newAddress.street &&
      <>
        <p>{newAddress.street}</p>
        <p>{newAddress.neighborhood}</p>
        <p>{newAddress.city} - {newAddress.state}</p>

        <input type='text' onChange={handleChangeNewAddress} name='number' placeholder='Digite o número' />
        <input type='text' onChange={handleChangeNewAddress} name='complement' placeholder='Digite o complemento' />
      </>
    }

    {newAddress.number &&
      <button onClick={handleAddAddress}>Cadastrar</button>
    }
  </form>
)

export default Form
