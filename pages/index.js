import Hero from "../components/landing/hero";
import Layout from "../components/layout";

const Home = () => {
  return (
    <>
      <Layout home={true}>
        <Hero />
        
        {/*<SectionTitle
          pretitle="Game Library Benefits"
          title=" Why should you use this App">
          A game library manager app helps you efficiently organize and categorize your game collection, 
          centralizing games from multiple platforms for easy access. It enhances game discovery with 
          recommendations and upcoming release notifications, optimizing your gaming experience.
        </SectionTitle>
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
        <SectionTitle
          pretitle="Watch a video"
          title="Learn how to fullfil your needs">
          This section is to highlight a promo or demo video of your product.
          Analysts says a landing page with video has 3% more conversion rate. So,
          don&apos;t forget to add one. Just like this.
        </SectionTitle>
        <Video />
        <SectionTitle
          pretitle="Testimonials"
          title="Here's what our customers said">
          Testimonails is a great way to increase the brand trust and awareness.
          Use this section to highlight your popular customers.
        </SectionTitle>
        <Testimonials />
        <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
          Answer your customers possible questions here, it will increase the
          conversion rate as well as support or chat requests.
        </SectionTitle>
        <Faq />
        <Cta />
        <Footer />*/}
      </Layout>
      
    </>
  );
}

export default Home;