import { createMachine, assign } from "xstate";
export const gameplayMachine = createMachine(
  {
    context: {
      wealth: "2000",
      visaType: null,
      canAffordUni: false,
      fluentInEnglish: false,
      canAffordClasses: false,
    },
    id: "gameplay",
    initial: "catalyst_earth",
    states: {
      catalyst_earth: {
        on: {
          CONTINUE: [
            {
              target: "catalyst_country",
              actions: [],
            },
          ],
        },
      },
      catalyst_country: {
        on: {
          CONTINUE: [
            {
              target: "objective",
              actions: [],
            },
          ],
        },
      },
      objective: {
        on: {
          ILLEGAL_OPTION_SELECTED: [
            {
              target: "illegal_route",
              actions: [],
            },
          ],
          LEGAL_OPTION_SELECTED: [
            {
              target: "legal_route",
              actions: [],
            },
          ],
        },
      },
      illegal_route: {
        initial: "find_coyote",
        states: {
          find_coyote: {
            on: {
              CONTINUE: [
                {
                  target: "cost_of_coyote",
                  actions: [],
                },
              ],
            },
          },
          cost_of_coyote: {
            on: {
              CONTINUE: [
                {
                  target: "enough_money",
                  actions: [],
                },
              ],
            },
          },
          enough_money: {
            on: {
              CONTINUE: [
                {
                  target: "days_pass",
                  actions: [],
                },
              ],
            },
          },
          days_pass: {
            on: {
              CONTINUE: [
                {
                  target: "desert",
                  actions: [],
                },
              ],
            },
          },
          desert: {
            on: {
              CONTINUE: [
                {
                  target: "death",
                  actions: [],
                },
              ],
            },
          },
          death: {
            on: {
              CONTINUE: [
                {
                  target: "failed_objective",
                  actions: [],
                },
              ],
            },
          },
          failed_objective: {},
        },
      },
      legal_route: {
        initial: "choose_visas",
        states: {
          choose_visas: {
            on: {
              STUDENT: [
                {
                  target: "#gameplay.student_visa_route",
                  actions: [
                    {
                      type: "assignVisaType",
                    },
                  ],
                },
              ],
              DIVERSITY: [
                {
                  target: "ineligible",
                  actions: [
                    {
                      type: "assignVisaType",
                    },
                  ],
                },
              ],
              FIANCE: [
                {
                  target: "ineligible",
                  actions: [
                    {
                      type: "assignVisaType",
                    },
                  ],
                },
              ],
              FAMILY: [
                {
                  target: "ineligible",
                  actions: [
                    {
                      type: "assignVisaType",
                    },
                  ],
                },
              ],
            },
          },
          ineligible: {
            on: {
              CHOOSE_OTHER_VISA: [
                {
                  target: "choose_visas",
                  actions: [
                    {
                      type: "resetVisaType",
                    },
                  ],
                },
              ],
            },
          },
        },
      },
      student_visa_route: {
        initial: "insufficient",
        states: {
          insufficient: {
            on: {
              "LEARN ENGLISH": [
                {
                  target: "New state 1",
                  actions: [],
                },
              ],
              "GET A JOB": [
                {
                  target: "New state 1",
                  actions: [],
                },
              ],
            },
          },
          "New state 1": {},
        },
      },
    },
    on: {
      RESTART: [
        {
          target: ".objective",
          actions: [
            {
              type: "resetGame",
            },
          ],
        },
      ],
    },
  },
  {
    actions: {
      resetGame: assign(({ initialContext }) => {
        return initialContext; // Resets the entire context to its initial state
      }),
      resetVisaType: assign(() => {
        return {
          visaType: null,
        };
      }),
      assignVisaType: assign(({ context, event }) => {
        return {
          visaType: event.type, // Ensure event type is passed correctly
        };
      }),
    },
    actors: {},
    guards: {},
    delays: {},
  },
);