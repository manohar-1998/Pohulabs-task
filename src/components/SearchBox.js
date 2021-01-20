import React from "react";
import { Input, Menu, Dropdown, Button } from "antd";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";

function SearchBox({ parentCallback, getSearchType }) {
  const menu = (
    <Menu>
      <Menu.Item>
        <Button onClick={(e) => getSearchType("Alphanumeric")}>
          Alphanumeric
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button onClick={(e) => getSearchType("Ascending - Year")}>
          Ascending - Year
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button onClick={(e) => getSearchType("Descending - Year")}>
          {" "}
          Descending - Year
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Input
        placeholder="Enter movie name"
        prefix={<SearchOutlined />}
        allowClear={true}
        style={{ width: 220, backgroundColor: "transparent" }}
        onChange={(e) => parentCallback(e.target.value)}
      />
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Filters <DownOutlined />
        </a>
      </Dropdown>
      ,
    </div>
  );
}

export default SearchBox;
