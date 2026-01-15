const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-md p-2 rounded-sm">
      <span className="material-symbols-outlined w-10">
        account_circle
      </span>
      <h1 className="font-semibold">{name}:</h1>
      <p className="px-2 text-sm">{message}</p>
    </div>
  );
};

export default ChatMessage;
