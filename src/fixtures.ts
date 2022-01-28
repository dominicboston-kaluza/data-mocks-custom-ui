import {Groups} from "../../data-mocks-server/src/types";

export type Scenarios = Array<{
    name: string;
    checked: boolean;
}>;

export const uiPathFixture = "/scenarios/";
export const groupsFixture: Groups = [
    {
        noneChecked: true,
        name: "cheese",
        scenarios: [
            {name: "blueCheese", checked: false},
            {name: "redCheese", checked: false}
        ]
    },
    {
        noneChecked: true,
        name: "bread",
        scenarios: [
            {name: "tigerBread", checked: false},
            {name: "baguette", checked: false}
        ]
    }
];
export const otherFixture: Scenarios = [
    {name: "fish", checked: false},
    {name: "water", checked: false}
];
