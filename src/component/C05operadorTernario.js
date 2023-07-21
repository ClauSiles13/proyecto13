import React, { Fragment } from 'react'

const C05operadorTerr = () => {
  const edad = 18
   return (
    <Fragment>
        <h1>Operador Ternario</h1>
        {edad >=18? 'Mayor de edad':'Menor de edad'}
      
    </Fragment>
  );
}

export default C05operadorTerr
