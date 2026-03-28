import React from 'react'
import Services from '../../Components/Services'


export default async function page() {

const data = await fetch("http://localhost:3000/api/service")
const service = await data.json();



  return (
    <>
    <Services service={service} />
    </>
  )
}
