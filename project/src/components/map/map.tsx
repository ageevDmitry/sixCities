import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import {City} from '../../types/city';
import {Offer} from '../../types/offer';
import {UrlMapMarket} from '../../const';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  mapCity?: City;
  offers: Offer[];
  selectedOffer? : Offer;
  propertyOffer? : Offer;
};

const defaultCustomIcon = new Icon({
  iconUrl: UrlMapMarket.Default,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: UrlMapMarket.Current,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const {mapCity, offers, selectedOffer, propertyOffer} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, mapCity);

  useEffect(() => {
    const markers: Marker[] = [];
    let propertyMarker: Marker;

    if (map && mapCity) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        markers.push(marker);

        marker
          .setIcon(
            selectedOffer && offer.id === selectedOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });

      map.setView({
        lat: mapCity.lat,
        lng: mapCity.lng,
      });

      if (propertyOffer) {
        propertyMarker = new Marker({
          lat: propertyOffer.location.latitude,
          lng: propertyOffer.location.longitude,
        });

        propertyMarker
          .setIcon(currentCustomIcon)
          .addTo(map);

        map.setView({
          lat: propertyOffer.location.latitude,
          lng: propertyOffer.location.longitude,
        });
      }
    }

    return () => {
      markers.forEach((marker) => {marker.remove();});

      if (propertyMarker) {
        propertyMarker.remove();
      }
    };

  }, [map, offers, mapCity, selectedOffer, propertyOffer]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
