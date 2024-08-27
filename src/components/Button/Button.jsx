import styles from './styles.module.scss';

function Button({ content }) {
    const { btn } = styles;
    return <button className={btn}>{content}</button>;
}

export default Button;
