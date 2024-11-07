import React, { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({
        immigrantVisas: {},
        nonImmigrantVisas: {},
        understanding: "",
        feedback: ""
    });

    //handle input changes
    const handleChange = (e) => {
        const { value, name, type, checked } = e.target;
        const group = e.target.dataset.group; // Accesses data-group value

        setFormData(prevState => {
            if (type === "checkbox") {
                return {
                    ...prevState,
                    [group]: {
                        ...prevState[group],
                        [e.target.name]: checked
                    }
                };
            } else if (type === "radio") {
                return { ...prevState, [name]: value };
            } else {
                return { ...prevState, [name] : value };
            }
        });
    };

    console.log(formData);

    //handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted");
        //route to send survey response to server 
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Feedback Survey</legend>

                    <ol>
                        <li>
                            <p>
                            <span style={{ textDecoration: 'underline', fontStyle: 'italic' }}>Immigrant</span> visas
                            allows a person to live and work in the U.S. indefinitely. Which of the following <span 
                            style={{ textDecoration: 'underline', fontStyle: 'italic' }}>immigrant</span> visa
                             options were you aware of prior to the simulation?
                            </p>
                            <label>
                                <input type="checkbox" data-group="immigrantVisas" name="diversity"  onChange={handleChange}/>
                                Divserity (ie lottery)
                            </label>
                            <label>
                                <input type="checkbox" data-group="immigrantVisas" name="familyBased" onChange={handleChange} />
                                Family-based
                            </label>

                            <label>
                                <input type="checkbox" data-group="immigrantVisas" value="employmentBased" onChange={handleChange}/>
                                Employment-based
                            </label>
                            <label>
                                <input type="checkbox" data-group="immigrantVisas" name="refugee" onChange={handleChange}/>
                                Refugee/ Asylum seekers
                            </label>
                        </li>

                        <li>
                            <p>
                                <u><i>Non-immigrant</i></u> visas permits temporary 
                                stay for specific purposes like work or study. 
                                Which of the following <u><i>non-immigrant</i></u> visas
                                git options were you aware of prior the simulation?
                            </p>
                            <label>
                                <input type="checkbox" name="fiance" data-group="nonImmigrantVisas" onChange={handleChange}/>
                                Fiancé
                            </label>
                            <label>
                                <input type="checkbox" name="work" data-group="nonImmigrantVisas" onChange={handleChange}/>
                                Work
                            </label>

                            <label>
                                <input type="checkbox" name="tourism" data-group="nonImmigrantVisas" onChange={handleChange}/>
                                Tourism
                            </label>
                            <label>
                                <input type="checkbox" name="student" data-group="nonImmigrantVisas" onChange={handleChange}/>
                                Student
                            </label>
                        </li>

                        <li>
                            <p>
                                Based on the simulation you just played, do you
                                feel that you have gained a better understanding
                                of the visa options mentioned above?
                            </p>
                            <label>
                                <input type="radio" name="understanding" value="yes" onChange={handleChange}/>
                                Yes, I have learned more about some or all of the visa options.
                            </label><br/>
                            <label>
                                <input type="radio" name="understanding" value="no" onChange={handleChange}/>
                                No, my understanding of the visa options has not changes.
                            </label><br/>
                            <label>
                                <input type="radio" name="understanding" value="unsure" onChange={handleChange}/>
                                I am unsure if my understanding has changed.
                            </label>
                        </li>

                        <li>
                            <p>
                                Do you have any additional feedback or
                                suggestions for improving the simulation
                                experience?
                            </p>
                            <label>
                                <textarea rows="7" cols="60" name="feedback" onChange={handleChange}/>
                            </label>
                        </li>
                    </ol>

                <button type="submit">Submit</button>
                </fieldset>
            </form>
        </>
    );
}
