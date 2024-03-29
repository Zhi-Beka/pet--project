import { Country } from "entities/Country/models/types/country";
import { Currency } from "entities/Currency/models/currency";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/testAsyncThunk";

import { updateProfileData } from "./updateProfileData";
import { ValidateProfileError } from "../../types/editableProfileCardSchema";

const data = {
    id: "1",
    username: "admin",
    age: 22,
    country: Country.Ukraine,
    lastname: "ulbi tv",
    first: "asd",
    city: "asf",
    currency: Currency.USD,
};

describe("updateProfileData.test", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test("validate error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, lastName: "" },
            },
        });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
});
