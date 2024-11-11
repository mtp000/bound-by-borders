import React from 'react'

export default function CanAffordUni({ send }) {
  return (
    <>
        <h1>Can Afford Uni</h1>

        <button onClick={() => send({type: "LEARN_ENGLISH"})}>Learn English</button>
        
        {/* add function handle enabling button based on guard conditions*/}
        <button disabled onClick={() => send({type: "CONTINUE"})}>Continue</button>
        
    </>
  )
}
