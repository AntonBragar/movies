import React from 'react';
import {Rings} from "react-loader-spinner";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loader = () => {
    return (
        <LoaderWrapper>
            <Rings
                type="Puff"
                color="#ec8712"
                height={200}
                width={200}
                timeout={3000}
            />
        </LoaderWrapper>
    );
};

export default Loader;