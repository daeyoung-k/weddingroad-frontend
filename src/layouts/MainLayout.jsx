import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";

function MainLayout({ children }) {
  return (
    <div className="app-root">
      <Header />
      <main style={{ minHeight: "80vh", padding: "24px 16px", maxWidth: 960, margin: "0 auto" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
