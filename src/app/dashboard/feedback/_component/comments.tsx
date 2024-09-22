function Comments({ comment }) {
  return (
    <>
      <tr>
        <td className="text-capitalize">{comment.name}</td>
        <td className="text-capitalize">{comment.email}</td>
        <td className="text-capitalize">{comment.comment}</td>
        <td className="text-capitalize">{comment.created_at}</td>
      </tr>
    </>
  );
}

export default Comments;
