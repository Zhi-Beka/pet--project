import { Country } from "entities/Country/models/types/country";
import { Currency } from "entities/Currency/models/currency";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/testAsyncThunk";
import { fetchProfileData } from "./fetchProfileData";

describe("fetchProfileData.test", () => {
    test("success fetch data", async () => {
        const data = {
            username: "dev",
            first: "Jiba",
            lastName: "AAA",
            age: 22,
            country: Country.Armenia,
            currency: Currency.USD,
            city: "rio",
        };

        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("error", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
    });
});
