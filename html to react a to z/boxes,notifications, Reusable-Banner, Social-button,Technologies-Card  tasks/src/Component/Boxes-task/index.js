const Box = (props) => {
    const { name, className } = props;

    return <div className={`${className}`}>{name}</div>;
  };

  export default Box;