

export default function DaysPass({ send }) {
  return (
    <div>
        Days Pass
        <button onClick={() => send({type: "CONTINUE"})}>continue</button>
    </div>
  )
}
