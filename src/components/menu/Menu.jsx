import Item from './item/Item'
import { data_footer, singleCenterBlock } from '../../data/data'
import styles from './Menu.module.scss'
import BlockContainer from '../block/BlockContainer'
import ImageBlock from '../block/ImageBlock'
import TextContainer from '../block/TextContainer'

import logo3 from '../../assets/2/2.png'

export default function Menu({ items }) {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Item item={items[0]} className="" />
        <Item item={items[1]} className="" />
        <Item item={items[2]} className="" />
        <Item item={items[3]} className="" />
        <Item item={items[4]} className="span 4" />
        <Item item={items[5]} className="" />
        <Item item={items[6]} className="" />
        <Item item={items[7]} className="span 2" />
      </div>
      <div className={styles.image_div}>
        <div className={styles.image_all}></div>
        {/* <img
          src={data_footer.img}
          title={data_footer.title}
          className={styles.image_all}
          alt="all"
        /> */}
      </div>
      <BlockContainer className={'blockContainer_footer'}>
        <ImageBlock src={logo3} />
        <TextContainer
          text={singleCenterBlock.action()}
          className="blue"
          flag={false}
        />
      </BlockContainer>
    </div>
  )
}
