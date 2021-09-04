import React from 'react';

const Project = (props) => {
    return (
        <div>
            <ol>
                {props.projects.map((item) => (
                    <li key={item.project}><b>Name:</b> {item.project},
                    <b>Start Date:</b> {item.startDate},
                    <b>End Date:</b> {item.endDate}, <b>Cost:</b> {item.value}</li>
                ))}
            </ol>
        </div>
    );
};

export default Project;