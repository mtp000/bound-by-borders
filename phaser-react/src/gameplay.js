import { createMachine } from "xstate";

export const gameplayMachine = createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5RQIYFswAcA2KCeAdAMYoAuK2espA+mCgE6kAWAxAMIDyAcgCoCS3AKoBRANoAGALqJQmAPawAlqSXyAdrJAAPRAEYArAGYA7AQAsJgwCYJdiQE4T5wwBoQeRLb0ETRgwBsJtZOABwm4Q4AvlHuqBg4+MRkFFS0RPIAruqkDHgcPALC4tJaCsqqGlq6CHqhRqG+dQGhEuZGRg5Geibungjevv5BIRFj0bEg8Vi4hPIARgBWYESqAG5grPwAMtsiAOIAgts0nAAKAjw0AMoie+y8IgAikjJIIOUqaprvNXUNTVCLTaHS6PT6iFCPiM1hCeiM5gcoQMenaehicXQMySC2WqyUG1YeyOJ3Ol24NzuIgez1eZUUXyqvy81j0AQIAUMrShVkMBghA0cBAkoXMAW6emspnCkoxUyxiUISmw2DAqGwNHkmEq6gKfEEojp70+OuqXgk1l8zj81kRJi6iIF5nMlsCej0Dg9nQ6BgkATl00VBGVqvVmu131YACURNdeIco7wjXIGabmYLLSZrTC7Q6HAKYZbUaKcwYHH7DAGFbNiIpaPIAGY0DJ4eSkTZcfXFZMfVPfM0IRFGAg2Bxg+qheo9XoeRDO12cj1err+P1VhI1sDqLJQZg0NAaMD5OMJpOlY19pmgGoRBwEOHi+HzsFOl0jxeeror33+yaBmsQPgsA0JgKCwLAepFIa54phU-bpnoEiGMKSKelYX7OK+C7up+3qrr+mIbkkEBwGATCQQaJRvLBjI-Ne+jWAYjR2OW4p+pOoTWAEWHvjhy4+muf7VsR9AsBR3Ywb2cFXjo+jGGYlg2PYjjOG4s6Dm+bpLl+AkEfKRGEA2KDKpAmpLCs6ybDGJ6Jj2JrwfRtQToCwLtN64LqfOvHaXhP4xJM24kfA7z-vg9LSXRskIAAtNx6mxcKylJcpJjrtihAkOQlDUHQjAsOFtEDvCoR3iYAQSP4nElSYqICoM5ZGAELh+OYfoGOYaVBplqQ5Rk2S5P0NFpo5bLOPeXGIjYRgSAYfh1UhBANU1PQIm15gGJ1Na4hZBJgAVw1RaydgEJOARNQYs3dA45jzXejGMWOkR+mKm1JCGaoUOGB32TJNQugKJUneK1hZpyATWCVnGvRldaak2LZtntF4RQOoIjlxFpZnUZXikYPHBJ65UBNdnJcUY0MEFuO57ge6hHvtDlRWx95QrCJgzQ4Z0dPjD5+iTkobUJBkEIBVAgWBwVDYzNQleY96E9NEjBMr-KeW+BNsnzYoCxTQVkaQDO-fohg+MiFqSlC5itO1POE1rpOC4R6Ui6JzCG5FfwuBII4NP4rWwi0DjWLbmvE9rZMU0ZJkQGZeKWe7RVBHLAeTVKM1zWrma82HDsUxkaA4GA7Yx9t+IbAn6a2rNwoRBVQeKWK83MTNyKzS6Y7BKE-lREAA */
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
                    target: "objective",
                },
            },
        },
        objective: { //decision node
            on: {
                ILLEGAL_OPTION_SELECTED: {
                    target: "find_coyote",
                    // cond: "isSelectedIllegalOption",
                    // actions: "assignDataToContext",
                },
                LEGAL_OPTION_SELECTED: {
                    target: "choose_visas",
                },
            },
        },
        find_coyote: { 
            on: {
                CONTINUE: { // pseudo decision node
                    target: "cost_of_coyote",
                },
                // LEGAL_OPTION_SELECTED: {
                //     target: "decision_B1",
                // }
                RESTART: { // restart game
                    target: "objective",
                },
            },
        },
        cost_of_coyote: { // psuedo decision node
            on: {
                CONTINUE: {
                    target: "enough_money",
                }
            }
        },
        enough_money: {
            on: {
                START: {
                    target: "days_pass",
                },
            },
        },
        days_pass: {
            on: {
                CONTINUE: {
                    target: "desert",
                },
            },
        },
        desert: {
            on: {
                CONTINUE: {
                    target: "death",
                },
            },
        },
        death: {
            on: {
                CONTINUE: {
                    target: "failed_objective",
                },
            },
        },
        failed_objective: {
            on: {
                RESTART: {
                    target: "objective",
                },
            },
        },
        choose_visas: {
            on: {
                DIVERSITY: {
                    target: "diversity",
                },
                FIANCE: {
                    target: "fiance",
                },
                FAMILY: {
                    target: "family",
                }, 
                STUDENT: {
                    target: "student",
                },
            },
        },
        diversity : {
            on: {
                RETRY : {
                    target: "choose_visas",
                }
            }
         },
         fiance : {
            on: {
                RETRY : {
                    target: "choose_visas",
                }
            }
         },
         family : {
            on: {
                RETRY : {
                    target: "choose_visas",
                }
            }
         },
         student : {
            on: {
                APPLY : {
                    target: "university",
                }
            }
         },
        // on: {
        //     RESTART: {
        //         target: "completed_objective",
        //     },
        // },
        completed_objective: {
            type: "final",
        }
    },
});
