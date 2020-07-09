import React from 'react';
import classNames from 'classnames/bind';

import commonStyles from 'styles/common.pcss';
import { PageLayout } from 'shared';
import { Flex, Price } from 'components';
import { CatalogLayout, CatalogFilters, CatalogHeading, CatalogQuickFilters, CatalogViewType,
  ProductList, ProductImage, ProductTitle } from './components';

const cx = classNames.bind(commonStyles);


export default function CatalogPage() {
  return (
    <PageLayout>
      <CatalogLayout sidebar={<CatalogFilters className={cx('padt-xs')} />}>
        <Flex className={cx('marb-s')}>
          <CatalogHeading />
          <CatalogQuickFilters />
          <CatalogViewType />
        </Flex>
        <ProductList>
          {({ imageUrl, productUrl, name, price, currency }) => (
            <div className={cx('marb-l')}>
              <ProductImage src={imageUrl} href={productUrl} />
              <ProductTitle href={productUrl}>{name}</ProductTitle>
              <Price value={price.value} currency={currency} />
            </div>
          )}
        </ProductList>
      </CatalogLayout>
    </PageLayout>
  );
}
