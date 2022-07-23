import React from "react";

const MessageInput = () => {
  return (
    <div className="message-input-block">
      <textarea
        className="message-input"
        placeholder="Сообщение..."
        id="message"
        name="message"
      />
    </div>
  );
};

export default MessageInput;
