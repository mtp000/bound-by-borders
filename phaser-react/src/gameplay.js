import { createMachine } from "xstate";

export const gameplayMachine = createMachine({
    id: "gameplay",
    initial: "catalyst_earth",
    context: {
        wealth: "2000",
        optionAB: "",
    },
    // guards: {
    //     isSelectedIllegalOption: (_context, event) =>
    //         event.selectionAB === "illegal",
    // },
    // actions: {
    //     assignDataToContext: assign(
    //         _context,
    //         ({ type, ...eventRest }) => eventRest
    //     ),
    // },
   
    states: {
        catalyst_earth: {
            on: {
                CONTINUE: {
                    target: "catalyst_country",
                },
            },
        },
        catalyst_country: {
            on: {
                CONTINUE: {
                    target: "catalyst_objective",
                },
            },
        },
        catalyst_objective: {
            on: {
                CONTINUE: {
                    target: "decision_AB",
                },
            },
        },
        decision_AB: {
            on: {
                ILLEGAL_OPTION_SELECTED: {
                    target: "decision_A1",
                    // cond: "isSelectedIllegalOption",
                    // actions: "assignDataToContext",
                },
                LEGAL_OPTION_SELECTED: {
                    target: "completed_objective",
                },
            },
        },
        decision_A1: {
            on: {
                CONTINUE: {
                    target: "cost_of_coyote",
                },
                // LEGAL_OPTION_SELECTED: {
                //     target: "decision_B1",
                // }
                RESTART: {
                    target: "decision_AB",
                },
            },
        },
        cost_of_coyote: {
            on: {
                CONTINUE: {
                    target: "decision_A2",
                }
            }
        },
        decision_A2: {
            on: {
                CONTINUE: {
                    target: "start_journey1",
                },
            },
        },
        start_journey1: {
            on: {
                CONTINUE: {
                    target: "start_journey2",
                },
            },
        },
        start_journey2: {
            on: {
                CONTINUE: {
                    target: "completed_objective",
                },
            },
        },
        completed_objective: {
            type: "final",
        }
    },
});
