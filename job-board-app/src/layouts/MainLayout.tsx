import React from "react";

export default function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <main>
        <NavBar />
        {children}
        <Footer />
      </main>
    </>
  );
}

function NavBar() {
  return (
    <div>
      <h1>NavBar</h1>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <h2>Footer</h2>
    </div>
  );
}
