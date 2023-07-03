'use client';

import styles from './style.module.scss';
import { Filter } from '../filter';
import { useState } from 'react';

export function SideBar() {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <aside
      className={`${styles.sideBar} ${openSideBar ? styles.sideBarClosed : ''}`}
    >
      <button
        onClick={() => setOpenSideBar(!openSideBar)}
        className={styles.openSideBarButton}
        type="button"
      ></button>
      <div className={styles.sideBarTitle}>
        <span>Filters</span>
        <button className={styles.clearButton} type="button">
          Clear
        </button>
      </div>
      <hr />
      <Filter
        filterTitle="Category"
        filterContent={['Frames', 'Wheels', 'Tires']}
      />
      <button type="button" className={styles.applyFilterButton}>
        Apply Filter
      </button>
    </aside>
  );
}
