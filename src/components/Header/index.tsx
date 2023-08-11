import styles from './index.module.css'
import RocketIcon from '@/assets/rocket.svg'

export function Header() {
  return (
    <header>
      <div className={styles.container}>
        <img src={RocketIcon} alt="rocket" />
        <h1 className={styles.title}>
          to<span>do</span>
        </h1>
      </div>
    </header>
  )
}