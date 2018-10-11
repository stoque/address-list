import React, { Component } from 'react'

import AddressList from './components/address-list'
import { getAddressData, addAddress, removeAddress } from './services/address/address'

class App extends Component {
  state = {
    newAddress: {},
    addressList: [],
    isError: false
  }

  componentDidMount () {
    this.setState({
      addressList: JSON.parse(localStorage.getItem('addressList')) || []
    })
  }

  updateLocalStorage () {
    localStorage.setItem('addressList', JSON.stringify(this.state.addressList))
  }

  handleGetAddressData = async (event) => {
    const zipcode = event.target.value
    const data = await getAddressData(zipcode)
    if (!data.isError) {
      this.setState({
        newAddress: data,
        isError: false
      })
    } else {
      this.setState({
        isError: true
      })
    }
  }

  handleChangeNewAddress = (event) => {
    const target = event.target
    this.setState({
      newAddress: {
        ...this.state.newAddress,
        [target.name]: target.value
      }
    })
  }

  handleAddAddress = (event) => {
    event.preventDefault()
    console.log(this.state.newAddress)
    this.setState(
      { addressList: addAddress(this.state.addressList, this.state.newAddress) }, 
      () => this.updateLocalStorage()
    )
  }

  handleRemoveAddress = (index) => {
    this.setState({ addressList: removeAddress(this.state.addressList, index) }, () => {
      this.updateLocalStorage()
    })
  }

  render () {
    const { addressList, newAddress, isError } = this.state
    return (
      <AddressList 
        addressList={addressList} 
        newAddress={newAddress}
        isError={isError}
        handleGetAddressData={this.handleGetAddressData}
        handleChangeNewAddress={this.handleChangeNewAddress}
        handleAddAddress={this.handleAddAddress} 
        handleRemoveAddress={this.handleRemoveAddress} 
      />
    )
  }
}

export default App
