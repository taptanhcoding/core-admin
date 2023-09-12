import styled from "styled-components";
import { Layout } from "antd";
import { ColorPalette, StrokePalette } from "app:constants";
import { mainColor } from "app:constants/mainColor";

const { Sider } = Layout;

export const SiderContainer = styled(Sider)`
padding-top: 20px;
  li.ant-menu-submenu {
    padding-left: 0px !important;
  }
  border-right: 1px ${StrokePalette.LEVEL_3} solid;

  .ant-menu-light .ant-menu-item-selected {
    background-color: unset !important;
  }

  .ant-menu-item {
    .ant-menu-title-content {
      color: #7e7e7e;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }
  }

  .ant-menu-item-selected {
    .ant-menu-title-content {
      color: ${ColorPalette[mainColor]}!important;
    }
  }

  .ant-menu-item-selected {
    .ant-menu-item-icon {
      path {
        fill: ${ColorPalette[mainColor]} !important;
      }
    }
  }

  .ant-layout-sider-children {
    .sidebar-item {
      ul.ant-menu.ant-menu-root {
        margin-block: 1rem;
        font-weight: 500;
        line-height: 1.5;

        li.ant-menu-item {
          padding-left: 0.75rem !important;
          height: unset !important;
          min-height: 3rem !important;

          .ant-menu-title-content {
            display: block !important;
            height: unset !important;
            text-overflow: unset !important;
            white-space: break-spaces !important;
            line-height: 1.5;
            margin-left: 0.5rem !important;
          }

          .ant-menu-item-selected {
            .ant-menu-item-icon path {
              fill: ${ColorPalette[mainColor]} !important;
            }
          }
        }

        li.ant-menu-submenu {
          .ant-menu-submenu-title {
            padding-left: 0.75rem !important;
            padding-right: 2.5rem;

            &:hover {
              .ant-menu-item-icon path {
                fill: ${ColorPalette.SMOKE};
              }
            }

            .ant-menu-title-content {
              margin-left: 0.5rem;
            }
          }

          &.ant-menu-submenu-selected {
            .ant-menu-submenu-title {
              .ant-menu-item-icon path {
                fill: ${ColorPalette[mainColor]} !important;
              }
            }
          }

          &.ant-menu-submenu-open {
            .ant-menu-submenu-title {
              .ant-menu-title-content,
              .ant-menu-submenu-arrow {
                color: ${ColorPalette.SMOKE};
              }

              .ant-menu-item-icon path {
                fill: ${ColorPalette.SMOKE} !important;
              }
            }
          }

          ul.ant-menu.ant-menu-sub {
            li.ant-menu-item {
              padding-left: 1.5rem !important;

              &.ant-menu-item-selected {
                .ant-menu-item-icon path {
                  fill: ${ColorPalette[mainColor]};
                }
              }

              .ant-menu-title-content {
                margin-left: 0.5rem;
              }
            }
          }
        }
      }
    }
  }
`;

export const WebsiteLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`;
