import React from 'react'
import {  useSelector } from 'react-redux';
import { getShopingCard } from '../redux/selectors';
import ShopingCardList from '../components/Shop/ShopingCard/ShopingCardList';

const ShopingCardPage = () => {

  const shopingCard = useSelector(getShopingCard);


  return (
    <ShopingCardList shopingCard={shopingCard}>ShopingCardPage</ShopingCardList>
  )
}

export default ShopingCardPage
