import React, { Fragment, useState } from 'react';

import Project from './Project';
import Form from './Form';

const DATA = [
    {
        project: "Project_1",
        startDate: "12/13/2021",
        endDate: "12/30/2021",
        value: "20"
    },
    {
        project: "Project_2",
        startDate: "1/3/2022",
        endDate: "2/4/2022",
        value: "30"
    },
    {
        project: "Project_3",
        startDate: "11/13/2021",
        endDate: "12/30/2021",
        value: "50"
    }
]

const Main = () => {
    const [ enableCreate, setEnableCreate ] = useState(false);
    const [ enableView, setEnableView ] = useState(false);

    const viewHandler = () => {
        setEnableView(!enableView);
        setEnableCreate(false);
    };

    const createHandler = () => {
        setEnableCreate(!enableCreate);
        setEnableView(false);
    };

    const addHandler = (name, sDate, eDate, cost) => {
        DATA.push({
            project: name,
            startDate: sDate,
            endDate: eDate,
            value: cost
        });
        setEnableCreate(false);
        setEnableView(true);
    }

    return (
        <Fragment>
            <button onClick={createHandler}>Create</button>
            <button onClick={viewHandler}>View</button>

            {!enableView && !enableCreate && <p>Click on View to display project list</p>}
            {enableView && !enableCreate && <Project projects={DATA} />}
            {enableCreate && <Form add={addHandler}/>}
        </Fragment>
    );
};

export default Main;