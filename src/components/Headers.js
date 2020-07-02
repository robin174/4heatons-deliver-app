import React from 'react';
import styled from 'styled-components';
import { Container } from './Layout';
import { LocationSearch } from './Locations';
import { Button } from './Buttons';

export const Nav = () => {
  return (
    <StyledNav role="navigation">
      <Button path="https://airtable.com/shrOPcOJGWbf0Ua5c">
        <span role="img" aria-label="List">📍</span>&nbsp;List your business
      </Button>
      <Button path="mailto:fourtheheatons@gmail.com">
       <span role="img" aria-label="Email">📧</span>&nbsp;&nbsp;Email us
      </Button>
      <Button path="https://www.facebook.com/groups/3059248397526431/">
       <span role="img" aria-label="Facebook">🙌</span>&nbsp;&nbsp;Follow on Facebook
      </Button>
    </StyledNav>
  )
}

export const HeroHeader = ({ search }) => {
  const logoHero = '/images/logo--hero-4heatonsdeliver.png';
  return (
    <StyledHeroHeader role="banner" style={{ backgroundImage: `url(/images/Header@2x.png)` }}>
      <Container>
        <h1><img src={logoHero} alt="4 Heatons Deliver Logo"/></h1>;
        <p>Local restaurants, suppliers, shops &amp; services that deliver contact-free to your door.</p>
        <p>Search for what you'd like delivered e.g. bread, coffee, hand sanitiser, beer, prescriptions, yeast, toilet paper:</p>
        <LocationSearch />
      </Container>
    </StyledHeroHeader >
  )
}

const StyledHeroHeader = styled.header`
  display:block;
  padding:var(--spacing-xxxl) 0;
  padding-bottom:calc(var(--spacing-lg) * 2.5);
  background-color:var(--base);
  background-size:cover;
  background-position:top;
  text-align: center;

  img {
      margin: 0 auto;
      margin-bottom: 1rem;
  }
  h1 {
    color:var(--text-high-white);
    margin:0 0 1rem 0;
  }
  p {
    color:var(--text-med-white);
    //max-width:35ch;
  }
  p + p {
    margin-top:0.2rem;
  }

  @media(min-width:48rem) {
    padding:var(--spacing-xxl) 0;
    padding-bottom:calc(var(--spacing-xl) * 1.5);
  }
`

const StyledNav = styled.nav`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  display:block;
  justify-content:space-between;
  align-items:center;
  flex-flow:row nowrap;
  width:100%;
  padding:var(--spacing-sm);

  a {
    width:100%;
    margin:0 0 var(--spacing-xs) 0;
  }

  @media(min-width:48rem) {
    display:flex;
    justify-content:flex-end;

    a {
      width:auto;
      margin:0 0 0 var(--spacing-xs);
    }
  }


`
