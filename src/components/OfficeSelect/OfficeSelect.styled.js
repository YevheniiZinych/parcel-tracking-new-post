import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  height: 100vh;

  margin: auto;
  padding: 15px;
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 100px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const PostItem = styled.li`
  position: relative;
  padding: 5px;
  /* margin-top: 15px; */

  height: 100px;
  width: 800px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  background: rgb(236, 240, 243);
  border-radius: 20px;
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
`;

export const WrapperPost = styled(Wrapper)`
  justify-content: space-evenly;
`;

export const TimeList = styled.ul`
  position: absolute;
  bottom: 10px;
  left: 80px;
  font-size: 15px;
`;

export const Box = styled.div`
  display: flex;
  width: 150px;
  height: 50px;

  li {
    &:not(:last-child) {
      margin-right: 50px;
    }
  }
`;
