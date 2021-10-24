import React from "react";

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectShopCollections } from "../../redux/shop/shop.selector";


import CollectionPreview from "../../pages/CollectionPreview/CollectionPreview";

import './CollectionOverview.scss';

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProp }) => (
      <CollectionPreview id={id} {...otherCollectionProp} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
})

export default connect(mapStateToProps)(CollectionOverview)