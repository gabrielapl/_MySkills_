import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';

interface ThemeProps{
  color: boolean;
}

export const InputArea = styled.View`
  align-items: center;
  margin-top: -40px;
  height: 56px;

`;

export const TextInput = styled.TextInput<ThemeProps>`
  flex:1;
  background-color: ${({color}) => color ? '#303030' : '#34313D' };
  color: ${({color}) => color ? '#E1E1E6' : '#67E480' };
  width: 70%;
  border-radius: 40px;
  text-align: center;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  margin: 15px 0px;
`;
export const Button = styled.TouchableOpacity<ThemeProps>`
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 35%;
  border-radius: 40px;
  background-color: ${({color}) => color ? '#181818' : 'rgba(68,71,90,1)' };
  flex-direction: row;
`;
export const ButtonIcon = styled(Feather)`
  font-size: 22px;
  color: ${({color}) => color ? '#E1E1E6' : '#67E480' };
  
`;
export const ButtonTitle = styled.Text<ThemeProps>`
  font-size: 18px;
  font-weight: bold;
  color: ${({color}) => color ? '#E1E1E6' : '#67E480' };
`;

export const List = styled.View`
  flex:1%;
  border-top-right-radius: 120px;
  border-top-left-radius: 120px;
  background-color: #988BC7;
`;

//E1E1E6 Text bg 181818 303030 Input