import React, {useEffect, useState} from "react";
import axios from "axios";
import {MockUIInterface} from "./components/MockUIInterface/MockUIInterface";
import {groupsFixture, uiPathFixture, otherFixture} from "./fixtures";
import {customUIResponse, Group, Groups} from "../../data-mocks-server/src/types";
import {apiURL} from "./config";
const App = () => {
    const [uiPath, setUiPath] = useState(uiPathFixture);
    const [groups, setGroups] = useState<Groups>([]);
    const [other, setOther] = useState<Group["scenarios"]>([]);

    const getData = () => {
        axios.get(apiURL).then((res) => {
            const data: customUIResponse["get"] = res.data;
            setGroups(data.groups);
            setOther(data.other);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <button onClick={getData}>Get Data</button>
            <MockUIInterface
                uiPath={uiPath}
                groups={groups}
                setGroups={setGroups}
                other={other}
                setOther={setOther}
            />
            ,
        </>
    );
};

export default App;
