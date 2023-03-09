import { useSelector } from 'react-redux';

import { getParcel } from 'redux/TrackingSlice/selectors';

export const SearchResult = () => {
  const { items } = useSelector(getParcel);

  return (
    <div>
      <h3>Search Result</h3>
      <ul>
        {items.length > 0 &&
          items.map(({ Status, WarehouseRecipient, WarehouseSender }) => {
            return (
              <>
                <li key={items.Status}>
                  <p>Статус доставки: {Status}</p>
                </li>
                <li key={items.WarehouseSender}>
                  <p>Відправлено: {WarehouseSender} </p>
                </li>
                <li key={items.WarehouseRecipient}>
                  <p>Отримано: {WarehouseRecipient} </p>
                </li>
              </>
            );
          })}
      </ul>
    </div>
  );
};
