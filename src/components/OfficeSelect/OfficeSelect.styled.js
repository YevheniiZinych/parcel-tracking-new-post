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
  text-align: center;
  margin-top: 10px;

  @media (min-width: 320px) and (max-width: 767px) {
  }
`;

export const PostNumber = styled.span`
  position: absolute;
  top: 15px;
  left: 0;

  @media (min-width: 768px) and (max-width: 1023px) {
    position: absolute;
    top: 5px;
    left: 50px;
  }

  @media (min-width: 1024px) {
    position: absolute;
    top: 15px;
    left: 100px;
  }
`;
