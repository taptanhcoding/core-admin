import { AliasToken, ComponentTokenMap } from 'antd/es/theme/interface';

import { ColorPalette } from 'app:constants/colors';

export const Message: Partial<ComponentTokenMap['Message']> & Partial<AliasToken> = {
  colorSuccess: ColorPalette.FOREST_GREEN,
  colorInfo: ColorPalette.COBALT_BLUE,
  colorError: ColorPalette.RED,
};
