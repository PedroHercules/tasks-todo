import { Trash, Check } from '@phosphor-icons/react'
import * as Checkbox from '@radix-ui/react-checkbox';

import styles from './index.module.css'
import { useState } from 'react';
import { CheckedState } from 'node_modules/@radix-ui/react-checkbox/dist';

interface TaskProps {
  value: string
  isChecked: CheckedState
  handleCheck: () => void
  handleRemove: () => void
}

export function TaskCard({ value, isChecked, handleCheck, handleRemove }: TaskProps) {
  const [checked, setChecked] = useState<CheckedState | undefined>(isChecked);

  return (
    <div className={styles.card}>
      <div className={styles.checkboxContainer}>
        <Checkbox.Root 
          id='c1'
          className={checked ? styles.checkboxChecked : styles.checkboxUncheked}
          checked={checked}
          onCheckedChange={setChecked}
          onClick={handleCheck}
        >
          <Checkbox.Indicator className={styles.checkboxIndicator}>
            <Check size={12} weight='bold'/>
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label 
          htmlFor="c1"
          className={checked ? styles.checked : ''}
        >
          {value}
        </label>
      </div>
      <button
        className={styles.removeBtn}
        onClick={handleRemove}
      >
        <Trash size={24} className={styles.icon}/>
      </button>
    </div>
  )
}