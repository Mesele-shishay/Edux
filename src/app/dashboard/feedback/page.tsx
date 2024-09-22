import Comments from "./_component/comments";
import Main_Dashboard from "../main";
import { comment } from "postcss";

function Feedback() {
  const comments = [
    {
      name: "Mesele Shishay",
      email: "mesa1570@gmail.com",
      comment: "dfdhkfjdhkjfdskjhfkdshfkdsgfjhdsgfhg",
      created_at: " 2024 / 11 / 29",
    },
    {
      name: "Mera Nguse",
      email: "Mera2992@gmail.com",
      comment: "dfdhkfjdhkjfdskjsfsdkfdskfhkdshfkhdskfjsdfskdjfskjhfkdshfkdsgfjhdsgfhg",
      created_at: " 2030 / 04 / 19",
    },
  ];

  return (
    <Main_Dashboard>
      <>
        <div className="row">
          <div className="table-responsive">
            <table className="table table-striped table-hover table-bordered">
              <thead className="theadf-dark">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Comment</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {comments.map((comment) => {
                  return <Comments comment={comment} />;
                })}
              </tbody>
            </table>
            {/* {{ $comments->links() }} */}
          </div>
        </div>
      </>
    </Main_Dashboard>
  );
}

export default Feedback;
