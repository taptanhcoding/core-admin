import { AliasToken, ComponentTokenMap } from 'antd/es/theme/interface';
import { ButtonStatePalette, ColorPalette, StrokePalette, TextPalette } from 'app:constants';

export const Cascader: Partial<ComponentTokenMap['Cascader']> & Partial<AliasToken> = {
  colorBgContainerDisabled: `${StrokePalette.LEVEL_2}`,
  dropdownHeight: 180,
  colorBorder: `${StrokePalette.LEVEL_3}`,
  controlHeight: 40,
  colorTextDisabled: `${TextPalette.LEVEL_1}`,
  colorText: `${ButtonStatePalette.DARK_BLUE}`,
  colorSplit: ColorPalette.WHITE,
  controlInteractiveSize: 0,
  controlItemBgActive: `${ButtonStatePalette.LIGHT_YELLOW_HOVER}`,
  controlItemBgHover: `${ButtonStatePalette.LIGHT_YELLOW_HOVER}`,
  fontWeightStrong: 500,
  colorTextDescription: `${ButtonStatePalette.DARK_BLUE}`,
  lineHeight: 1.428571428571429,
  marginXS: 8,
  lineWidthBold: 2,
  paddingXXS: 0,
};
