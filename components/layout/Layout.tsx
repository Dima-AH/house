import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

function Layout({ children }: { children: React.ReactNode }) {
    const styles = { minHeight: "700px" };
  return (
    <>
      <Header />
      <div style={styles}>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
