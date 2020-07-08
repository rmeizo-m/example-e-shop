import React from 'react';
import classNames from 'classnames/bind';

import commonStyles from 'styles/common.pcss';

import { Flex } from 'components';
import { PageLayout } from 'shared';

import { ProductHeading, ProductPrice, ProductArticle, ActionButton, FavButton,
  CharacteristicsHeading, ExtraHeading, CharacteristicsList, ExtrasList } from './components';
import DetailsLayout from './components/DetailsLayout';

const cx = classNames.bind(commonStyles);


export default function DetailsPage() {
  return (
    <PageLayout>
      <DetailsLayout className={cx('marb-xl')}>
        <ProductHeading className={cx('marb-s')} />
        <ProductArticle className={cx('marb-m')} />
        <ProductPrice className={cx('marb-l')} />
        <Flex isInline className={cx('marb-xl')}>
          <ActionButton />
          <FavButton />
        </Flex>
        <Flex isInline align="top" isDoubleSpacing>
          <React.Fragment>
            <CharacteristicsHeading className={cx('marb-s')} />
            <CharacteristicsList />
          </React.Fragment>
          <React.Fragment>
            <ExtraHeading className={cx('marb-s')} />
            <ExtrasList />
          </React.Fragment>
        </Flex>
      </DetailsLayout>
    </PageLayout>
  );
}
