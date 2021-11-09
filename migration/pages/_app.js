import Layout from "../components/layouts/layout"
import "../styles/globals.css"
import "prismjs/themes/prism-tomorrow.css"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
