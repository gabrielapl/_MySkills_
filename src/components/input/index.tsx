import React, {useState} from 'react';
import {
InputArea,
TextInput,
ButtonContainer,
Button,
ButtonTitle,
ButtonIcon,} from './styles';

interface Props{
  theme: boolean;
  addSkill: (skill: string) => void;
}

export function Input({ theme, addSkill }:Props){

  const [skill, setSkill] = useState('')

  function handleAddNewSkill(){
    addSkill(skill)
    setSkill('')
  }

  return(
      <>
    <InputArea>
      <TextInput
        color={theme} 
        placeholder='Adicionar uma skill...'
        placeholderTextColor={theme ? '#E1E1E6' : '#67E480'}
        onChangeText={setSkill}
        value={skill}
      />
    </InputArea>
    <ButtonContainer>
      <Button color={theme} onPress={handleAddNewSkill} >
        <ButtonTitle color={theme}  >Add... </ButtonTitle>
        <ButtonIcon  color={theme} />
      </Button>
    </ButtonContainer>
      </>
  );
};