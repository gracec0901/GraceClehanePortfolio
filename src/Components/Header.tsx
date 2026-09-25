import { Link } from "react-router-dom";
import StickyNav from '../Components/StickyNav';
import '../Pages/CSS/Header.css';

export default function Header() {
  return (
    <>
      <header className="newHeader">
        <Link to="/" className="headerLogo">
          g<span className="dot">.</span>
        </Link>
      </header>

      <StickyNav />   {/* <-- FIX: now independent */}
    </>
  );
}
