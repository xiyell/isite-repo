export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Community",
      href: "/forum",
    },
    {
      label: "About",
      href: "/about",
    },
    { 
      label: "Announcements",
      href: "/announcements",
    }

  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "My-QR",
      href: "/personalQR",
    },
    {
      label: "Post",
      href: "/communityPost",
    },
    {
      label: "iBot Scanner",
      href: "/qrScanner",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
 
  },
};
