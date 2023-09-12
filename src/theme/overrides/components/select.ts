import { AliasToken, ComponentTokenMap } from 'antd/es/theme/interface';
import { ButtonStatePalette, ColorPalette, StrokePalette, TextPalette } from 'app:constants';

export const Select: Partial<ComponentTokenMap['Select']> & Partial<AliasToken> = {
  colorBgContainerDisabled: `${StrokePalette.LEVEL_3}`,
  colorBorder: `${StrokePalette.LEVEL_3}`,
  colorSplit: 'rgba(5, 5, 5, 0.06)',
  colorText: `${TextPalette.LEVEL_1}`,
  colorTextPlaceholder: `${TextPalette.LEVEL_3}`,
  colorTextDisabled: `${TextPalette.LEVEL_1}`,
  controlHeightLG: 48,
  controlHeight: 40,
  controlHeightSM: 32,
  controlItemBgActive: `${ButtonStatePalette.LIGHT_YELLOW_HOVER}`,
  controlItemBgHover: `${ButtonStatePalette.LIGHT_YELLOW_HOVER}`,
  controlOutline: ColorPalette.WHITE,
  controlOutlineWidth: 0,
  colorPrimaryHover: `${StrokePalette.LEVEL_3}`,
  controlPaddingHorizontal: 12,
  controlPaddingHorizontalSM: 12,
  fontWeightStrong: 500,
  paddingXXS: 0,
  paddingSM: 12,
  paddingXS: 8,
};
