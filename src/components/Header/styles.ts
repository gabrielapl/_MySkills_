import styled from 'styled-components/native';

interface ThemeProps{
  color: boolean;
}

export const Head = styled.View<ThemeProps>`
  width:100%;
  height: 28%;
  background-color: ${({color}) => color ? '#3E3E3E' : '#483C67' };
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 120px;
  border-bottom-right-radius: 120px;
`;

export const Title = styled.Text<ThemeProps>`
  font-size: 32px;
  font-weight: bold;
  color: ${({color}) => color ? '#E1E1E6' : '#67E480' };
`;
