import styles from './ImageAside.module.scss'
import Image from 'next/image'
import roaster1 from '../../public/images/roaster1.jpg'
import roaster2 from '../../public/images/roaster2.jpg'

const ImageAside = () => (
    <div className={styles.asideInner}>
        <Image className={styles.imageTop} src={roaster1} alt="roaster" layout='fill' />
        <Image className={styles.imageBottom} src={roaster2} alt="roaster" layout='fill' />
    </div>
)

export default ImageAside