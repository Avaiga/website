function Footer() {
  return (
    <footer className="pt-7 px-safe pb-safe-or-7">
      <div className="container flex items-center justify-center">
        <p className="text-center text-sm">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
