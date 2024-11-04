

export default function Desert({ send }) {
  return (
    <div>
        Desert
        <button onClick={() => send({type: "CONTINUE"})}>continue</button>
    </div>
  )
}
