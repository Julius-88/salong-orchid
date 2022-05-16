import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
};
export default Layout;
