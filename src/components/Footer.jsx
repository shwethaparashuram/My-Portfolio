const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-card relative border-border mt-2 pt-5 flex">
      {' '}
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};
export default Footer;
