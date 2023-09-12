import { AliasToken } from 'antd/es/theme/internal';
import { ColorPalette, FontFamilies } from 'app:constants';
import { mainColor } from 'app:constants/mainColor';

export const token: Partial<AliasToken> = {
  fontFamily: FontFamilies.NUNITO,
  colorText: ColorPalette.SMOKE,
  colorPrimary: ColorPalette[mainColor],
  colorWarning: ColorPalette.YELLOW,
  colorError: ColorPalette.RED,
};
