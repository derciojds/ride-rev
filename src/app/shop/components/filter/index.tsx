'use client';

import styles from './style.module.scss';
import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Collapsible from '@radix-ui/react-collapsible';
import { IconCheck, IconChevronUp, IconChevronDown } from '@/app/assets/Icons';

interface FilterProps {
  filterTitle: string;
  filterContent: string[];
}

export function Filter(props: FilterProps) {
  const [open, setOpen] = React.useState(true);

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <div className={styles.filterTitle}>
        <span>{props.filterTitle}</span>
        <Collapsible.Trigger>
          {open ? <IconChevronUp /> : <IconChevronDown />}
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content>
        <div className={styles.filterContent}>
          {props.filterContent.map((content) => {
            return (
              <Checkbox.Root id={content} key={content}>
                <div className={styles.checkboxIndicator}>
                  <Checkbox.Indicator defaultChecked>
                    <IconCheck />
                  </Checkbox.Indicator>
                </div>
                <label htmlFor={content}>{content}</label>
              </Checkbox.Root>
            );
          })}
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
