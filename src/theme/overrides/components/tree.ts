import { AliasToken, ComponentTokenMap } from 'antd/es/theme/interface';
import { ButtonStatePalette, ColorPalette, StrokePalette, TextPalette } from 'app:constants';

export const Tree: Partial<ComponentTokenMap['Tree']> & Partial<AliasToken> = {
  borderRadiusSM: 2,
  colorPrimaryHover: `${ButtonStatePalette.PRIMARY_HOVER}`,
  colorBgContainerDisabled: `${ButtonStatePalette.PRIMARY_DISABLED}`,
  colorBorder: `${StrokePalette.LEVEL_3}`,
  controlItemBgHover: '',
  controlItemBgActive: '',
  colorText: `${TextPalette.LEVEL_1}`,
  colorTextDisabled: ColorPalette.WHITE,
  colorWhite: ColorPalette.WHITE,
  controlInteractiveSize: 14,
  controlHeightSM: 20,
  lineHeight: 20 / 14,
};
