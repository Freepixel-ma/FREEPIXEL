import { Fragment, useEffect } from "react";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation, sidebarClick } from "../utils";
import ScrollTop from "./ScrollTop";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import SideBar from "./header/SideBar";
const Layout = ({
  children,
  header,
  footer,
  singleMenu,
  dark,
  hideHeader,
  hideFooter,
}) => {
  useEffect(() => {
    animation();
    sidebarClick();
  }, []);

  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <div className="page-wrapper">
        {!hideHeader && (
          <Header header={header} singleMenu={singleMenu} dark={dark} />
        )}
        <SideBar />
        {children}
        {!hideFooter && <Footer footer={footer} dark={dark} />}
        <ScrollTop />
      </div>
    </Fragment>
  );
};
export default Layout;
