import PropTypes from 'prop-types';
import styles from "./Button.module.css";

const Button = ({isOutline, icon, text, ...rest} ) => {

  // console.log(props); 
  return (
    <button {...rest} className={isOutline? styles.outline_btn: styles.primary_btn}>
      {icon}
      {text}
    </button>
  );
};

// Define prop types for icon and text
Button.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string.isRequired,
  isOutline: PropTypes.bool, 
};

export default Button;
