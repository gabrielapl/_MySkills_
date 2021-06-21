import React from 'react';
import { 
Skills,
ButtonSkills,
TextSkills,
ContainerEmpty,
ContentEmpty,
TextEmpty,
ContainerHeader,
TextHeader,
Container
} from './styles';

export interface Props{
  theme: boolean;
}

export interface skillData{
  theme: boolean;
  skills:{
    id: number;
    name: string;
  }[];
  onPress: (id: number) => void;
}


function ListEmpty({ theme }:Props){
  return(
    <ContainerEmpty>
      <ContentEmpty color={theme} >
        <TextEmpty color={theme} >Sem Skills...</TextEmpty>
      </ContentEmpty>
    </ContainerEmpty>
  )
}

function ListHeader({ theme }:Props){
  return(
    <ContainerHeader>
      <TextHeader color={theme} >Suas Skills</TextHeader>
    </ContainerHeader>
  )
}

export function ListSkills({ theme, skills, onPress }:skillData){
  return (
    <Skills
      style={{marginTop:5}}
      data={skills}
      keyExtractor={item => String(item.id)}
      renderItem={({item})=>(
          <Container>
            <ButtonSkills color={theme} onPress={()=>onPress(item.id)} >
              <TextSkills color={theme} >{item.name} </TextSkills>
            </ButtonSkills>
          </Container>
         
      
  )}
    ListEmptyComponent={<ListEmpty theme={theme} />}
    ListHeaderComponent={<ListHeader theme={theme} />}
   
  />
  );
};