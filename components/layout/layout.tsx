import { Fragment } from "react";

import MainHeader from "./mainHeader";
import Nav from "./Nav";

const Layout = (props: any) => {
  return (
    <Fragment>
      {/* <MainHeader /> */}
      <Nav/>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
