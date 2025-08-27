import { Manrope, Work_Sans, Kalam } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--body-color-font',
});

const work_sans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--body-color-font',
});

const kalam = Kalam({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--heading-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'Kerala Library - Knowledge & Learning Hub',
    template: '%s | Kerala Library - Knowledge & Learning Hub',
  },
  description:
    'Kerala Library is your gateway to knowledge and wisdom. Explore a wide collection of books, journals, and digital resources to inspire learning and research.',
  openGraph: {
    title: 'Kerala Library - Knowledge & Learning Hub',
    description:
      'Discover the best library experience in Kerala with a rich collection of books, study resources, and digital archives. A space to learn, grow, and connect.',
  },
    icons: {
    icon: '/favicon.png',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="any" />
      </head>
      <body className={`${manrope.variable} ${work_sans.variable} ${kalam.variable}`}>
        {children}
      </body>
    </html>
  );
}
