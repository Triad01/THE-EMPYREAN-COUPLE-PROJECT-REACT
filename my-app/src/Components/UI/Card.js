import styles from "./Card.module.css";

const Card = (props) => {
  const card_styles = `${styles.card} ${props.className}`;
  return <div className={card_styles}>{props.children}</div>;
};

export default Card;
