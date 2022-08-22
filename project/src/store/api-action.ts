import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {Offer, FavoritesTypeOffer} from '../types/offer';
import {Review, UserReview} from '../types/review.js';
import {APIRoute} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'data/fetchOffers',
    async (_arg, {dispatch, extra: api}) => {
      const {data} = await api.get<Offer[]>(APIRoute.Offers);
      return data;
    },
  );

export const fetchPropertyOffersAction = createAsyncThunk<void, string, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'data/fetchPropertyOffer',
    async (id, {dispatch, extra: api}) => {
      const {data} = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
      return data;
    },
  );

export const fetchNearbyOffersAction = createAsyncThunk<void, string, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'data/fetchNearbyOffer',
    async (id, {dispatch, extra: api}) => {
      const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
      return data;
    },
  );

export const loadReviewsAction = createAsyncThunk<void, string, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'data/fetchReviews',
    async (id, {dispatch, extra: api}) => {
      const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
      return data;
    },
  );

export const sendNewReviewAction = createAsyncThunk<void, UserReview, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'data/sendReview',
    async (userReview, {dispatch, extra: api}) => {
      const {data} = await api.post<Review[]>(`${APIRoute.Comments}/${userReview.propertyOfferId}`, userReview.newComment);
      return data;
    },
  );

export const fetchFavoriteOffersAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'data/fetchFavoriteOffers',
    async (_arg, {dispatch, extra: api}) => {
      const {data} = await api.get<Offer[]>(APIRoute.Favorite);
      return data;
    },
  );

export const changeFavoriteStatusAction = createAsyncThunk<void, FavoritesTypeOffer, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/changeFavoriteStatusOffer',
  async (changedOffer, {dispatch, extra: api}) => {
    const {data} = await api.post<Offer>(`${APIRoute.Favorite}/${changedOffer.id}/${changedOffer.favoriteStatus}`);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'user/checkAuthAction',
    async (_arg, {dispatch, extra: api}) => {
      const {data} = await api.get<UserData>(APIRoute.Login);
      return data;
    },
  );

export const loginAction = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'user/login',
    async ({login: email, password}, {dispatch, extra: api}) => {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      return data;
    },
  );

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'user/logout',
    async (_arg, {dispatch, extra: api}) => {
      await api.delete(APIRoute.Logout);
    },
  );
