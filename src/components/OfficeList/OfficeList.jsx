import {
  PostItem,
  WrapperPost,
  Address,
  TimeList,
  Box,
} from './OfficeList.styled';

export const OfficeList = ({ office }) => {
  return (
    <>
      {office?.length > 0 &&
        office.map(
          ({
            Number,
            Description,
            Reception: {
              Monday,
              Saturday,
              Sunday,
              Thursday,
              Tuesday,
              Wednesday,
              Friday,
            },
          }) => {
            return (
              <PostItem key={Number}>
                <WrapperPost>
                  <Address>{Description}</Address>
                  <TimeList>
                    <Box>
                      <li>Пн: {Monday} </li>
                      <li>Вт: {Tuesday}</li>
                      <li>Ср: {Wednesday}</li>
                      <li>Чт: {Thursday}</li>
                      <li>Пт: {Friday}</li>
                      <li>Сб: {Saturday}</li>
                      <li>Нд: {Sunday}</li>
                    </Box>
                  </TimeList>
                </WrapperPost>
              </PostItem>
            );
          }
        )}
    </>
  );
};
