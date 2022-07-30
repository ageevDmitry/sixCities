import Header from '../../components/header/header';
import ReviewForm from '../../components/review-form/review-form';
import ReviewList from '../../components/review-list/review-list';
import PlaceCardList from '../../components/place-card-list/place-card-list';
// import Map from '../../components/map/map';
import {PlaceCardType} from '../../const';
// import {MAP_CITY} from '../../mocks/map';
import {Offer} from '../../types/offer';
import {Review} from '../../types/review';

type PropertyProps = {
  offers: Offer[];
  reviews: Review[];
  }

function Property ({offers, reviews}: PropertyProps): JSX.Element {

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <div className="property__image-wrapper">
                <img
                  className="property__image"
                  src="img/room.jpg"
                  alt="Figure studio"
                />
              </div>
              <div className="property__image-wrapper">
                <img
                  className="property__image"
                  src="img/apartment-01.jpg"
                  alt="Figure studio"
                />
              </div>
              <div className="property__image-wrapper">
                <img
                  className="property__image"
                  src="img/apartment-02.jpg"
                  alt="Figure studio"
                />
              </div>
              <div className="property__image-wrapper">
                <img
                  className="property__image"
                  src="img/apartment-03.jpg"
                  alt="Figure studio"
                />
              </div>
              <div className="property__image-wrapper">
                <img
                  className="property__image"
                  src="img/studio-01.jpg"
                  alt="Figure studio"
                />
              </div>
              <div className="property__image-wrapper">
                <img
                  className="property__image"
                  src="img/apartment-01.jpg"
                  alt="Figure studio"
                />
              </div>
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
              Beautiful &amp; luxurious studio at great location
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: '80%' }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">4.8</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
              Apartment
                </li>
                <li className="property__feature property__feature--bedrooms">
              3 Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
              Max 4 adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€120</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&#39;s inside</h2>
                <ul className="property__inside-list">
                  <li className="property__inside-item">Wi-Fi</li>
                  <li className="property__inside-item">Washing machine</li>
                  <li className="property__inside-item">Towels</li>
                  <li className="property__inside-item">Heating</li>
                  <li className="property__inside-item">Coffee machine</li>
                  <li className="property__inside-item">Baby seat</li>
                  <li className="property__inside-item">Kitchen</li>
                  <li className="property__inside-item">Dishwasher</li>
                  <li className="property__inside-item">Cabel TV</li>
                  <li className="property__inside-item">Fridge</li>
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src="img/avatar-angelina.jpg"
                      alt="Host avatar"
                      width={74}
                      height={74}
                    />
                  </div>
                  <span className="property__user-name">Angelina</span>
                  <span className="property__user-status">Pro</span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                A quiet cozy and picturesque that hides behind a a river by the
                unique lightness of Amsterdam. The building is green and from
                18th century.
                  </p>
                  <p className="property__text">
                An independent House, strategically located between Rembrand
                Square and National Opera, but where the bustle of the city
                comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
              Reviews · <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewList reviews = {reviews}/>
                <ReviewForm/>
              </section>
            </div>
          </div>
          <section className="property__map map">
            {/* <Map city = {MAP_CITY.Amsterdam} offers = {offers}/> */}
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
          Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <PlaceCardList
                offers = {offers}
                typeComponent = {PlaceCardType.NearPlaces}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Property;


