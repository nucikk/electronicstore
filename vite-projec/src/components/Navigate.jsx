import "../style/navigate.css"
import constructorLogo from "../image/constructor-logo.svg"
const Navigate = () => {
  return (
    <div className="navigate-container">
      <img src={constructorLogo} alt="constructor logo" />
      <nav className="navigate-manu">
      <select>
        <option value="" selected disabled>Today’s Deals</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
      <select>
        <option value="" selected disabled>Best Sellers</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
      <ul className="navigate-list">
        <li>Customer Service</li>
        <li>New Releases</li>
      </ul>
      </nav>
    </div>
  )
}

export default Navigate