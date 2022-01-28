import React from "react";
import {Checkbox} from "../Checkbox";
import {Group, Groups} from "../../../../data-mocks-server/src/types";
import {ScenarioUpdateInfo} from "../ScenarioUpdateInfo/ScenarioUpdateInfo";
import {ModifyScenariosButton} from "../Buttons/ModifyScenariosButton";
import {ResetScenariosButton} from "../Buttons/ResetScenariosButton";
import {cloneDeep} from "lodash";
export const MockUIInterface = ({
    updatedScenarios,
    uiPath,
    groups,
    setGroups,
    other,
    setOther
}: {
    uiPath: string;
    groups: Groups;
    setGroups: React.Dispatch<React.SetStateAction<Groups>>;
    other: Group["scenarios"];
    setOther: React.Dispatch<React.SetStateAction<Group["scenarios"]>>;
    updatedScenarios?: string[];
}) => {
    if (uiPath[uiPath.length - 1] !== "/") {
        uiPath = uiPath + "/";
    }
    console.log(groups, other);

    const handleScenarioSelect = (
        group: Group,
        scenario?: {
            name: string;
            checked: boolean;
        }
    ) => {
        setGroups((prevState) => {
            const newState: Groups = cloneDeep(prevState);
            newState.forEach((listGroup) => {
                if (listGroup.name === group.name) {
                    if (!scenario) listGroup.noneChecked = true;
                    listGroup.scenarios.forEach((listScenario) => {
                        if (scenario && listScenario.name === scenario.name) {
                            listScenario.checked = true;
                            listGroup.noneChecked = false;
                        } else {
                            listScenario.checked = false;
                        }
                    });
                }
            });
            return newState;
        });
    };

    const handleCheck = (name: string) => {
        setOther((prevState) => {
            const newState: Group["scenarios"] = cloneDeep(prevState);
            newState.forEach((item) => {
                if (item.name === name) item.checked = !item.checked;
            });

            return newState;
        });
    };
    return (
        <main>
            <ScenarioUpdateInfo updatedScenarios={updatedScenarios} />
            <CallToActionButtons groups={groups} other={other} />
            <legend>
                <h1>Scenarios</h1>
            </legend>

            <div className="stack0">
                {groups.map((group) => (
                    <fieldset className="stack-3" key={group.name}>
                        <legend>
                            <h2 className="group-title">{group.name}</h2>
                        </legend>
                        <div className="stack-3">
                            <div>
                                <input
                                    type="radio"
                                    id={`none-${group.name}`}
                                    name={group.name}
                                    value=""
                                    checked={group.noneChecked}
                                    onChange={() => handleScenarioSelect(group)}
                                />
                                <label htmlFor={`none-${group.name}`}>
                                    No &rsquo;{group.name}&rsquo; scenario
                                </label>
                            </div>
                            {group.scenarios.map((scenario) => (
                                <div key={scenario.name}>
                                    <input
                                        type="radio"
                                        id={scenario.name}
                                        name={group.name}
                                        value={scenario.name}
                                        checked={scenario.checked}
                                        onChange={() => handleScenarioSelect(group, scenario)}
                                    />
                                    <label htmlFor={scenario.name}>{scenario.name}</label>
                                </div>
                            ))}
                        </div>
                    </fieldset>
                ))}
                {!other.length ? null : (
                    <fieldset className="stack-3">
                        <legend>
                            <h2>Other</h2>
                        </legend>
                        <div className="stack-3">
                            {other.map((scenario) => (
                                <Checkbox
                                    key={scenario.name}
                                    name={scenario.name}
                                    checked={scenario.checked}
                                    handleCheck={handleCheck}
                                />
                            ))}
                        </div>
                    </fieldset>
                )}
                <CallToActionButtons groups={groups} other={other} />
            </div>
        </main>
    );
};

function CallToActionButtons({groups, other}: {groups: Groups; other: Group["scenarios"]}) {
    return (
        <div className="button-group">
            <div>
                <ModifyScenariosButton groups={groups} other={other} />
                <ResetScenariosButton />
            </div>
        </div>
    );
}
