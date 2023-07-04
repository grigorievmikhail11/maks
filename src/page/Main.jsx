import BlockContainer from '../components/block/BlockContainer'
import TextBlock from '../components/block/TextBlock'
import Menu from '../components/menu/Menu'
import { data } from '../data/data'
import styles from './Page.module.scss'

export default function Main() {
  return (
    <div className={styles.root}>
      <div className={styles.testing}>
        <div className={styles.line}>
          Возможности безграничны
          <ion-icon
            name="bag-check-outline"
            style={{ marginLeft: '15px' }}
          ></ion-icon>
        </div>
        <div></div>
      </div>
      <BlockContainer className={'blockContainer'}>
        <TextBlock className="single">
          <div className={styles.single_title}>Полезные сервисы</div>
          <div className={styles.single_text}>
            Огромный выбор финансовых услуг и наши помощники - сделают сложную
            работу - простой.
          </div>
        </TextBlock>
      </BlockContainer>
      <Menu items={data} />
    </div>
  )
}
