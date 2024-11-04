import { useMachine } from '@xstate/react'
import { gameplayMachine } from './gameplay'

import Catalyst from './states/flow1/Catalyst';
import Objective from './states/flow1/Objective';
import FindCoyote from './states/flow1/FindCoyote'

const scenes = {
  catalyst_earth: Catalyst,
  catalyst_country: Catalyst,
  objective: Objective,
  find_coyote: FindCoyote,
};

export default function App() {
  const [state, send] = useMachine(gameplayMachine);

  // Get the component based on the current state
  const SceneComponent = scenes[state.value];

  // Render the component if it exists
  return SceneComponent ? <SceneComponent state={state} send={send} /> : null;
}