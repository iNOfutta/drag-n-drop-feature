const ButtonsDisplay = ({ bottomButtons }) => {
  return (
    <div className="flex justify-end mx-4 mr-0 my-16">
      {bottomButtons.map((button, index) => {
        return <Button text={button.text} styles={button.styles} key={index} />;
      })}
    </div>
  );
};

export default ButtonsDisplay;

const Button = ({ styles, text }) => <button className={styles}>{text}</button>;
