import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginError } from "./getLoginErrorState";

describe("getLoginError.test", () => {
    test("should be error string", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: "error",
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual("error");
    });

    test("should be error string", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
