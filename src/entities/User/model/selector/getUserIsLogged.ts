import { StateSchema } from "app/providers/StoreProvider";

export const getUserIsLogged = (state: StateSchema) => {
    return state.user.isLogged;
};
