import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="px-5 mb-5">{children}</main>
    </div>
  );
};

export default Layout;
