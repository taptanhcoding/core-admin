import { AliasToken, ComponentTokenMap } from 'antd/es/theme/interface';
import { ColorPalette, TextPalette } from 'app:constants';

export const Input: Partial<ComponentTokenMap['Input']> & Partial<AliasToken> = {
  borderRadius: 8,
  colorBgContainerDisabled: ColorPalette.PLATINUM,
  colorBorder: ColorPalette.PLATINUM,
  colorError: ColorPalette.BLOOD_ORANGE,
  colorErrorBorderHover: ColorPalette.BLOOD_ORANGE,
  colorErrorOutline: '',
  colorIcon: ColorPalette.SMOKE,
  colorIconHover: ColorPalette.SMOKE,
  colorPrimary: ColorPalette.QUICKSILVER,
  colorPrimaryActive: ColorPalette.QUICKSILVER,
  colorPrimaryHover: ColorPalette.QUICKSILVER,
  colorText: ColorPalette.SLATE_GRAY,
  colorTextDisabled: `${TextPalette.LEVEL_1}`,
  colorTextPlaceholder: ColorPalette.CADMIUM_GRAY,
  controlOutline: ColorPalette.PLATINUM,
  controlOutlineWidth: 0,
  paddingSM: 17,
  controlPaddingHorizontal: 17,
  controlPaddingHorizontalSM: 13,
  controlHeightSM: 32,
  controlHeight: 40,
  controlHeightLG: 48,
};
