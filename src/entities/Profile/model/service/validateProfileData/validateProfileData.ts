import { Profile, ValidateProfileError } from "../../types/profile";

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    const { first, lastName, age, country } = profile;

    const validateError: ValidateProfileError[] = [];

    if (!first || !lastName) {
        validateError.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age) {
        validateError.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        validateError.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    return validateError;
};
