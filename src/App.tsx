import React from "react";

import { observer } from "mobx-react";

import OpsPage from "./pages/ops/Ops.page";

const App: React.FC = () => {
  return (
    <div>
      <OpsPage />
    </div>
  );
};

export default observer(App);
