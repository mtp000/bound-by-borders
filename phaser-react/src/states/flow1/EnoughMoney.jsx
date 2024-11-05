

export default function EnoughMoney({ send }) {
  return (
    <div>
        <h1> Enough Money </h1>
        <p> You managed to gather enough money to pay the coyote&#39;s price.</p>
        <button onClick={() => send({type: "START"})}> Start Journey </button>
    </div>
  )
}
