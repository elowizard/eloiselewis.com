import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";
import { PhotoColumn, PhotoPage, PhotoRow } from "../components/Wrappers";
import PhotoHeader from "../components/PhotoHeader";
import styled from "styled-components";

const KenyaPage = () => {
  return (
    <Layout navbar="back" style={{ backgroundColor: "#3f736e" }}>
      <PhotoPage>
        <PhotoHeader
          title="Kenya"
          description="with Cardiff University School of Chemistry 2018"
        />
        <KenyaVideo>
          <iframe
            width="800"
            height="600"
            src="https://www.youtube.com/embed/mTVMubQXnPI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </KenyaVideo>
        <PhotoRow>
          <PhotoColumn>
            <StaticImage src="./../images/Kenya/sunset.JPG" alt="sunset" />
            <StaticImage src="./../images/Kenya/boat.jpg" alt="boat" />
            <StaticImage src="./../images/Kenya/giraffes.JPG" alt="giraffes" />
            <StaticImage src="./../images/Kenya/tribe4.JPG" alt="maassai men" />
            <StaticImage
              src="./../images/Kenya/hippo2.JPG"
              alt="hippo in water"
            />
            <StaticImage
              src="./../images/Kenya/student.JPG"
              alt="student with origami"
            />
          </PhotoColumn>
          <PhotoColumn>
            <StaticImage
              src="./../images/Kenya/elephant.jpg"
              alt="african elephant"
            />
            <StaticImage
              src="./../images/Kenya/tribe2.JPG"
              alt="maassai men and me"
            />
            <StaticImage
              src="./../images/Kenya/hearts.jpg"
              alt="origami hearts"
            />
            <StaticImage
              src="./../images/Kenya/elephant-family.JPG"
              alt="elephant family walking"
            />
            <StaticImage src="./../images/Kenya/class.JPG" alt="students" />
            <StaticImage
              src="./../images/Kenya/origami.JPG"
              alt="origami lesson"
            />
          </PhotoColumn>
          <PhotoColumn>
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
            <StaticImage
              src="./../images/Kenya/hippo.JPG"
              alt="hippo in water 2"
            />
            <StaticImage src="./../images/Kenya/lioness.JPG" alt="lioness" />
            <StaticImage src="./../images/Kenya/sunset2.JPG" alt="sunset 2" />
          </PhotoColumn>
        </PhotoRow>
      </PhotoPage>
    </Layout>
  );
};

export default KenyaPage;

const KenyaVideo = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 800px;
  text-align: center;
  margin: 0 auto;

  ::after {
    display: block;
    content: "";
    padding-top: 75%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
