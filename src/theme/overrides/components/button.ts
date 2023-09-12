import { AliasToken, ComponentTokenMap } from 'antd/es/theme/interface';
import { ColorPalette } from 'app:constants';
import { mainColor } from 'app:constants/mainColor';

export const Button: Partial<ComponentTokenMap['Button']> & Partial<AliasToken> = {
  colorPrimary: ColorPalette[mainColor],
  colorPrimaryBg: ColorPalette[mainColor],
  colorPrimaryBgHover: ColorPalette[mainColor],
  borderRadius: 8,
  borderRadiusSM: 4,
  colorPrimaryActive: ColorPalette.RUSTY_ORANGE,
  colorPrimaryHover: ColorPalette.BRONZE_ORANGE,
  controlHeight: 40,
  controlHeightLG: 48,
  controlHeightSM: 32,
  fontSize: 16,
  fontSizeLG: 16,
  colorError: ColorPalette.FIRE_ENGINE_RED,
  colorErrorHover: ColorPalette.FIREBRICK,
  colorErrorActive: ColorPalette.BLOOD_RED,
  colorErrorBorder: ColorPalette.FIRE_ENGINE_RED,
  colorErrorBorderHover: ColorPalette.FIREBRICK,
  colorLink: ColorPalette.OCHRE,
  paddingContentHorizontal: 16,
  paddingXS: 12,
  // colorText: ColorPalette.OCHRE,
  // colorBorder: ColorPalette.OCHRE,
  colorTextDisabled: ColorPalette.PEACH_PUFF,
  colorBgTextHover: 'unset',
  colorLinkHover: ColorPalette.BRONZE_ORANGE,
  colorLinkActive: ColorPalette.RUSTY_ORANGE,
  fontWeightStrong: 600,
  lineHeight: 1.5,
};
