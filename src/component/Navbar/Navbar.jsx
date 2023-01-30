import "./Navbar.css";

function Navbar(props) {
  return (
    <div class="nav">
      <input type="checkbox" id="nav-check" />
      <div class="nav-header">
        <div class="nav-title">Vitor's Portfólio</div>
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div class="nav-links">
        {props.sections.map((e, i) => {
          return <a href={e.link}>{e.name}</a>;
        })}
      </div>
    </div>
  );
}

export default Navbar;
