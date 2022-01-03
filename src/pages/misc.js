import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";
import { PhotoPage, PhotoRow, PhotoColumn } from "../components/Wrappers";
import PhotoHeader from "../components/PhotoHeader";

const MiscPage = () => {
  return (
    <Layout
      navbar="back"
      style={{
        backgroundColor: "#3d3f57",
      }}
    >
      <PhotoPage>
        <PhotoHeader title="Miscellaneous Photos" />
        <PhotoRow>
          <PhotoColumn>
            <StaticImage
              src="../images/miscellaneous2/crystals.jpg"
              alt="crystals in flask"
            />
            <StaticImage
              src="../images/miscellaneous2/butterfly.jpg"
              alt="butterfly on fruit"
            />
            <StaticImage src="../images/miscellaneous2/bug.jpg" alt="bug" />
            <StaticImage
              src="../images/miscellaneous2/big ben.jpg"
              alt="Big Ben London"
            />
            <StaticImage
              src="../images/miscellaneous2/shipwreck.jpg"
              alt="shipwreck"
            />
            <StaticImage
              src="../images/miscellaneous2/flower.jpg"
              alt="white flower"
            />
            <StaticImage
              src="../images/miscellaneous2/microscope.jpg"
              alt="cricket wing under microscope"
            />
            <StaticImage
              src="../images/miscellaneous2/galaxy-flower.jpg"
              alt="galaxy flower"
            />
            <StaticImage
              src="../images/miscellaneous2/scenery.jpg"
              alt="scenery"
            />
            <StaticImage
              src="../images/miscellaneous2/squirrel.jpg"
              alt="squirrel"
            />
          </PhotoColumn>
          <PhotoColumn>
            <StaticImage
              src="../images/miscellaneous2/Buddha.jpg"
              alt="buddha statue"
            />
            <StaticImage
              src="../images/miscellaneous2/spider.jpg"
              alt="large spider on web"
            />
            <StaticImage
              src="../images/miscellaneous2/landshut.jpg"
              alt="Landshut Germany"
            />
            <StaticImage src="../images/miscellaneous2/fly.jpg" alt="fly" />
            <StaticImage
              src="../images/miscellaneous2/rocks.jpg"
              alt="beach rocks"
            />
            <StaticImage
              src="../images/miscellaneous2/gecko.jpg"
              alt="gecko in bamboo"
            />
            <StaticImage
              src="../images/miscellaneous2/squirrel2.jpg"
              alt="squirrel2"
            />
            <StaticImage
              src="../images/miscellaneous2/yellow-flowers.jpg"
              alt="yellow flowers"
            />
            <StaticImage
              src="../images/miscellaneous2/norway.jpg"
              alt="Norwegian church"
            />
            <StaticImage
              src="../images/miscellaneous2/tulip.jpg"
              alt="tulips in the window"
            />
          </PhotoColumn>
          <PhotoColumn>
            <StaticImage
              src="../images/miscellaneous2/cricket.jpg"
              alt="cricket under blue light"
            />
            <StaticImage
              src="../images/miscellaneous2/Buddha-steps.jpg"
              alt="buddha statue entrance"
            />
            <StaticImage
              src="../images/miscellaneous2/splash.jpg"
              alt="sea spray"
            />
            <StaticImage
              src="../images/miscellaneous2/red-arrows-planes.jpg"
              alt="red arrows flying over Swansea"
            />
            <StaticImage
              src="../images/miscellaneous2/leaf.jpg"
              alt="leaf close up"
            />
            <StaticImage
              src="../images/miscellaneous2/keyhole.jpg"
              alt="eye through keyhole"
            />
            <StaticImage src="../images/miscellaneous2/robin.jpg" alt="robin" />
            <StaticImage
              src="../images/miscellaneous2/spider2.jpg"
              alt="small spider"
            />
            <StaticImage
              src="../images/miscellaneous2/misty.jpg"
              alt="Weimaraner"
            />
            <StaticImage
              src="../images/miscellaneous2/bee.jpg"
              alt="bee on dandelions"
            />
          </PhotoColumn>
        </PhotoRow>
      </PhotoPage>
    </Layout>
  );
};

export default MiscPage;
