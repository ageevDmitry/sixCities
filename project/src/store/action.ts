import {createAction} from '@reduxjs/toolkit';
import {UserData} from '../types/user-data';
import {Offer} from '../types/offer';
import {Review} from '../types/review';
import {SortType} from '../types/sort-type';
import {AppRoute, AuthorizationStatus} from '../const';

export const changeFilterType = createAction<{city: string}>('city/change');

export const filterCity = createAction('city/filter');

export const changeSortType = createAction<{sortType: SortType}>('offers/changeSortType');

export const sortOffers = createAction('offers/sortOffers');

export const selectOffer = createAction<{selectedOfferId: number}>('offers/hoverOffers');

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const loadUserData = createAction<UserData>('data/loadUserData');

export const loadPropertyOffer = createAction<Offer>('data/loadPropertyOffer');

export const loadNearbyOffers = createAction<Offer[]>('data/loadNearbyOffers');

export const loadReviews = createAction<Review[]>('data/loadReviews');

export const sendNewReview = createAction<Review[]>('data/sendNewReview');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('data/setError');

export const redirectToRoute = createAction<AppRoute>('user/redirectToRoute');
