import { Currency } from "entities/Currency/models/currency";
import { Country } from "../../../Country/models/types/country";

export interface Profile {
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
}
