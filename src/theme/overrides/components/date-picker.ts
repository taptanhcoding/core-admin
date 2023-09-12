import { AliasToken, ComponentTokenMap } from 'antd/es/theme/interface';
import {
  ButtonStatePalette,
  ColorPalette,
  ShadowPalette,
  StrokePalette,
  TextPalette,
} from 'app:constants';

export const DatePicker: Partial<ComponentTokenMap['DatePicker']> & Partial<AliasToken> = {
  borderRadius: 4,
  borderRadiusLG: 4,
  borderRadiusSM: 4,
  boxShadowSecondary: `${ShadowPalette.SHADOW_8}`,
  colorBgContainerDisabled: `${StrokePalette.LEVEL_3}`,
  colorBorder: `${StrokePalette.LEVEL_3}`,
  colorPrimaryHover: `${StrokePalette.LEVEL_3}`,
  colorSplit: `${StrokePalette.LEVEL_3}`,
  colorText: `${TextPalette.LEVEL_1}`,
  colorTextDisabled: `${TextPalette.LEVEL_1}`,
  colorTextHeading: `${ColorPalette.CHARCOAL}`,
  colorTextPlaceholder: `${TextPalette.LEVEL_3}`,
  controlItemBgActive: `${ButtonStatePalette.LIGHT_YELLOW_HOVER}`,
  controlHeightLG: 56,
  controlHeightSM: 32,
  fontWeightStrong: 700,
  paddingSM: 12,
  paddingXS: 12,
  paddingXXS: 4,
};
