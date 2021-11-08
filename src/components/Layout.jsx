import { Link } from "solid-app-router";

function Layout(props) {
  const navitems = [
    { title: "Home", link: "/" },
    { title: "Products", link: "/products" },
    { title: "Cart", link: "/cart" },
    { title: "Login", link: "/login" },
  ];

  return (
    <div>
      <nav>
        <div class="container nav-wrapper">
          <a href="#" class="brand-logo">
            E-Bay
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <For each={navitems}>
              {(item, i) => (
                <li>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              )}
            </For>
          </ul>
        </div>
      </nav>
      {props.children}
    </div>
  );
}

export default Layout;
