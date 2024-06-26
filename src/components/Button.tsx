import { css } from "@linaria/core";
import { secondaryColor } from "../constants";

const styles = {
  button: css`
    padding: 0.5em 1em;
    border: none;
    border-radius: 0.25em;
    background-color: ${secondaryColor};
    transition: box-shadow ease-out 100ms;

    box-shadow: 0.1em 0.1em 0.2em rgba(0, 0, 0, 0.25);

    &:hover {
      box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.25);
      background-color: ${secondaryColor};
    }

    &:active {
      box-shadow: 0.1em 0.1em 0.2em rgba(0, 0, 0, 0.25);
      background-color: ${secondaryColor};
    }
  `,
};

type ButtonProps = {
  onPress: () => void;
  title: string;
};

export function Button({ title, onPress }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onPress}>
      {title}
    </button>
  );
}
