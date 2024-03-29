import { Country } from "entities/Country/models/types/country";
import { Currency } from "entities/Currency/models/currency";

import { validateProfileData } from "./validateProfileData";
import { ValidateProfileError } from "../../types/editableProfileCardSchema";

describe("validateProfileData.test", () => {
    const data = {
        username: "dev",
        first: "Jiba",
        lastName: "AAA",
        age: 22,
        country: Country.Armenia,
        currency: Currency.USD,
        city: "rio",
    };

    test("success", async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test("without first and last name", async () => {
        const result = validateProfileData({
            ...data,
            first: "",
            lastName: "",
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test("incorrect age", async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    // test("incorrect country", async () => {
    //     const result = validateProfileData({ ...data, country: undefined });

    //     expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    // });

    test("incorrect all", async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
