import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <header>
      <h1>Wernher Magnus Maximilian Freiherr von Braun</h1>
    </header>
    <main>{children}</main>
    <footer>
      <p>
        Content sourced from <a href="https://de.wikipedia.org/wiki/Wernher_von_Braun" target="_blank">Wikipedia</a>.
      </p>
    </footer>
  </div>
);

export default Layout;
