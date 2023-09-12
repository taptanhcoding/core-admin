import { AliasToken, ComponentTokenMap } from 'antd/es/theme/interface';
import { ColorPalette, ShadowPalette } from 'app:constants';

export const Dropdown: Partial<ComponentTokenMap['Dropdown']> & Partial<AliasToken> = {
  borderRadiusLG: 4,
  boxShadowSecondary: ShadowPalette.SHADOW_8,
  controlHeight: 40,
  controlItemBgHover: ColorPalette.IVORY,
  controlPaddingHorizontal: 12,
  lineHeight: 20 / 14,
  paddingXXS: 0,
};
