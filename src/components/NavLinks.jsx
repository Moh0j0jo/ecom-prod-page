const Navlink = (props) => {
  return (
    <>
      <div className={`navbar ${props.param ? "active" : ""}`}>
        <ul className="bar">
          <li className="lg:hidden">
            <span className="cursor-pointer" onClick={props.callParentFunction}>
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="#69707D"
                  fillRule="evenodd"
                />
              </svg>
            </span>
          </li>
          <li className="lg:relative"><a  className="menu-link" href="http://" target="_blank" rel="noopener noreferrer">Collections</a></li>
          <li className="lg:relative"><a  className="menu-link" href="http://" target="_blank" rel="noopener noreferrer">Men</a></li>
          <li className="lg:relative"><a  className="menu-link" href="http://" target="_blank" rel="noopener noreferrer">Woman</a></li>
          <li className="lg:relative"><a  className="menu-link" href="http://" target="_blank" rel="noopener noreferrer">About</a></li>
          <li className="lg:relative"><a  className="menu-link" href="http://" target="_blank" rel="noopener noreferrer">Contact</a></li>

        </ul>
      </div>
      <div className={
          props.param ? "openMenuSideBackground" : "closeMenuSideBackground "
        }
      ></div>
    </>
  );
};

export default Navlink;
