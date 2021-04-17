import React, { useState } from "react";
import { css } from "@emotion/core";
import ScaleLoader from "react-spinners/ScaleLoader";
import styled from "styled-components";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Load = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffc222");

  return (
    <LoadSec>
      <div className="sweet-loading">
        <ScaleLoader
          color={color}
          loading={loading}
          css={override}
          size={200}
          height={200}
          width={20}
          radius={5}
          margin={7}
        />
      </div>
    </LoadSec>
  );
};

export default Load;
const LoadSec = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
