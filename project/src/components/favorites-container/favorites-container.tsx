import PlaceCardList from '../place-card-list/place-card-list';
import {CITIES, PlaceCardType} from '../../const';
import {useAppSelector} from '../../hooks';
import {getFavoriteOffers, getIsDataLoaded} from '../../store/offers-data/selectors';
import {Offer} from '../../types/offer';
import FavoritesContainerEmpty from '../../components/favorities-container-empty/favorities-container-empty';
import LoadingScreen from '../loading-screen/loading-screen';

function FavoritesContainer (): JSX.Element {

  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const isDataLoaded = useAppSelector(getIsDataLoaded);

  if (isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  if (!favoriteOffers) {
    return <FavoritesContainerEmpty/>;
  }

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {CITIES.map((city) => {

          const filteredOffers = favoriteOffers.filter((item: Offer) => item.city.name === city);

          return (
            (filteredOffers.length > 0) ?
              <li key = {city} className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/">
                      <span>{city}</span>
                    </a>
                  </div>
                </div>
                <PlaceCardList
                  offers = {filteredOffers}
                  typeComponent = {PlaceCardType.Favorites}
                />
              </li> : null
          );
        })}
      </ul>
    </section>
  );
}

export default FavoritesContainer;
