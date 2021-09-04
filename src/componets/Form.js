import React, { useRef, useState } from 'react';

const Form = (props) => {
    const nameRef = useRef('');
    const startDateRef = useRef('');
    const endDateRef = useRef('');
    const costRef = useRef('');

    const [ error, setError ] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();

        console.log(nameRef.current.value, startDateRef.current.value, endDateRef.current.value, costRef.current.value);

        if (nameRef.current.value.trim().length > 0 && 
        startDateRef.current.value.trim().length > 0 && 
        endDateRef.current.value.trim().length > 0 && 
        costRef.current.value.trim().length > 0)  {
            props.add(
                nameRef.current.value,
                startDateRef.current.value,
                endDateRef.current.value,
                costRef.current.value
            );
            
        } else {
            setError(true);
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <p>Project Name: <input type="text" ref={nameRef} /></p>
            <p>Start Date: <input type="text" ref={startDateRef} /></p>
            <p>End Date: <input type="text" ref={endDateRef} /></p>
            <p>Cost: <input type="text" ref={costRef} /></p>
            <button type="submit">Add Project</button>
            {error && <p style={{color: 'red'}}>Input fields cannot be empty.</p>}
        </form>
    );
};

export default Form;