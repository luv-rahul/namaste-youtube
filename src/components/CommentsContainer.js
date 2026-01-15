import { commentsData } from "../utils/constants";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex p-2">
      <span className="material-symbols-outlined w-10">account_circle</span>
      <div>
        <h1 className="font-bold">{name}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ commentsData }) => {
  return (
    <div>
      {commentsData?.map((comment) => (
        <div key={comment.id}>
          <Comment data={comment} />
          <div className="ml-4 pl-4  border-l-2 border-l-gray-400">
            <CommentList commentsData={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="px-2 bg-gray-100 my-4 rounded-lg">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentList commentsData={commentsData} />
    </div>
  );
};

export default CommentsContainer;
