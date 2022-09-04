import { memo } from "react";
import Head from "next/head";

function RenderHead({ title }) {
  return (
    <Head>
      <title>{title} Page</title>
    </Head>
  );
}

export default memo(RenderHead);
