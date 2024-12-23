import { useMachine } from '@xstate/react';
import { gameplayMachine } from './gameplay';
import Header from './routes/Header';
//import Footer from './routes/Footer';

//  flow1
import Catalyst from './states/flow1/Catalyst';
import Objective from './states/flow1/Objective';
import FindCoyote from './states/flow1/FindCoyote';
import CostOfCoyote from './states/flow1/CostOfCoyote';
import EnoughMoney from './states/flow1/EnoughMoney';
import DaysPass from './states/flow1/DaysPass';
import Desert from './states/flow1/Desert';
import Death from './states/flow1/Death';
import FailedObjective from './states/flow1/FailedOjective';

// flow2
import ChooseVisas from './states/flow2/ChooseVisas';
import Ineligible from './states/flow2/Ineligible';

// flow2/student
import Broke from './states/flow2/student/Broke';
import CanAffordUni from './states/flow2/student/CanAffordUni';
import Fluent from './states/flow2/student/Fluent';
import JobsAvailable from './states/flow2/student/JobsAvailable';
import LearnEnglish from './states/flow2/student/LearnEnglish';
import RequiresEnglish from './states/flow2/student/RequiresEnglish';
import Insufficient from './states/flow2/student/Insufficient';
import CompletedObjective from './states/flow2/student/CompletedObjective';


const scenes = {
  // Top-level State
  catalyst_earth: Catalyst,
  catalyst_country: Catalyst,
  objective: Objective,

  // Illegal Route Children State
  find_coyote: FindCoyote,
  cost_of_coyote: CostOfCoyote,
  enough_money: EnoughMoney,
  days_pass: DaysPass,
  desert: Desert,
  death: Death,
  failed_objective: FailedObjective,

  // Legal Route Children State 
  choose_visas: ChooseVisas,
  ineligible: Ineligible,

  // Student Visa Children State
  insufficient: Insufficient,
  broke: Broke,
  can_afford_uni: CanAffordUni,
  completed_objective: CompletedObjective,
  fluent: Fluent,
  insufficient: Insufficient,
  jobs_available: JobsAvailable,
  learn_english: LearnEnglish,
  requires_english: RequiresEnglish,
};


export default function App() {
  const [state, send] = useMachine(gameplayMachine);


  // Determine the current scene based on the structure of state.value
  const currentScene = () => {

    // Potential parent states
    const parentStates = ["illegal_route", "legal_route", "student_visa_route"];

    for (let parent of parentStates) {
      if (state.value[parent]) {
        // Return the child state of the active parent
        return state.value[parent];
      }
    }
      // If no parent state is active, return top-level state
      return state.value;
  };


  // Access the component from the scenes object
  const SceneComponent = scenes[currentScene()];


  // Pass the necessary data to CanAffordUni component
  const contextProps = {
    canAffordUni: state.context.canAffordUni,
    fluentInEnglish: state.context.fluentInEnglish,
    visaType: state.context.visaType
  };


  // Render the component if it exists
  return (
    <>
      <Header />

      <div>
        {SceneComponent ? <SceneComponent {...contextProps} state={state} send={send} /> : null}
      </div><br/>

    </>
   
  );
}