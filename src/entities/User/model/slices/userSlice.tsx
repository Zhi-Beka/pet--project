import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/userTypes';

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
});

export const { actions: userActions } = userSlice;

export const { reducer: userReducer } = userSlice;
