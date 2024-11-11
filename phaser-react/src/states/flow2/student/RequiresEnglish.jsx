import React from 'react'

export default function RequiresEnglish({ send }) {
  return (
    <>
        <h1>Requires English</h1>
        
        <p>Thank you for applying. After reviewing your English proficiency, we have determined that it <u>does not</u> meet the level required for effective communication in this role. We encourage you to reapply after further language improvement.</p>

        <button onClick={() => send({type: "CARNICERIA"})}>Work at the carnicería instead</button>
    
    </>
  )
}
