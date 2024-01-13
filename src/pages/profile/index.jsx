import store from "@/store";
import { useParams } from "react-router-dom";

const userName = store.getState();
export default function Profile() {
  const { slug } = useParams();
  return <div>profile page - {slug}</div>;
}
