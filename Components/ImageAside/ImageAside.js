import styles from './ImageAside.module.scss'
import Image from 'next/image'
import roaster1 from '../../public/images/roaster1.jpg'
import roaster2 from '../../public/images/roaster2.jpg'

const ImageAside = () => (
    <div className={styles.asideInner}>
        {/* <div className={styles.imageCont}> */}
            <Image className={styles.imageTop} src={roaster1} alt="roaster" layout='fill' />
        {/* </div> */}
        {/* <div className={styles.imageCont}> */}
            <Image className={styles.imageBottom} src={roaster2} alt="roaster" layout='fill' />
        {/* </div> */}
    </div>
)

export default ImageAside