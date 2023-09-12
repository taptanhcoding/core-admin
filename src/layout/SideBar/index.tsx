import React from "react";
import { SiderContainer } from "./styled";
import { forwardRef } from "react";
import { menuData } from "./MenuData";
import styles from "./SiderBar.module.scss";
import classNames from "classnames/bind";
import { Col, Menu, MenuProps, Row } from "antd";
import { menuBar } from "interfaces/menu";
import { Icon } from "components";
import { Link, useNavigate } from "react-router-dom";
import useWindowDimension from "hooks/useWindowDimension";

interface SiderBarProp {
  handleNav: any;
}
const cx = classNames.bind(styles);
const SiderBar = forwardRef<HTMLDivElement, SiderBarProp>(({ handleNav }, ref) => {
  const navigate = useNavigate();
  const { width } = useWindowDimension();

  const renderMenuChildren = (menu: menuBar[]): MenuProps["items"] =>
    menu.map((menuItem) => ({
      key: menuItem.key,
      icon: (
        <span className={cx("icon-menu")}>
          <Icon name={menuItem.icon as string} />
        </span>
      ),
      label: menuItem.text,
      onClick: () => navigate(menuItem.link as string),

      children: menuItem.children ? renderMenuChildren(menuItem.children) : [],
    }));
    
  return (
    <SiderContainer
      theme={"light"}
      trigger={null}
      collapsible
      ref={ref}
      collapsed={handleNav.navVisible}
      collapsedWidth={width <= 412 ? 0 : 80}
      width={240}
      style={
        width <= 412
          ? {
              height: "100vh",
              position: "fixed",
              left: 0,
              top: 0,
              bottom: 0,
              zIndex:9999,
              background:"#fff",
              opacity:1,
              filter: "brightness(1)"
            }
          : {}
      }
    >
      {width <= 412 && (
        <Row>
          <Col className="flex flex-row items-center">
            <span
              className={cx("ml-[24px]")}
              onClick={() => handleNav.setNavVisible((prev: boolean) => !prev)}
            >
              <Icon name="menu" className="text-[32px]" />
            </span>
            <div className="ml-2">Logo</div>
          </Col>
        </Row>
      )}
      {menuData.map((menuItem) => {
        if (menuItem.heading)
          return (
            <h6 className={cx("heading", "mt-[45px] first:mt-0")}>
              {menuItem.heading}
            </h6>
          );
        else
          return (
            <Menu
              theme="light"
              mode="inline"
              selectedKeys={[location.pathname, location.pathname.slice(1)]}
              items={[
                {
                  key: menuItem.key,
                  icon: (
                    <span className={cx("icon-menu")}>
                      <Icon name={menuItem.icon as string} />
                    </span>
                  ),
                  label: menuItem.text,
                  onClick: () => navigate(menuItem.link as string),
                  children: menuItem.children
                    ? renderMenuChildren(menuItem.children)
                    : undefined,
                },
              ]}
            />
          );
      })}
    </SiderContainer>
  );
});
export default SiderBar;
