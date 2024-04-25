import Layout from "./Layout/Layout";
import Navbar from "./Navbar/Navbar";
import SeccionIntroduccion from "./SeccionIntroduccion/SeccionIntroduccion";
import BenefitsSection from "./BenefitsSection/BenefitsSection";
import SecondarySection from "./SecondarySection/SecondarySection";
import OurFeaturesSection from "./OurFeaturesSection/OurFeaturesSection";
import PageFooter from "./PageFooter/PageFooter";
import {makeStyles} from "@material-ui/core";
import theme from "../styles/theme";

const useStyles = makeStyles((theme)=>({
  root:{
    display:"flex",
    flexDirection: "column",
    justifyContent: "center",
  }
}))
const LandingPage = () => {
  const classses = useStyles(theme)
  return (
    <div className={classses.root}>
         <Layout>
            <Navbar />
            <SeccionIntroduccion />
            <BenefitsSection />
            <SecondarySection />
            <OurFeaturesSection />
            <PageFooter />
         </Layout>
    </div>
  );
}
export default LandingPage;
