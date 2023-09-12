import { useState } from "react";

import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "routes";
import { ConfigProvider } from 'antd';
import { configProvider } from "./theme/configProvider";

function App() {

  return (
    <>
      <ConfigProvider {...configProvider}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ConfigProvider>
    </>
  );
}

export default App;
