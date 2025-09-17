import styles from './module/ContainerC.module.css';

const ContainerC = (props) => {
    return  <div className={styles.CalContainer}>{props.children}
    </div>
}

export default ContainerC;