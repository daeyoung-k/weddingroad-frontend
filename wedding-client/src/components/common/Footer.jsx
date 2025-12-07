function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #e2e8f0", padding: "16px", textAlign: "center", fontSize: 12, color: "#718096" }}>
      © {new Date().getFullYear()} WeddingMatch. All rights reserved.
    </footer>
  );
}

export default Footer;
