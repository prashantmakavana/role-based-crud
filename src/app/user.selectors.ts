import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './user.reducer'

const getUserFeatureState = createFeatureSelector<State>('user');

export const getUsers = createSelector(
    getUserFeatureState,
    state => state.users
)

export const getError = createSelector(
    getUserFeatureState,
    state => state.error
)