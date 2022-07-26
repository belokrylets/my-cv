import React from "react";
import Input from "./Input";
import MessageInput from "./MessageInput";

const WriteMeForm = () => {
  return (
    <div className="form">
      <h3>Написать мне</h3>
      <form>
        <Input
          size="small"
          type={"text"}
          placeholder={"Имя..."}
          id={"name"}
          name={"name"}
        />
        <Input
          size="small"
          type={"text"}
          placeholder={"Эл. почта..."}
          id={"mail"}
          name={"mail"}
        />
        <Input
          size="big"
          type={"text"}
          placeholder={"Тема..."}
          id={"subject"}
          name={"subject"}
        />
        <MessageInput
          placeholder={"Сообщение..."}
          id={"message"}
          name={"message"}
        />
        <button disabled={true} className="my-button">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default WriteMeForm;
