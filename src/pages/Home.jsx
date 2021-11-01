import { Link } from "solid-app-router";
import styles from "../App.module.css";
import Layout from "../components/Layout";

function Showcase() {
  return (
    <div className={styles.showcase}>
      <h1>Welcome to E-Bay</h1>
      <p>You needs will be fulfilled here.</p>
      <Link href="/products">
        <button>Shop Now</button>
      </Link>

      <p class="caption">
        <Link href="/login">
          <u>Login</u>
        </Link>{" "}
        to get personalized products.
      </p>
    </div>
  );
}

function Home() {
  return (
    <Layout>
      <Showcase />
    </Layout>
  );
}

export default Home;
