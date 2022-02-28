import React from "react";
import Meta from "components/Meta";
import HeroSection from "components/HeroSection";
import ClientsSection from "components/ClientsSection";
import FeaturesSection from "components/FeaturesSection";
import TestimonialsSection from "components/TestimonialsSection";
import NewsletterSection from "components/NewsletterSection";
import SectionHeader from "components/SectionHeader";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <HeroSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Social Layer for Rally Communities"
        subtitle="Intimate creator social token communities need a space to organize and socialize"
        image="https://hackathon.fwb.help/_next/image?url=%2Fassets%2Fflow-logo.png&w=1920&q=75"
        buttonText="Test it with any existing Rally token"
        buttonColor="primary"
        buttonPath="/ALLIE"
      />
    </>
  );
}

export default IndexPage;
