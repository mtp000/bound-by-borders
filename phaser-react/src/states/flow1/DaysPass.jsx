

export default function DaysPass({ send }) {
  return (
    <div>
        <h1>Days Pass</h1>
        <button onClick={() => send({type: "CONTINUE"})}>Continue</button>
    </div>
  )
}
