import { Link } from "solid-app-router";
import styles from "../App.module.css";

function Layout(props) {
  const navitems = [
    { title: "Home", link: "/" },
    { title: "Products", link: "/products" },
    { title: "Cart", link: "/cart" },
    { title: "Login", link: "/login" },
  ];

  return (
    <div>
      <div className={styles.nav}>
        <h3>Brand Name</h3>
        <ul>
          <For each={navitems}>
            {(item, i) => (
              <li>
                <Link href={item.link}>{item.title}</Link>
              </li>
            )}
          </For>
        </ul>
      </div>
      {props.children}
    </div>
  );
}

export default Layout;
