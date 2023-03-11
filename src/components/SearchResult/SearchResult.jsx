import { useSelector } from 'react-redux';
import { getParcel } from 'redux/TrackingSlice/selectors';
import { ResultContainer, ResultItem } from './SearchResult.styled';

export const SearchResult = () => {
  const { items } = useSelector(getParcel);

  const result = items.reduce((acc, item) => {
    acc = {
      status: item.Status,
      sender: item.WarehouseSender,
      recipient: item.WarehouseRecipient,
    };
    return acc;
  }, {});

  return (
    <ResultContainer>
      <h3
        style={{
          color: '#DC143C',
        }}
      >
        Search Result
      </h3>
      <ResultItem>
        <li>
          <p>Статус доставки: {result.status} </p>
        </li>
        <li>
          <p>Відправлено: {result.sender} </p>
        </li>
        <li>
          <p>Отримано: {result.recipient} </p>
        </li>
      </ResultItem>
    </ResultContainer>
  );
};
