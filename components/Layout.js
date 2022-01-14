import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="px-3 mb-5">{children}</main>
    </div>
  );
};

export default Layout;
