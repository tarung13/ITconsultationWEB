import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            At Talentship Global Advisory Forum, we believe that every
            individual possesses unique talents, and every venture holds
            untapped potential. We are a nonprofit startup dedicated to
            harnessing human capabilities and utilizing them for the greater
            good of society. Our mission is to empower individuals,
            organizations, and communities by providing expert advisory
            services, fostering collaboration, and envisioning a future where
            everyone can thrive.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
