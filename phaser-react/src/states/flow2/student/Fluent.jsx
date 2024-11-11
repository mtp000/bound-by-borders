import React from 'react'

export default function Fluent({ send }) {
  return (
    <>
        <h1>Fluent</h1>

        <button onClick={() => send({type: "EARN_MONEY"})}>Get a job</button>

        {/** add function handle enabling button based on guard conditions */}
        <button disabled onClick={() => send({type: "CONTINUE"})}>Continue</button>
    </>
  )
}
