import { useDispatch } from 'react-redux';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { getCurrentTracking } from 'redux/TrackingSlice/operation';
import { deleteTTN } from 'redux/TtnSlice/ttnSlice';
import { TtnNumber, Inner, Item, DeleteBtn } from './TtnItem.styled';

export const TtnItem = ({ id, number, getCurrentTtn }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Item key={id}>
        <Inner>
          <div
            onClick={() => {
              dispatch(getCurrentTracking({ number }));
              getCurrentTtn(number);
            }}
          >
            <TtnNumber>{number}</TtnNumber>
          </div>
          <DeleteBtn type="button" onClick={() => dispatch(deleteTTN(id))}>
            <HighlightOffIcon
              sx={{
                color: 'red',
              }}
            />
          </DeleteBtn>
        </Inner>
      </Item>
    </div>
  );
};
