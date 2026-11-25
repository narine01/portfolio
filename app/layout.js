import "./globals.css";
import { profile } from "../data/content";

export const metadata = {
  title: `${profile.name} · ${profile.role}`,
  description: profile.tagline,
  icons: {
    icon: [{ url: profile.image, type: "image/jpeg" }],
    shortcut: [{ url: profile.image, type: "image/jpeg" }],
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
