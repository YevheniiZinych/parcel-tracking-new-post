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
          textAlign: 'center',
        }}
      >
        Статус посилки
      </h3>
      <ResultItem>
        <li>
          <p>
            <span
              style={{
                color: '#DC143C',
                paddingRight: '5px',
              }}
            >
              Статус доставки:
            </span>
            {result.status}
          </p>
        </li>
        <li>
          <p>
            <span
              style={{
                color: '#DC143C',
                paddingRight: '5px',
              }}
            >
              Відправлено:
            </span>
            {result.sender}
          </p>
        </li>
        <li>
          <p>
            <span
              style={{
                color: '#DC143C',
                paddingRight: '5px',
              }}
            >
              Отримано:
            </span>
            {result.recipient}
          </p>
        </li>
      </ResultItem>
    </ResultContainer>
  );
};
