import React from 'react'

const Error = ({ isError }) => (
  <>
    {isError &&
      <p>CEP não encontrado!</p>
    }
  </>
)

export default Error
