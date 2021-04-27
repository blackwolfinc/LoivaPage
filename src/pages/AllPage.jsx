import React from "react";
import { Page1 } from "./Page1/Page1";
import { Page2 } from "./Page2/Page2";
import { Page3 } from "./Page3/Page3";
import { Endpage } from "./Page4/Endpage";



export const AllPage = () => {
  return (
    <>
      <Page1 />
      <Page2 />
      <Page3 />
    <Endpage/>
    </>
  );
};
