import React from 'react'
import Service from '../../../Components/Service';

export default async  function page({params}) {
    const {id} = await params;

    
  return (
    <Service serviceId={id} />
  )
}
