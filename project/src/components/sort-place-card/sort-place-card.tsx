import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeSortType} from '../../store/offers-ui/offers-ui';
import {SORT_LIST} from '../../const';
import {useState} from 'react';
import {getSortType} from '../../store/offers-ui/selectors';

function SortPlaceCard ():JSX.Element {

  const [isSortList, toggleSortList] = useState(false);

  const dispatch = useAppDispatch();
  const sortType = useAppSelector(getSortType);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by
      </span>

      <span className="places__sorting-type" tabIndex={0}
        onClick={() => {
          toggleSortList(!isSortList);
        }}
      >
        {sortType.title}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      {isSortList &&
      <ul className="places__options places__options--custom places__options--opened">
        {SORT_LIST.map((item) => (
          <li key = {item.title} className={`places__option ${item.type === sortType.type ? 'places__option--active' : ''}`} tabIndex={0}
            onClick={() => {
              dispatch(changeSortType({sortType: item}));
              toggleSortList(!isSortList);
            }}
          >
            {item.title}
          </li>
        ))}
      </ul>}
    </form>
  );
}

export default SortPlaceCard;
