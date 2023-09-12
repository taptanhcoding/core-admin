import { AliasToken, ComponentTokenMap } from 'antd/es/theme/interface';
import { ColorPalette } from 'app:constants';

export const Checkbox: Partial<ComponentTokenMap['Checkbox']> & Partial<AliasToken> = {
  borderRadiusSM: 2,
  fontSize: 14,
  controlInteractiveSize: 14,
  colorText: ColorPalette.CADET_BLUE_GRAY,
};
