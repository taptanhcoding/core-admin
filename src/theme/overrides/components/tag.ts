import { AliasToken, ComponentTokenMap } from 'antd/es/theme/interface';
import { ColorPalette } from 'app:constants';

export const Tag: Partial<ComponentTokenMap['Tag']> & Partial<AliasToken> = {
  lineHeight: 1.3333333333,
  fontSize: 12,
  borderRadiusSM: 1000,
  lineWidth: 1,
  marginXS: 0,
  colorError: ColorPalette.FIRE_ENGINE_RED,
  colorErrorBg: ColorPalette.LIGHT_RED,
  colorErrorBorder: ColorPalette.FIRE_ENGINE_RED,
  colorSuccess: ColorPalette.GREEN,
  colorSuccessBg: ColorPalette.LIGHT_GREEN,
  colorSuccessBorder: ColorPalette.GREEN,
  colorWarning: ColorPalette.YELLOW,
  colorWarningBg: ColorPalette.LIGHT_YELLOW,
  colorWarningBorder: ColorPalette.YELLOW,
  colorInfo: ColorPalette.BLUE,
  colorInfoBg: ColorPalette.LIGHT_BLUE,
  colorInfoBorder: ColorPalette.BLUE,
  colorBorder: ColorPalette.DARK_GRAY,
  colorText: ColorPalette.DARK_GRAY,
  colorFillAlter: ColorPalette.GRAY_WHITE,
};
