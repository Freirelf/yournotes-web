import styled from 'styled-components'
import BackgroundSignUp from '../../assets/images/backgroundSignUp.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  width: 45%;
  padding: 0 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({theme}) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 40px;
    color: ${({theme}) => theme.COLORS.ORANGE};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundSignUp}) no-repeat left bottom;
`;