import { topics } from "@/utils/constants/consts";
import Topic from "../topic";
import SidebarSection from "@/components/sidebar-section";

export default function Topics() {
  return (
    <SidebarSection title=" İlgini çekebilecek gündemler"
    more="/trends"
    >
          {
        topics.map((topic,index)=><Topic item={topic} key={index}/>)
      }
    </SidebarSection>
  
  );
}
