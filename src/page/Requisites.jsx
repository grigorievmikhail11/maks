import CustomLink from '../components/links/CustomLink'
import styles from './Page.module.scss'

export default function Requisites() {
  return (
    <div className={styles.root}>
      <CustomLink to={'/'} className="back">
        На Главную
      </CustomLink>

      <div className={styles.title}>Реквизиты</div>

      <div className={styles.requisites}>
        <div className={styles.row}>
          <div className={styles.row_item}>
            Реквизиты Полное наименование (согласно учредительным документам):
          </div>
          <div></div>
          <div className={styles.row_item}>
            Общество с ограниченной ответственностью "МАКС ЦН"
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.row_item}>Название компании:</div>
          <div></div>
          <div className={styles.row_item}>ОсОО Макс ЦН</div>
        </div>
        <div className={styles.row}>
          <div className={styles.row_item}>Адрес местонахождения:</div>
          <div></div>
          <div className={styles.row_item}>
            Бишкек, Ленинский район, бул. Молодой Гвардии, 59
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.row_item}>ИНН:</div>
          <div></div>
          <div className={styles.row_item}> 00804199610343</div>
        </div>

        <div className={styles.row}>
          <div className={styles.row_item}>Телефоны:</div>
          <div></div>
          <div className={styles.row_item}> +79160373409</div>
        </div>

        {/* <div className={styles.row}>
        <div className={styles.row_item}>Расчетный счет:</div>
        <div></div>
        <div className={styles.row_item}> 20208000805591030001</div>
        </div>

        <div className={styles.row}>
        <div className={styles.row_item}>Наименование учреждения банка:</div>
        <div></div>
        <div className={styles.row_item}>           
            Joint Stock Innovation Commercial Bank «Ipak Yuli” Mirabad branch
          </div>
        </div>

        <div className={styles.row}>
        <div className={styles.row_item}>Адрес:</div>
        <div></div>
        <div className={styles.row_item}> 100015, Tashkent city, Mirabad street, 25</div>
        </div> */}

        <div className={styles.row}>
          <div className={styles.row_item}>Почта:</div>
          <div></div>
          <div className={styles.row_item}> info@MAKS-TSN-OSOO.KG</div>
        </div>

        <div className={styles.row}>
          <div className={styles.row_item}>Генеральный директор:</div>
          <div></div>
          <div className={styles.row_item}> Григорьев Михаил Владимирович</div>
        </div>
      </div>
    </div>
  )
}
