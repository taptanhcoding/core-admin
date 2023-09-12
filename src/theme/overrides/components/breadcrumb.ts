import { AliasToken, ComponentTokenMap } from 'antd/es/theme/interface';
import { ColorPalette } from 'app:constants';

export const Breadcrumb: Partial<ComponentTokenMap['Breadcrumb']> & Partial<AliasToken> = {
  colorTextDescription: ColorPalette.SMOKE,
  colorText: ColorPalette.CADMIUM_GRAY,
  lineHeight: 1.42857143,
  colorBgTextHover: '',
};
