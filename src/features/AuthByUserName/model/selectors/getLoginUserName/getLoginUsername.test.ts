import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUserName } from "./getLoginUsername";

describe("getLoading test", () => {
    test("should be loading true", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: "admin",
            },
        };
        expect(getLoginUserName(state as StateSchema)).toEqual("admin");
    });

    test("should be error string", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUserName(state as StateSchema)).toEqual("");
    });
});
