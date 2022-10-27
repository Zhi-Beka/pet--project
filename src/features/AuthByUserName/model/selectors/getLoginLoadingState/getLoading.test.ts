import { StateSchema } from "app/providers/StoreProvider";
import { getLoginIsLoading } from "./getLoadingState";

describe("getLoading test", () => {
    test("should be loading true", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });

    test("should be error string", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
