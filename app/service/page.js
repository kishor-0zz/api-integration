import React from 'react'
import Services from '../../Components/Services'


export default async function page() {

  try{
    const res = await fetch(`${process.env.DB_HOST}/api/service`,{
      next:{revalidate:60}
    })
    if(!res.ok){
      throw new Error("Failed to fetch services");
    }
    const service = await res.json();
    return <Services service={service} />


  }catch(error){
    return (
      <div className="p-6 text-red-500">
        Error loading services: {error.message}
      </div>
      )}
 
}
