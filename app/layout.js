import "./globals.css";

export const metadata = {
  title: "Practice Studio",
  description: "A small space to practice, experiment, and build."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
