import { AliasToken, ComponentTokenMap } from 'antd/es/theme/interface';
import { ButtonStatePalette, StrokePalette, TextPalette } from 'app:constants';

export const Switch: Partial<ComponentTokenMap['Switch']> & Partial<AliasToken> = {
  colorPrimaryHover: `${ButtonStatePalette.PRIMARY_HOVER}`,
  colorText: `${TextPalette.LEVEL_2}`,
  colorTextQuaternary: `${StrokePalette.LEVEL_3}`,
  colorTextTertiary: `${StrokePalette.LEVEL_2}`,
  lineHeight: 20 / 14,
};
