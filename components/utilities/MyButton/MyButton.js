import "./MyButton.css";

const MyButton = (props) => {
   const { className, label, ...resetProps } = props;
   return (
      <button {...resetProps} className={className}>
         {label}
      </button>
   );
};

export default MyButton;
