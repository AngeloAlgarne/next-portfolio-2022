import Link from 'next/link';
import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Angelo Algarne</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Instruments</Link>
          </li>
          <li>
            <Link href='/new-instrument'>Add New Instrument</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
