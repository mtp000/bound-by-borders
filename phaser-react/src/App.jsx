import { useMachine } from '@xstate/react'
import { gameplayMachine } from './gameplay'

import Catalyst from './states/flow1/Catalyst';
import Objective from './states/flow1/Objective';
import FindCoyote from './states/flow1/FindCoyote'
import CostOfCoyote from './states/flow1/CostOfCoyote';
import EnoughMoney from './states/flow1/EnoughMoney'
import DaysPass from './states/flow1/DaysPass'
import Desert from './states/flow1/Desert'
import Death from './states/flow1/Death'
import FailedObjective from './states/flow1/FailedOjective'


const scenes = {
  catalyst_earth: Catalyst,
  catalyst_country: Catalyst,
  objective: Objective,
  find_coyote: FindCoyote,
  cost_of_coyote: CostOfCoyote,
  enough_money: EnoughMoney,
  days_pass: DaysPass,
  desert: Desert,
  death: Death,
  failed_objective: FailedObjective,
  //completed_objective: CompletedObjective,
};

export default function App() {
  const [state, send] = useMachine(gameplayMachine);

  // Get the component based on the current state
  const SceneComponent = scenes[state.value];

  // Render the component if it exists
  return SceneComponent ? <SceneComponent state={state} send={send} /> : null;
}