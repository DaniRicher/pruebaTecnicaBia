import './header.css';
import { DarkModeToggle } from '../../components';

export const Header = () => {
  return (
    <div>
      <div className="header fade-in flex justify-between items-center p-10">
        <h1>Where in the world?</h1>
        <DarkModeToggle/>
      </div>
    </div>
  )
}
