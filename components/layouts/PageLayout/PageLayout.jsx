import { Footer, Navbar } from "@components/templates";

const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
