import React from "react";

type Checkbox = {
    name: string;
    checked: boolean;
    handleCheck: (name: string) => void;
};
export const Checkbox = ({name, checked, handleCheck}: Checkbox) => {
    return (
        <div key={name}>
            <input
                type="checkbox"
                id={name}
                name="scenarios"
                value={name}
                defaultChecked={checked}
                onClick={() => handleCheck(name)}
            />
            <label htmlFor={name}>{name}</label>
        </div>
    );
};
