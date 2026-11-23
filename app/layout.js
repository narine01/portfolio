import "./globals.css";
import { profile } from "../data/content";

export const metadata = {
  title: `${profile.name} · ${profile.role}`,
  description: profile.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
