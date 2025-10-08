import { Fira_Code as FontMono, Inter as FontSans, Karantina as FontKarantina} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});


export const fontKarantina = FontKarantina({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-karantina",
});
