import styled from 'styled-components'

import { cores } from '../../styles'

export const Produto = styled.div``

export const Titulo = styled.h3`
  min-height: 64px;
`

export const Capa = styled.div`
  position: relative;

  img {
    display: block;
    width: 100%;
    margin-bottom: 8px;
    border-radius: 20px;
    border: 1px solid #ccc;
  }
`

export const Prices = styled.div`
  margin: 16px 0;
  color: #fff;

  small {
    font-size: 16px;
    text-decoration: line-through;
    margin-right: 8px;
    opacity: 0.7;
  }

  strong {
    font-size: 16px;
  }
`

export const AreaBtn = styled.div`
  display: grid;
  grid-template-columns: 78% 20%;
  gap: 2%;
`

export const BtnComprar = styled.button`
  display: block;
  background-image: linear-gradient(
    45deg,
    ${cores.corPrincipal},
    ${cores.corSecundaria}
  );
  font-weight: bold;
  font-size: 16px;
  padding: 12px 0;
  text-transform: capitalize;
  color: ${cores.corFundo};
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 8px;

  &:hover {
    background-image: linear-gradient(
      -45deg,
      ${cores.corPrincipal},
      ${cores.corSecundaria}
    );
  }
`

export const BtnFavorito = styled(BtnComprar)`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 22px;

    path {
      color: ${cores.corFundo};
    }
  }
`
