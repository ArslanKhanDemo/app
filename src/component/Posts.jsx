import { useParams } from "react-router-dom";

function Posts() {
  const Params = useParams();
  return <div>Posts:{Params.id}</div>;
}

export default Posts;
