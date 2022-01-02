import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";
import { Center } from "../components/Wrappers";
import PhotoHeader from "../components/PhotoHeader";

const KenyaPage = () => {
  return (
    <Layout navbar="back" style={{ backgroundColor: "#3f736e" }}>
      <Center>
        <PhotoHeader
          title="Kenya"
          description="with Cardiff University School of Chemistry 2018"
        />
        <iframe
          width="800"
          height="600"
          src="https://www.youtube.com/embed/mTVMubQXnPI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <StaticImage src="./../images/Kenya/sunset.JPG" alt="sunset" />
        <StaticImage src="./../images/Kenya/boat.jpg" alt="boat" />
        <StaticImage src="./../images/Kenya/giraffes.JPG" alt="giraffes" />
        <StaticImage src="./../images/Kenya/tribe4.JPG" alt="maassai men" />
        <StaticImage src="./../images/Kenya/hippo2.JPG" alt="hippo in water" />
        <StaticImage
          src="./../images/Kenya/student.JPG"
          alt="student with origami"
        />
        <StaticImage
          src="./../images/Kenya/elephant.jpg"
          alt="african elephant"
        />
        <StaticImage
          src="./../images/Kenya/tribe2.JPG"
          alt="maassai men and me"
        />
        <StaticImage src="./../images/Kenya/hearts.jpg" alt="origami hearts" />
        <StaticImage
          src="./../images/Kenya/elephant-family.JPG"
          alt="elephant family walking"
        />
        <StaticImage src="./../images/Kenya/class.JPG" alt="students" />
        <StaticImage src="./../images/Kenya/origami.JPG" alt="origami lesson" />
        <StaticImage
          src="./../images/Kenya/skull.JPG"
          alt="animal skull on a spike"
        />
        <StaticImage
          src="./../images/Kenya/zebras(2).jpg"
          alt="zebras on roadside"
        />
        <StaticImage
          src="./../images/Kenya/tribe3.JPG"
          alt="maasai men and me 2"
        />
        <StaticImage src="./../images/Kenya/hippo.JPG" alt="hippo in water 2" />
        <StaticImage src="./../images/Kenya/lioness.JPG" alt="lioness" />
        <StaticImage src="./../images/Kenya/sunset2.JPG" alt="sunset 2" />
      </Center>
    </Layout>
  );
};

export default KenyaPage;
