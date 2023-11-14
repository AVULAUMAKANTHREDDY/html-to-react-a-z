import React from "react";

const Notification = (props) => {
    const { name, url, className } = props;
    return (
      <div className={`message-conatiner ${className}`}>
        <img className="icon" src={url} alt="images"/>
        <p className="message">{name}</p>
      </div>
    );
};

export default Notification;