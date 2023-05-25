import "../style/navigate.css"
import constructorLogo from "../image/constructor-logo.svg" //ლოგო 
//ნავბარის აიქონები
import searchIcon from "../image/search.svg" 
import personIcon from "../image/person.svg"
import shoppingCartIcon from "../image/shopping_cart.svg"
const Navigate = () => {
  return (
    <header  className="navigate-container">
      <img src={constructorLogo} alt="constructor logo" />
      <nav className="navigate-menu">
     {/* Dropdown for Today's Deals */} 
      <select defaultValue="Today’s Deals" >
        <option value="">Today’s Deals</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
      <select defaultValue="Best Sellers">
        <option value="" >Best Sellers</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
      <ul className="navigate-list">
        <li>Customer Service</li>
        <li>New Releases</li>
      </ul>
      </nav>
      <div className="input-container">
       <img className="search-icon" src={searchIcon} alt="search icon"/>
      <input className="search-input" type="text" placeholder="Search Goods ..." />
      </div>
      
      <div className="right-box">
        <img src={personIcon} alt="person Icon" />
        <span className="navbar-right-span">Account</span>
        <img src={shoppingCartIcon} alt="shopping Cart Icon" />
        <span className="navbar-right-span">Bag</span>
      </div>
    </header>
  )
}

export default Navigate