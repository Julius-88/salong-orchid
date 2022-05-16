import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="hund">
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
};
export default Layout;
