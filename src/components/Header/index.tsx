import React from 'react';

import { Head, Title } from './styles';

interface Props{
  theme: boolean;
}

export function Header({ theme }:Props){
  return(
    <Head color={theme} >
      <Title color={theme} >_MySkills_</Title>
    </Head>
  );
}