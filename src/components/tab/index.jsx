/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Items from "./Items";
import Content from "./content";
import { TabContext } from "./context";
import Item from "./item";
import PropTypes from "prop-types";
export default function Tab({ children, activeTab }) {
  const [active, setActive] = useState(activeTab);
  const contents = children.filter((c) => c.type === Content);
  const items = children.filter((c) => c.type === Items);

  const content = contents.find((c) => c.props.id === active);
  const data = {
    active,
    setActive,
  };

  useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);
  return (
    <TabContext.Provider value={data}>
      <div className="border-b border-[color:var(--background-third)] sticky top-[3.13rem]  bg-[color:var(--background-primary)]/40 backdrop-blur-md">
        {items}
      </div>
      {content}
    </TabContext.Provider>
  );
}

Tab.Items = Items;
Tab.Item = Item;
Tab.Content = Content;

Tab.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  activeTab: PropTypes.string.isRequired,
};
