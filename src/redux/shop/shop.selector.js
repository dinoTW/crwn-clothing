import { createSelector } from 'reselect';


const COLLECTION_ID_MAP = {
  hats: 1,
  jackets: 2,
  sneakers: 3,
  womens: 4,
  mens: 5
}

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollection = collectionIrlParam => createSelector(
  [selectShopCollections],
  collections => collections[collectionIrlParam]
)