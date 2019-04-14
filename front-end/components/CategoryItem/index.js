import React from 'react'
import styled from 'styled-components'

const CategoryItemStyle = styled.div`

  width: 25%;
  display:flex;
  justify-content:center;
  flex-direction:column;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 23px;
    letter-spacing: 0.03em;
    color: #046DA9;
  }

  h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.03em;
    color: rgba(0, 0, 0, 0.6);
  }

  @media screen and (max-width: 992px) {
    width:50vw;
  }

`

const CategoryItem = (props) => {
  return (
    <CategoryItemStyle>
    <h1>{props.data.name}</h1>
    <h2>{props.data.description}</h2>
    </CategoryItemStyle>
  )
}

export default CategoryItem
