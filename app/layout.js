import "./globals.css";
import { profile } from "../data/content";

export const metadata = {
  title: `${profile.name} · ${profile.role}`,
  description: profile.tagline,
  icons: {
    icon: [{ url: "/favicon.svg?v=2", type: "image/svg+xml" }],
    shortcut: [{ url: "/favicon.svg?v=2", type: "image/svg+xml" }],
    apple: [{ url: profile.image, type: "image/jpeg" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
