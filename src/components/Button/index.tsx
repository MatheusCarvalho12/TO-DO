import styles from './styles.module.css';

interface ButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
}

function Button({ text, onClick, isDisabled }: ButtonProps) {
  return (
    <div className={styles.Button}>
      <button
        className="button"
        id={text}
        onClick={onClick}
        disabled={isDisabled}>
        {text}
      </button>
    </div>
  );
}

export default Button;
