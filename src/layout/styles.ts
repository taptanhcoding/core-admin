import styled from "styled-components";
import { Layout } from "antd";

import { ColorPalette } from "app:constants";

export const LayoutContainer = styled(Layout)`
  min-height: 100vh;
  background-color: ${ColorPalette.WHITE};

  .ant-layout-content {
    padding: 20px;
    background-color: ${ColorPalette.WHITE};
  }
`;
