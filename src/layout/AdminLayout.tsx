import React, { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { Layout } from "antd";
import HeaderApp from "./Header";
import SiderBar from "./SideBar";
import useWindowDimension from "hooks/useWindowDimension";
import classNames from "classnames";
import { useClickAway,ClickInside } from "hooks/useClickOutSide";

const { Content } = Layout;
export default function AdminLayout() {
  const [navVisible, setNavVisible] = useState<boolean>(false);
  const siderBarRef = useRef<HTMLDivElement>();
  const opaRef = useRef<HTMLDivElement>();
  const { width } = useWindowDimension();
  const isMobile = width <= 412;

  useEffect(() => {
    if (width < 1024) setNavVisible(true);
    else setNavVisible(false);
  }, [width]);
  ClickInside(opaRef, () => {
    if (isMobile) {
      setNavVisible(true);
    }
  });

  return (
    <LayoutContainer>
      <HeaderApp
        handleNav={{ setNavVisible, navVisible }}
      />
      <Layout>
        <SiderBar handleNav={{ setNavVisible, navVisible }} ref={siderBarRef} />
        <Content>
          <div
            ref={opaRef}
            className={classNames(
              !navVisible &&
                isMobile &&
                "opacity-40 brightness-50 fixed top-0 left-[240px] right-0 bottom-0 z-[9998] bg-black"
            )}
          ></div>
          <Outlet />
        </Content>
      </Layout>
    </LayoutContainer>
  );
}
