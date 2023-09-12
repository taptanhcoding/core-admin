import { Avatar, Dropdown } from "antd";
import React from "react";

export default function User() {
  return (
    <Dropdown
      trigger={["click"]}
      dropdownRender={(menu) => {
        return <div className="bg-white shadow-md p-3 w-[200px]">Menu</div>;
      }}
    >
      <Avatar />
    </Dropdown>
  );
}
