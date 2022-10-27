import { StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPasswordState";

describe("getLoading test", () => {
    test("should be loading true", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: "123456",
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual("123456");
    });

    test("should be error string", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual("");
    });
});
