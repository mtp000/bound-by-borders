import React from "react";
import Header from "./Header";
import './sources.css';

export default function Sources() {
    return (
        <>
            <Header />

            <h2>Dangers of Coyote Smuggling</h2>
            <ul>
                <li>
                    <a
                        href="https://time.com/smugglers-inc/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Dangers of Coyote Smuggling Article 1
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.start.umd.edu/tracking-cartels-infographic-series-major-cartel-operational-zones-mexico"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Tracking Cartels: Infographic Series
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.cbp.gov/newsroom/national-media-release/cbp-launches-digital-ad-campaign-say-no-coyote-warn-migrants-about"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CBP Launches Digital Ad Campaign
                    </a>
                </li>
            </ul>

            <h2>Simulation Research</h2>
            <ul>
                <li>
                    <a
                        href="https://www.statecraftsims.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Statecraft Simulations
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.researchgate.net/publication/233468153_A_Computer_Simulation_Comparing_the_Incentive_Structures_of_Dictatorships_and_Democracies#pf4"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        A Computer Simulation Comparing the Incentive Structures
                    </a>
                </li>
            </ul>
        </>
    );
}

