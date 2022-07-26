import React from "react";

interface MessageInputProps {
  placeholder: string;
  id: string;
  name: string;
}
const MessageInput = ({ id, name, placeholder }: MessageInputProps) => {
  return (
    <div className="message-input-block">
      <textarea
        className="message-input"
        placeholder={placeholder}
        id={id}
        name={name}
      />
    </div>
  );
};

export default MessageInput;
