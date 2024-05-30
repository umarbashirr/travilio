import { ReactNode } from "react";
import Topbar from "../../components/topbar";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ScrollToTop from "@/components/scroll-to-top";

const WebsiteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Topbar />
      <Header />
      {children}
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
