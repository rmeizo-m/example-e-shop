import React from 'react';
import classNames from 'classnames/bind';

import commonStyles from 'styles/common.pcss';
import { PageLayout } from 'shared';

import DetailsLayout from './components/DetailsLayout';
import { Breadcrumbs, ProductHeading, ProductPrice, ProductArticle } from './components';

const cx = classNames.bind(commonStyles);


export default function DetailsPage() {
  return (
    <PageLayout>
      <DetailsLayout className={cx('marb-xl')}>
        <Breadcrumbs className={cx('marb-s')} />
        <ProductHeading className={cx('marb-xs')} />
        <ProductArticle className={cx('marb-xs')} />
        <ProductPrice />
      </DetailsLayout>
    </PageLayout>
  );
}
