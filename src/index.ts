/// <reference path="../typings/main.d.ts" />

export let suite = (suiteInstance: any, fns: Function[], description: string) => {
    describe(description, () => {
        for (let i = 0; i < fns.length; i++) {
            let fn = fns[i];
            fn();
        }
    });
};

export let test = (testMethod: Function, params: any, testDescription: string) => {
    let description = testDescription + (params ? " " + JSON.stringify(params) : "");
    it(description, () => {
        testMethod();
    });
};