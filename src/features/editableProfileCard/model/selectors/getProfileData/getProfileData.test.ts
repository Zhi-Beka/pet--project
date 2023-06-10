import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country/models/types/country";
import { Currency } from "entities/Currency/models/currency";
import { getProfileData } from "./getProfileData";

describe("getProfileData.test", () => {
    const data = {
        username: "dev",
        first: "Jiba",
        lastName: "AAA",
        age: 22,
        country: Country.Armenia,
        currency: Currency.USD,
        city: "rio",
    };

    test("should be data", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
