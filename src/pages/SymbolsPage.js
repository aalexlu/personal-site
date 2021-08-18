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
            <br></br>
            ⟵ ⟶
        </p>
        <p>
            syllable: σ
            <br></br>
            unaffiliated mora: μ´
            <br></br>
            ALIGN constraint word: ω
            <br></br>
            if rules identical for values of the same feature: α, β
        </p>
      </Content>
    </div>
  );
}

export default SymbolsPage;
