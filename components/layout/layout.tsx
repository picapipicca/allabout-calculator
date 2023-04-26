import Nav from "./Nav";

const Layout = (props: any) => {
  return (
    <>
      <Nav />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
