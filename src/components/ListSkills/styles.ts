import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { skillData } from '.'

interface ThemeProps{
  color: boolean;
}

export const Skills = styled(FlatList as new () => FlatList )`
  
`;
export const Container = styled.View`
  align-items: center;
`;
export const ButtonSkills = styled.TouchableOpacity<ThemeProps>`
  align-items: center;
  width: 60%;
  background-color: ${({color}) => color ? '#181818' : 'rgba(68,71,90,1)' };
  border-radius: 15px;
  padding: 10px 16px;
  margin-bottom: 15px;
`;

export const TextSkills = styled.Text<ThemeProps>`
  font-size: 18px;
  font-weight: bold;
  color: ${({color}) => color ? '#E1E1E6' : '#67E480' };
`;

export const ContainerEmpty = styled.View`
    align-items: center;
    margin-top: 15px;
`;

export const ContentEmpty = styled.View<ThemeProps>`
  justify-content: center;
  align-items: center;
  background-color: ${({color}) => color ? '#181818' : 'rgba(68,71,90,1)' };
  width: 60%;
  height: 240px;
  border-radius: 15px;
`;

export const TextEmpty = styled.Text<ThemeProps>`
  padding: 20px 35px;
  font-size: 18px;
  color: ${({color}) => color ? '#E1E1E6' : '#67E480' };
`;
export const ContainerHeader= styled.View`
    margin-bottom: 20px;
`;

export const TextHeader= styled.Text<ThemeProps>`
  padding: 0px 35px;
  font-size: 28px;
  font-weight: bold;
  color: ${({color}) => color ? '#E1E1E6' : '#67E480' };
`;

