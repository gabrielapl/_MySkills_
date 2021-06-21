import styled from 'styled-components/native';

interface ThemeProps{
  color: boolean;
}


export const Container = styled.View<ThemeProps>`
  flex:1;
  background-color: ${({color}) => color ? '#262626' : '#191622' };
  
`;
