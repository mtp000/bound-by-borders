import React from 'react'

export default function RequiresEnglish({ send }) {
  return (
    <>
        <h1>Requires English</h1>

        <button onClick={() => send({type: "CARNICERIA"})}>Learn on your own with online resources</button>
    
    </>
  )
}
