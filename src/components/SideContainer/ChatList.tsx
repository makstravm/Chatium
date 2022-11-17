import { FC, useContext } from "react";
import { ThemeContext } from "context/ThemeContext";
import { CustomScroll } from "../CustomScroll";
import { IChatList } from "src/constants/chatList";
import { ChatItem } from "./ChatItem";
import { ChatListIsEmpty } from "./ChatListIsEmpty";

export const ChatList: FC<{ chatList: IChatList }> = ({ chatList }) => {
  const { themeMode } = useContext(ThemeContext);

  return (
    <CustomScroll theme={themeMode} style={{ height: "calc(100vh - 176px)" }}>
      {chatList?.length ? (
        chatList.map(({ id, ...props }) => (
          <ChatItem key={id} id={id} {...props} />
        ))
      ) : (
        <ChatListIsEmpty />
      )}
    </CustomScroll>
  );
};
