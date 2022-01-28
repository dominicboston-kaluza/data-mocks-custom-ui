import axios from "axios";
import React from "react";
import {Group, Groups} from "../../../../data-mocks-server/src/types";
import {apiURL} from "../../config";
type ModifyScenariosButton = {
    groups: Groups;
    other: Group["scenarios"];
};
export const ModifyScenariosButton = ({groups, other}: ModifyScenariosButton) => {
    const handleClick = () => {
        console.log("fetching");
        const activeScenarios = [];
        groups.forEach((group) => {
            group.scenarios.forEach((scenario) => {
                if (scenario.checked) activeScenarios.push(scenario.name);
            });
        });
        other.forEach((scenario) => {
            if (scenario.checked) activeScenarios.push(scenario.name);
        });

        axios.post(apiURL, {updatedScenarios: activeScenarios}).then(() => {
            console.log("updated");
        });
    };
    return (
        <button name="button" onClick={handleClick}>
            Modify scenarios
        </button>
    );
};
