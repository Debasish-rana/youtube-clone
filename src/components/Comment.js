import React from "react";
import CommentCard from "./CommentCard";

const Comment = () => {
  const commentData = [
    {
      name: "Debasish Rana",
      comment: "This is a good content",
      replies: [
        {
          name: "Debasish Rana",
          comment: "This is a replies",
        },
      ],
    },
    {
      name: "Debasish Rana",
      comment: "This is a good content",
      replies: [
        {
          name: "Debasish Rana",
          comment: "This is a replies",
          replies: [
            {
              name: "Debasish Rana",
              comment: "This is a replies",
            },
          ],
        },
      ],
    },
    {
      name: "Debasish Rana",
      comment: "This is a good content",
    },
    {
      name: "Debasish Rana",
      comment: "This is a good content",
      replies: [
        {
          name: "Debasish Rana",
          comment: "This is a replies",
          replies: [
            {
              name: "Debasish Rana",
              comment: "This is a replies",
              replies: [
                {
                  name: "Debasish Rana",
                  comment: "This is a replies",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Debasish Rana",
      comment: "This is a good content",
    }
  ];

  const CommentList = ({ comments }) => {
    return (
      <>
        {comments.map((comment, index) => (
          <div key={index}>
            <CommentCard commentData={comment} />
            {/* Recursively render replies if they exist and are valid */}
            {Array.isArray(comment.replies) && (
              <div className="m-4 border-l-2 border-black">
                <CommentList comments={comment.replies} />
              </div>
            )}
          </div>
        ))}
      </>
    );
  };

  return (
    <div>
      <div className="p-4 font-bold text-xl">Comment Section:</div>
      <CommentList comments={commentData} />
    </div>
  );
};

export default Comment;
