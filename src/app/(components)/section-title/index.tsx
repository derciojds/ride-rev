import { ReactNode } from 'react';
import styles from './style.module.scss'

interface TitleProps {
  children: ReactNode;
  position: 'left' | 'right';
  sectionNumber: Number;
}

export function Title({children, position, sectionNumber}: TitleProps) {
  return (
    <div className={`
      ${styles.title} 
      ${position === 'right' ? styles.right : position === 'left' ? styles.left : ''}`}>
      <h2 style={{order: position !== 'right' ? 1 : 0}}>{children}</h2>
      <span>{sectionNumber.toString()}</span>
    </div>
  )
}
