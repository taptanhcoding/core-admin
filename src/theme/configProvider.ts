import { ConfigProviderProps } from 'antd/es/config-provider';
import { ThemeConfig } from 'antd/es/config-provider/context';
import viVN from 'antd/lib/locale/vi_VN';
import { components } from './overrides/components';
import { token } from './overrides/token';

const themeConfig: ThemeConfig = {
  token,
  components,
};

export const configProvider: ConfigProviderProps = {
  locale: viVN,
  theme: themeConfig,
};
