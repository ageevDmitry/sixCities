import {Route, Routes, Navigate} from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../../pages/private-route/private-route';
import HistoryRouter from '../history-router/history-router';
import {AppRoute} from '../../const';
import browserHistory from '../../browser-history';
import {redirectToRoute} from '../../store/action';
import {useEffect} from 'react';
import {getIsDataError} from '../../store/data-error/selectors';
import {useAppSelector, useAppDispatch} from '../../hooks';

function App(): JSX.Element {

  const isDataError = useAppSelector(getIsDataError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isDataError) {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  }, [isDataError, dispatch]);

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <Favorites/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Property}
          element={<Property/>}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundScreen />}
        />
        <Route
          path={'*'}
          element={<Navigate to={AppRoute.NotFound} replace />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
