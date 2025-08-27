import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li >
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/about" onClick={() => setMobileToggle(false)}>
        About Us
        </Link>
      </li>

      <li >
        <Link href="/service" onClick={() => setMobileToggle(false)}>
        services
        </Link>
      </li>      

      <li>
        <Link href="/books" onClick={() => setMobileToggle(false)}>
          Books
        </Link>
      </li>
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
