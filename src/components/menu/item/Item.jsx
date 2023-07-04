import styles from './Item.module.scss'

export default function Item({ item, className }) {
  return (
    <div className={styles.root} style={{ gridColumn: `${className}` }}>
      <div className={styles.temp}>
        <div className={styles.img}>
          <ion-icon
            name={`${item.ion}`}
            style={{ color: '#a32e9d', fontSize: '128px' }}
          ></ion-icon>
        </div>

        <div className={styles.short}>
          {item.ind}. &nbsp; {item.short}
        </div>

        <div className={styles.title}> {item.title}</div>
      </div>
    </div>
  )
}
