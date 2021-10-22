import React from 'react';

import CollectionPreview from '../CollectionPreview/CollectionPreview';
import SHOP_DATA from './Shop.data'


class ShopPage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render () {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {
          collections.map(({ id, ...otherCollectionProp }) => (
            <CollectionPreview id={id} {...otherCollectionProp}/>
          ))
        }
      </div>
    );
  }
}

export default ShopPage;