import React from "react";
import OpsItem from "./components/ops-item/OpsItem.component";

import { opsItem } from "./common/OpsItemClass";

const App: React.FC = () => {
  return <div>
      <OpsItem body={opsItem.body} title={opsItem.title} buttonName={opsItem.buttonName} buttonAction={opsItem.buttonAction} />
  </div>;
};

export default App;