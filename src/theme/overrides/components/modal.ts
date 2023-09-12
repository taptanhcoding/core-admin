import { AliasToken, ComponentTokenMap } from 'antd/es/theme/interface';
import { ColorPalette, MainPalette, TextPalette } from 'app:constants';

export const Modal: Partial<ComponentTokenMap['Modal']> & Partial<AliasToken> = {
  boxShadow: '0px 8px 36px rgba(0, 0, 0, 0.16)',
  colorText: `${TextPalette.LEVEL_2}`,
  colorTextDescription: `${ColorPalette.SMOKE}`,
  colorTextHeading: `${TextPalette.LEVEL_1}`,
  colorWarning: `${MainPalette.PRIMARY}`,
  fontWeightStrong: 700,
  marginSM: 24,
  colorBgMask: 'rgba(0, 0, 0, 0.3)',
};
