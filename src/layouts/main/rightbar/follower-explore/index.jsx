import SidebarSection from "@/components/sidebar-section";
import UserCard from "@/components/user-card";
import { followerExplorer } from "@/mock";
import { useAccount } from "@/store/auth/hooks";

export default function FollowExplore() {
  const account = useAccount();
  return (
    <SidebarSection
      title="Kimi Takip Etmeli"
      more={`connet_people?user_id=${account?.id}`}
    >
      {followerExplorer.map((user, ) => <UserCard user={user} key={user.id} />)}
    </SidebarSection>
  );
}
