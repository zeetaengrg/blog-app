import { PageLayout } from "@components/layouts";
import "@styles/globals.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
};

export default MyApp;
