import { Link } from "solid-app-router";
import Layout from "../components/Layout";
import bg from "../assets/bg.jpg";

function Showcase() {
  return (
    <div class="center-align showcase">
      <h1>Welcome to E-Bay</h1>
      <p>You needs will be fulfilled here.</p>
      <a href="/products" class="waves-effect waves-light btn">
        Shop Now
      </a>

      <p>
        <Link href="/login">Login </Link>
        to get personalized products.
      </p>
    </div>
  );
}

function Home() {
  return (
    <>
      <div class="homepage">
        <Layout>
          <Showcase />
        </Layout>
      </div>
    </>
  );
}

export default Home;
