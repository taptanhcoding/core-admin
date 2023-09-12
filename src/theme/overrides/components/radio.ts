import { AliasToken, ComponentTokenMap } from 'antd/es/theme/interface';
import { ColorPalette } from 'app:constants';

export const Radio: Partial<ComponentTokenMap['Radio']> & Partial<AliasToken> = {
  colorText: ColorPalette.CADET_BLUE_GRAY,
  fontSize: 14,
  fontWeightStrong: 400,
  lineHeight: 20 / 14,
};
