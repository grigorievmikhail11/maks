import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'
import styles from './Layout.module.scss'
import BlockContainer from '../block/BlockContainer'
import ImageBlock from '../block/ImageBlock'
import { singleCenterBlock } from '../../data/data'
import TextContainer from '../block/TextContainer'

import logo from '../../assets/2/1.png'

export default function Layout() {
  return (
    <div className={styles.container}>
      <div className={styles.root}>
        <Header />
        <BlockContainer className={'blockContainer'}>
          <ImageBlock className="linear_1" src={logo} />

          <TextContainer
            title={singleCenterBlock.title}
            text={singleCenterBlock.text}
            className="white"
            flag={false}
          />
        </BlockContainer>
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}
