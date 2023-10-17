import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: calc(100vh - 64px);
  width: 100vw;
  background-color: #ebf4fc;
  background-image: url('/img/MainPageBgLeft.png'),
    url('/img/MainPageBgRight.png');
  background-size: 320px, 1083px;
  background-position: bottom left, bottom right;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  display: flex;
  padding: 56px 356px 0px 204px;
  width: 100%;
  flex-direction: column;
`;

export const Tab = styled.div`
  width: 880px;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-bottom: 24px;
  margin-top: 32px;
`;
