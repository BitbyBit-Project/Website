import React from "react";
import { Auth0Features } from "../components/auth0-features";
import { HeroBanner } from "../components/hero-banner";
import { PageLayout } from "../components/page-layout";
import { Helmet } from "react-helmet";

export const HomePage = () => (
  <PageLayout>
    <Helmet>
      <title>Nursing VR Homepage</title>
    </Helmet>
    <HeroBanner />
    <Auth0Features />
  </PageLayout>
);
