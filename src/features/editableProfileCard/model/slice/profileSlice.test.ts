import { Country } from "entities/Country/models/types/country";
import { Currency } from "entities/Currency/models/currency";

import {
    ProfileSchema,
    ValidateProfileError,
} from "entities/Profile/model/types/profile";
import { profileActions, profileReducer } from "./ProfileSlice";
import { updateProfileData } from "../service/updateProfileData/updateProfileData";

const data = {
    username: "admin",
    age: 22,
    country: Country.Kyrgyzstan,
    lastName: "hjng",
    first: "asd",
    city: "asf",
    currency: Currency.USD,
};

describe("profileReducer.test", () => {
    test("test set readonly", () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadOnly(true)
            )
        ).toEqual({ readonly: true });
    });

    test("test update profile", () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: "123" } };

        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setUpdateProfile({
                    username: "123456",
                })
            )
        ).toEqual({
            form: { username: "123456" },
        });
    });

    test("test cancel edit", () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { username: "" },
        };

        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit())
        ).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test("test update profile service pending", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        };

        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending)
        ).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test("test update profile service fullfiled", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, "")
            )
        ).toEqual({
            isLoading: false,
            validateError: undefined,
            form: data,
            data,
        });
    });
});
