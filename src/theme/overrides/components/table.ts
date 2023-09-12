import { AliasToken, ComponentTokenMap } from 'antd/es/theme/interface';
import { ColorPalette } from 'app:constants';

export const Table: Partial<ComponentTokenMap['Table']> & Partial<AliasToken> = {
  colorTextHeading: ColorPalette.SLATE_GRAY,
  colorText: ColorPalette.CADET_BLUE_GRAY,
  padding: 11,
  fontFamily: "Roboto, sans-serif",
};
