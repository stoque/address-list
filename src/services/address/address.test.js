import freeze from 'deep-freeze-node'

import { addAddress, removeAddress, updateAddress } from './address'

it('should addAddress to be a function', () => (
  expect(typeof addAddress).toBe('function')
))

it('should add a address in address list', () => {
  const before = freeze([
    { address: 'Street 1', number: '12', complement: '', neighborhood: 'Capital', zipcode: '00000-000' }
  ])
  const payload = {
    address: 'Street 2',
    number: '22',
    complement: 'XX',
    neighborhood: 'Candy',
    zipcode: '00000-001'
  }
  const after = freeze([
    { address: 'Street 1', number: '12', complement: '', neighborhood: 'Capital', zipcode: '00000-000' },
    { address: 'Street 2', number: '22', complement: 'XX', neighborhood: 'Candy', zipcode: '00000-001' }
  ])
  expect(addAddress(before, payload)).toEqual(after)
})

it('should add another address in address list', () => {
  const before = freeze([
    { address: 'Street 1', number: '12', complement: '', neighborhood: 'Capital', zipcode: '00000-000' },
    { address: 'Street 2', number: '22', complement: 'XX', neighborhood: 'Candy', zipcode: '00000-001' }
  ])
  const payload = {
    address: 'Street 3',
    number: '24',
    complement: 'XX',
    neighborhood: 'Candy',
    zipcode: '00000-003'
  }
  const after = freeze([
    { address: 'Street 1', number: '12', complement: '', neighborhood: 'Capital', zipcode: '00000-000' },
    { address: 'Street 2', number: '22', complement: 'XX', neighborhood: 'Candy', zipcode: '00000-001' },
    { address: 'Street 3', number: '24', complement: 'XX', neighborhood: 'Candy', zipcode: '00000-003' }
  ])
  expect(addAddress(before, payload)).toEqual(after)
})

it('should removeAddress to be a function', () => (
  expect(typeof removeAddress).toBe('function')
))

it('should remove a address in a address list by index', () => {
  const before = freeze([
    { address: 'Street 1', number: '12', complement: '', neighborhood: 'Capital', zipcode: '00000-000' },
    { address: 'Street 2', number: '22', complement: 'XX', neighborhood: 'Candy', zipcode: '00000-001' }
  ])
  const after = freeze([
    { address: 'Street 1', number: '12', complement: '', neighborhood: 'Capital', zipcode: '00000-000' },
  ])
  expect(removeAddress(before, 1)).toEqual(after)
})

it('should updateAddress to be a function', () => (
  expect(typeof updateAddress).toBe('function')
))

it('should update a address by index', () => {
  const before = freeze([
    { address: 'Street 1', number: '12', complement: '', neighborhood: 'Capital', zipcode: '00000-000' },
    { address: 'Street 2', number: '22', complement: 'XX', neighborhood: 'Candy', zipcode: '00000-001' }
  ])
  const changes = { address: 'Street 99', number: '63' }
  const after = freeze([
    { address: 'Street 1', number: '12', complement: '', neighborhood: 'Capital', zipcode: '00000-000' },
    { address: 'Street 99', number: '63', complement: 'XX', neighborhood: 'Candy', zipcode: '00000-001' }
  ])
  expect(updateAddress(before, 1, changes)).toEqual(after)
})

it('should update another address by index', () => {
  const before = freeze([
    { address: 'Street 1', number: '12', complement: '', neighborhood: 'Capital', zipcode: '00000-000' },
    { address: 'Street 99', number: '63', complement: 'XX', neighborhood: 'Candy', zipcode: '00000-001' }
  ])
  const changes = { address: 'Street 50', number: '99' }
  const after = freeze([
    { address: 'Street 50', number: '99', complement: '', neighborhood: 'Capital', zipcode: '00000-000' },
    { address: 'Street 99', number: '63', complement: 'XX', neighborhood: 'Candy', zipcode: '00000-001' }
  ])
  expect(updateAddress(before, 0, changes)).toEqual(after)
})
