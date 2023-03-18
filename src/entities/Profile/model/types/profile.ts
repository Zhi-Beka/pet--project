import { Currency } from "entities/Currency/models/currency";
import { Country } from "../../../Country/models/types/country";

export const enum ValidateProfileError {
    INCORRECT_USER_DATA = "INCORRECT_USER_DATA",
    INCORRECT_COUNTRY = "INCORRECT_COUNTRY",
    INCORRECT_AGE = "INCORRECT_AGE",
    NO_DATA = "NO_DATA",
    SERVER_ERROR = "SERVER_ERROR",
}

export interface Profile {
    id?: string;
    first?: string;
    lastName?: string;
    age?: number | string;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateError?: ValidateProfileError[];
}
