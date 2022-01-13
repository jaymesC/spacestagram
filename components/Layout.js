import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="">{children}</main>
    </div>
  );
};

export default Layout;
