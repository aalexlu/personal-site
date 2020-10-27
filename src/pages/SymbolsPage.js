import React from "react";

import Header from "../components/Header/Header";
import Content from "../components/Content/Content";

function SymbolsPage(props) {
  return (
    <div>
      <Header title={props.title} subTitle={props.subTitle} text={props.text} />

      <Content>
        <p>
            ← → ↑ ↓
        </p>
        <p>
            ⟵ ⟶
        </p>
      </Content>
    </div>
  );
}

export default SymbolsPage;
