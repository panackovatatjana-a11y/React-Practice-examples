
import logo from '../assets/investmentLogo.png';

const Header = ({title, subtitle}) => {
  return (
<header className="header">
  <img 
    src={logo} 
    alt="logo" className="logo"/> 
      <h1>Investment Calculator</h1>
      <h2>{title}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
</header>
  
  );
};

export default Header;
