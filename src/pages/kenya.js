import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";
import { PhotoColumn, PhotoPage, PhotoRow } from "../components/Wrappers";
import PhotoHeader from "../components/PhotoHeader";
import styled from "styled-components";

const KenyaPage = () => {
  return (
    <Layout navbar="back" style={{ backgroundColor: "#3F736E" }}>
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
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </KenyaVideo>
        <PhotoRow>
          <PhotoColumn>
            <StaticImage src="../images/kenya2/sunset.jpg" alt="sunset" />
            <StaticImage src="../images/kenya2/boat.jpg" alt="boat" />
            <StaticImage src="../images/kenya2/giraffes.jpg" alt="giraffes" />
            <StaticImage src="../images/kenya2/tribe4.jpg" alt="maassai men" />
            <StaticImage
              src="../images/kenya2/hippo2.jpg"
              alt="hippo in water"
            />
            <StaticImage
              src="../images/kenya2/student.jpg"
              alt="student with origami"
            />
          </PhotoColumn>
          <PhotoColumn>
            <StaticImage
              src="../images/kenya2/elephant.jpg"
              alt="african elephant"
            />
            <StaticImage
              src="../images/kenya2/tribe2.jpg"
              alt="maassai men and me"
            />
            <StaticImage
              src="../images/kenya2/hearts.jpg"
              alt="origami hearts"
            />
            <StaticImage
              src="../images/kenya2/elephant-family.jpg"
              alt="elephant family walking"
            />
            <StaticImage src="../images/kenya2/class.jpg" alt="students" />
            <StaticImage
              src="../images/kenya2/origami.jpg"
              alt="origami lesson"
            />
          </PhotoColumn>
          <PhotoColumn>
            <StaticImage
              src="../images/kenya2/skull.jpg"
              alt="animal skull on a spike"
            />
            <StaticImage
              src="../images/kenya2/zebras-2.jpg"
              alt="zebras on roadside"
            />
            <StaticImage
              src="../images/kenya2/tribe3.jpg"
              alt="maasai men and me 2"
            />
            <StaticImage
              src="../images/kenya2/hippo.jpg"
              alt="hippo in water 2"
            />
            <StaticImage src="../images/kenya2/lioness.jpg" alt="lioness" />
            <StaticImage src="../images/kenya2/sunset2.jpg" alt="sunset 2" />
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
