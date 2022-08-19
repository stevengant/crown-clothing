import { createSelector } from "reselect";

import { UserState } from "./user.reducer";

export const selectUserReducer = (state): UserState => state.user;

export const selectCurrrentUser = createSelector(
    selectUserReducer,
    (user) => user.currentUser
);