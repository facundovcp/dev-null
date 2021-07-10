import React from "react";
import RootLayout from "./src/components/RooLayout";
require("prismjs/themes/prism-twilight.css");
export const wrapRootElement = ({ element }) => (
  <RootLayout>{element}</RootLayout>
);
