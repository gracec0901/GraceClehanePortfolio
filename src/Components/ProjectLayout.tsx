type ProjectLayoutProps = {
  menu: React.ReactNode;
  children: React.ReactNode;
};

export default function ProjectLayout({ menu, children }: ProjectLayoutProps) {
  return (
    <section className="projectPage">
      <nav className="projectMenu">{menu}</nav>
      <div className="projectContent">{children}</div>
    </section>
  );
}
