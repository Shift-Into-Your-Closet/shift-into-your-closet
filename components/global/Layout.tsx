import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";
import SidesheetContext, {
  useSidesheetProvider,
} from "../../context/SidesheetContext";
import { Sidesheet } from "../../components/Sidesheet/Sidesheet";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const sidesheet = useSidesheetProvider();

  return (
    <div className="bg-zinc-800">
      <Head>
        <title>Shift's Closet</title>
      </Head>
      <SidesheetContext.Provider value={sidesheet}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Sidesheet />
      </SidesheetContext.Provider>
    </div>
  );
}
