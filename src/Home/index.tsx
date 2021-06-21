import React,{useState} from 'react';
import {StatusBar} from 'react-native';
import { Container } from './styles';

import { Header } from '../components/Header';
import { ThemeSwitch } from '../components/ThemeSwitch';
import { Input } from '../components/input';
import { ListSkills } from '../components/ListSkills';

interface SkillData{
  id: number;
  name: string;
}

export function Home(){

  const [theme, setTheme] = useState(false)
  const [skills, setSkills] = useState<SkillData[]>([])

  function handleAddNewSkill(skill:string){
    const data = { 
      id: new Date().getTime(),
      name: skill 
    }
    
    setSkills(oldSkill => [...oldSkill,data])
  }

  function handleRemoveSkill(id: number) {
    setSkills(oldSkill => oldSkill.filter(
      skill => skill.id !== id
    ));
  }
  return(
    <Container color={theme} >
      <StatusBar backgroundColor={theme ? '#3E3E3E' : '#483C67'} />
      <Header theme={theme} />
      <Input addSkill={handleAddNewSkill} theme={theme} />
      <ThemeSwitch 
        theme={theme}
        onPress={() => setTheme(!theme)}
      />
      <ListSkills onPress={handleRemoveSkill}  skills={skills} theme={theme} />
    </Container>
  );
};