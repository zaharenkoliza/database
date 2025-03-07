
import styles from './Button.module.css';
const Button = ({ text, click }) => {
	return (
		<button className={styles.button} onClick={click}>{text}</button>
	);
}

export default Button;