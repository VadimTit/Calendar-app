import React from 'react';

function Cars() {
  const carModel = ['Ferrari', 'Mercedes-Benz', 'BMW', 'Fiat', 'Bugatti', 'Porsche']

  return (
    <div className='Cars'>
      {carModel.map((el) => <div className='carModel'>{el}</div>)}
    </div>
  )
}


export default Cars;