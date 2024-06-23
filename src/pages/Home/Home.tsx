import "./homeStyles.css";
import { Container } from "@mui/material";
import {
  AboutUs,
  ContactForm,
  Footer,
  Header,
  Services,
} from "../../Components";

export function Home() {
  return (
    <Container>
      <Header />
      <AboutUs />
      <Services />
      <ContactForm />
      <Footer />
    </Container>
  );
}
