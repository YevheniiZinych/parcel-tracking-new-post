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

export const WrapperPost = styled(Wrapper)`
  position: relative;
`;

export const PostItem = styled.li`
  padding: 5px;

  height: 100px;
  width: 800px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  background: rgb(236, 240, 243);
  border-radius: 20px;
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;

  @media (min-width: 320px) and (max-width: 767px) {
    height: 80px;
    width: 300px;

    span {
      font-size: 14px;
    }

    ul {
      display: none;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 130px;
    width: 730px;
  }

  @media (min-width: 1024px) {
    height: 150px;
    width: 900px;
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

export const Address = styled.span`
  @media (min-width: 320px) and (max-width: 767px) {
    position: absolute;
    top: 10px;
    right: 0;
    width: 300px;
    margin: 0;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    position: absolute;
    top: 5px;
    right: 50px;
    width: 600px;
    margin: 0;

    font-size: 17px;
  }

  @media (min-width: 1024px) {
    position: absolute;
    top: 15px;
    right: 80px;
    width: 700px;
    margin: 0;
  }
`;

export const TimeList = styled.ul`
  @media (min-width: 768px) and (max-width: 1023px) {
    position: absolute;
    top: 45px;
    left: 40px;
    font-size: 15px;
  }

  @media (min-width: 1024px) {
    position: absolute;
    top: 60px;
    left: 95px;
    font-size: 17px;
  }
`;

export const Box = styled.div`
  display: flex;

  @media (min-width: 768px) and (max-width: 1023px) {
    border-radius: 4px;
    padding: 5px;
    background: linear-gradient(to right, #8e9eab, #eef2f3);
  }

  @media (min-width: 1024px) {
    width: 680px;
    height: 65px;
    border-radius: 4px;
    padding: 5px;
    background: linear-gradient(to right, #8e9eab, #eef2f3);
  }
  li {
    &:not(:last-child) {
      margin-right: 50px;
    }
  }
`;
