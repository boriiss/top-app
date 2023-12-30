
import React, { JSX } from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({ appereance, children }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appereance == 'primary',
        [styles.ghost]: appereance == 'ghost',
      })}
    > 
      {children} 
    </button>
  );
};