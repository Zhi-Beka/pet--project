import { StateSchema } from "app/providers/StoreProvider";
import { ValidateProfileError } from "entities/Profile/model/types/profile";
import { getProfileValidateError } from "./getProfileValidateError";

describe("getProfileValidateErrors.test", () => {
    test("should work with filled state", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_AGE,
                ],
            },
        };
        expect(getProfileValidateError(state as StateSchema)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateError(state as StateSchema)).toEqual(
            undefined
        );
    });
});
