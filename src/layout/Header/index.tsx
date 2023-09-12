import React from "react";
import { Col, Layout, Row } from "antd";
import { HeaderContainer } from "./styled";
import { Icon } from "../../../../fe-next-core/src/components/Icon/index";
import User from "./dropdown/User/User";
import classNames from "classnames";

const { Header } = Layout;
interface headerProps {
  handleNav: any;
  className?: any
}

export default function HeaderApp({ handleNav,className }: headerProps) {
  return (
    <HeaderContainer className={className}>
      <Row className="items-center justify-between w-full">
        <Col className="flex flex-row items-center">
          <span
            className={classNames(
              handleNav.navVisible ? "ml-[12px]" : "ml-[4px]"
            )}
            onClick={() => handleNav.setNavVisible((prev: boolean) => !prev)}
          >
            <Icon name="menu" className="text-[32px]" />
          </span>
          <div className="ml-2">Logo</div>
        </Col>
        <Col className="flex flex-row items-center">
          <User />
        </Col>
      </Row>
    </HeaderContainer>
  );
}
