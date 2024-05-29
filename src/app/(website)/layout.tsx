import { ReactNode } from "react";
import Topbar from "../../components/topbar";
import Header from "../../components/header";
import Footer from "../../components/footer";

const WebsiteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Topbar />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
