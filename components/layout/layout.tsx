import MainHeader from "./mainHeader";
import Nav from "./Nav";

const Layout = (props: any) => {
  return (
    <>
      {/* <MainHeader /> */}
      <Nav/>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
