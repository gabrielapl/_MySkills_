import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { SwitchView,SwitchTheme, Icon } from './styles';

interface Props extends TouchableOpacityProps {
  theme: boolean;
}

const themeSelect = {
  light: "toggle-switch-off-outline" ,
  dark: "toggle-switch-outline" 
}

export function ThemeSwitch({theme, ...rest}:Props){
  return(
    <SwitchView>
      <SwitchTheme  {...rest} >
        <Icon color={theme ? '#181818' : 'rgba(68,71,90,1)'}  name={theme ?  themeSelect.dark :  themeSelect.light }  />
     </SwitchTheme>
    </SwitchView>
   
  );
};