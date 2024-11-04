

export default function Objective({ send }) {
  return (
    <div>
      Objective
      <button onClick={() => send({ type: "ILLEGAL_OPTION_SELECTED" })}>Select Illegal Option</button>
      <button onClick={() => send({ type: "LEGAL_OPTION_SELECTED" })}>Select Legal Option</button>
    </div>
  )
}
