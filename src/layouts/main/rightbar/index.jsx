import FollowExplore from "./follower-explore";
import Footer from "./footer";
import Premium from "./premium";
import Search from "./search";
import Topics from "./topics";

export default function RightBar() {
  return (
    <div className="">
      <aside className=" fixed  w-[350px] mr-2.5  top-0 ">
      <Search />
      <Premium/>
      <Topics/>
      <FollowExplore/>
      <Footer/>
    </aside>
    </div>
  );
}
