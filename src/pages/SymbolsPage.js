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
        <p>
            syllable: σ
            unaffiliated mora: μ´
            if rules identical for values of the same feature: α, β
            for ALIGN constraint: ω
        </p>
      </Content>
    </div>
  );
}

export default SymbolsPage;
