import React from "react";
export const ScenarioUpdateInfo = ({updatedScenarios}: {updatedScenarios?: string[]}) => {
    if (!updatedScenarios) {
        return null;
    }

    if (updatedScenarios.length === 0) {
        return <>All scenarios removed.</>;
    }

    return (
        <>
            Updated to the following scenarios:
            <ul>
                {updatedScenarios.map((scenario) => (
                    <li key={scenario}>{scenario}</li>
                ))}
            </ul>
        </>
    );
};
