import React from 'react';

import Heading from 'components/Heading';
import Container from 'components/Container';

import * as S from './styles';
import { SectionTechProps } from 'types/api';
import { getImageUrl } from 'utils/getImageUrl';

const SectionTech = ({ title, techIcons }: SectionTechProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techIcons.map(({ title: techIconTitle, icon }) => (
          <S.Icon key={techIconTitle}>
            <S.Icons
              src={getImageUrl(icon.url)}
              alt={techIconTitle}
              loading="lazy"
            />
            <S.IconsName>{techIconTitle}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
);

export default SectionTech;
