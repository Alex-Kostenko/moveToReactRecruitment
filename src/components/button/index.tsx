import React from 'react';

// import { Anek } from '@/util';

import styles from './button.module.scss';

type IButtonProps = {
  text?: string;
  classname?: string;
  className?: string;
  link?: string;
  fullwidth?: boolean;
  disabled?: boolean;
  variant?:
    | 'default'
    | 'google'
    | 'clear'
    | 'clearWBorder'
    | 'next'
    | 'prev'
    | 'seniority'
    | 'employees'
    | 'hire'
    | 'cv'
    | 'addPhoto'
    | 'createEmployee'
    | 'backButton'
    | 'link'
    | 'iconButton'
    | 'cardEmployee'
    | 'downloadCV'
    | 'interview'
    | 'basic';
  onClick?: any;
  type?: 'submit' | 'button' | 'reset' | undefined;
  children?: JSX.Element | any;
};

const buttonMods: any = {
  default: '',
  google: styles.google,
  clear: styles.clear,
  clearWBorder: styles.clearWBorder,
  next: styles.next,
  prev: styles.prev,
  seniority: styles.seniority,
  hire: styles.hire,
  cv: styles.cv,
  employees: styles.employees,
  addPhoto: styles.addPhoto,
  createEmployee: styles.createEmployee,
  backButton: styles.backButton,
  link: styles.link,
  iconButton: styles.iconButton,
  cardEmployee: styles.cardEmployee,
  downloadCV: styles.downloadCV,
  interview: styles.interview,
  basic: styles.basic,
};

export const Button = ({
  type = 'submit',
  text,
  classname = '',
  // fullwidth,
  variant = 'default',
  onClick,
  children,
  disabled,
}: IButtonProps) => {
  const mod = buttonMods?.[variant] || '';
  return (
    <button
      className={`${styles.button} ${
        disabled && 'disabled'
      } ${mod} ${classname} ${'' /*Anek.style*/}`}
      disabled={!!disabled}
      onClick={onClick}
      type={type}
    >
      <p className={styles.text}>{text}</p>
      {children}
    </button>
  );
};
