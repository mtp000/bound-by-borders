import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer"

export default function Form() {
    const [formData, setFormData] = useState({
        immigrantVisas: {},
        nonImmigrantVisas: {},
        understanding: "",
        feedback: ""
    });

    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { value, name, type, checked } = e.target;
        const group = e.target.dataset.group; // Accesses data-group value

        setFormData(prevState => {
            if (type === "checkbox") {
                return {
                    ...prevState,
                    [group]: {
                        ...prevState[group],
                        [name]: checked
                    }
                };
            } else if (type === "radio") {
                return { ...prevState, [name]: value };
            } else {
                return { ...prevState, [name]: value };
            }
        });
    };

    // Validation function
    const validateForm = () => {
        const validationErrors = {};

        // Check if "understanding" question is answered
        if (!formData.understanding) {
            validationErrors.understanding = "Please select an option for question 3.";
        }

        return validationErrors;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log("Form submitted", formData);
            // Route to send survey response to server 

            // Reset form data to clear the form
            setFormData({
                immigrantVisas: {},
                nonImmigrantVisas: {},
                understanding: "",
                feedback: ""
            });

            // Show success message
            alert("Survey successfully submitted!");
        }
    };

    return (
        <>
            <Header />
      
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
                                <input type="checkbox" data-group="immigrantVisas" name="diversity" onChange={handleChange} checked={formData.immigrantVisas.diversity || false} />
                                Diversity (ie lottery)
                            </label>
                            <label>
                                <input type="checkbox" data-group="immigrantVisas" name="familyBased" onChange={handleChange} checked={formData.immigrantVisas.familyBased || false} />
                                Family-based
                            </label>
                            <label>
                                <input type="checkbox" data-group="immigrantVisas" name="employmentBased" onChange={handleChange} checked={formData.immigrantVisas.employmentBased || false} />
                                Employment-based
                            </label>
                            <label>
                                <input type="checkbox" data-group="immigrantVisas" name="refugee" onChange={handleChange} checked={formData.immigrantVisas.refugee || false} />
                                Refugee/ Asylum seekers
                            </label>
                        </li>

                        <li>
                            <p>
                                <u><i>Non-immigrant</i></u> visas permit temporary 
                                stay for specific purposes like work or study. 
                                Which of the following <u><i>non-immigrant</i></u> visa
                                options were you aware of prior to the simulation?
                            </p>
                            <label>
                                <input type="checkbox" name="fiance" data-group="nonImmigrantVisas" onChange={handleChange} checked={formData.nonImmigrantVisas.fiance || false} />
                                Fiancé
                            </label>
                            <label>
                                <input type="checkbox" name="work" data-group="nonImmigrantVisas" onChange={handleChange} checked={formData.nonImmigrantVisas.work || false} />
                                Work
                            </label>
                            <label>
                                <input type="checkbox" name="tourism" data-group="nonImmigrantVisas" onChange={handleChange} checked={formData.nonImmigrantVisas.tourism || false} />
                                Tourism
                            </label>
                            <label>
                                <input type="checkbox" name="student" data-group="nonImmigrantVisas" onChange={handleChange} checked={formData.nonImmigrantVisas.student || false} />
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
                                <input type="radio" name="understanding" value="yes" onChange={handleChange} checked={formData.understanding === "yes"} />
                                Yes, I have learned more about some or all of the visa options.
                            </label><br/>
                            <label>
                                <input type="radio" name="understanding" value="no" onChange={handleChange} checked={formData.understanding === "no"} />
                                No, my understanding of the visa options has not changed.
                            </label><br/>
                            <label>
                                <input type="radio" name="understanding" value="unsure" onChange={handleChange} checked={formData.understanding === "unsure"} />
                                I am unsure if my understanding has changed.
                            </label>
                            {errors.understanding && <p style={{ color: "red" }}>{errors.understanding}</p>}
                        </li>

                        <li>
                            <p>
                                Do you have any additional feedback or
                                suggestions for improving the simulation
                                experience?
                            </p>
                            <label>
                                <textarea name="feedback" placeholder="So much..." rows="7" cols="60" onChange={handleChange} value={formData.feedback} />
                            </label>
                        </li>
                    </ol>

                    <button type="submit">Submit</button>
                </fieldset>
            </form>

            <Footer />
        </>
    );
}
