import classNames from 'classnames/bind';
import React from 'react';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

export default function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <h2>sidebar</h2>
    </aside>
  );
}
