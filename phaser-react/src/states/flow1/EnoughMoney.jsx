

export default function EnoughMoney({ send }) {
  return (
    <div>
        EnoughMoney
        <button onClick={() => send({type: "START"})}>continue</button>
    </div>
  )
}
