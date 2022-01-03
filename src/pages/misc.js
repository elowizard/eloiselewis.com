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
              src="./../images/miscellaneous/crystals.jpg"
              alt="crystals in flask"
            />
            <StaticImage
              src="./../images/miscellaneous/butterfly.jpg"
              alt="butterfly on fruit"
            />
            <StaticImage src="./../images/miscellaneous/bug.jpg" alt="bug" />
            <StaticImage
              src="./../images/miscellaneous/big ben.jpg"
              alt="Big Ben London"
            />
            <StaticImage
              src="./../images/miscellaneous/shipwreck.jpg"
              alt="shipwreck"
            />
            <StaticImage
              src="./../images/miscellaneous/flower.jpg"
              alt="white flower"
            />
            <StaticImage
              src="./../images/miscellaneous/microscope.jpg"
              alt="cricket wing under microscope"
            />
            <StaticImage
              src="./../images/miscellaneous/galaxy-flower.jpg"
              alt="galaxy flower"
            />
            <StaticImage
              src="./../images/miscellaneous/scenery.jpg"
              alt="scenery"
            />
            <StaticImage
              src="./../images/miscellaneous/squirrel.jpg"
              alt="squirrel"
            />
          </PhotoColumn>
          <PhotoColumn>
            <StaticImage
              src="./../images/miscellaneous/Buddha.jpg"
              alt="buddha statue"
            />
            <StaticImage
              src="./../images/miscellaneous/spider.jpg"
              alt="large spider on web"
            />
            <StaticImage
              src="./../images/miscellaneous/landshut.jpg"
              alt="Landshut Germany"
            />
            <StaticImage src="./../images/miscellaneous/fly.jpg" alt="fly" />
            <StaticImage
              src="./../images/miscellaneous/rocks.jpg"
              alt="beach rocks"
            />
            <StaticImage
              src="./../images/miscellaneous/gecko.jpg"
              alt="gecko in bamboo"
            />
            <StaticImage
              src="./../images/miscellaneous/squirrel2.jpg"
              alt="squirrel2"
            />
            <StaticImage
              src="./../images/miscellaneous/yellow-flowers.jpg"
              alt="yellow flowers"
            />
            <StaticImage
              src="./../images/miscellaneous/norway.jpg"
              alt="Norwegian church"
            />
            <StaticImage
              src="./../images/miscellaneous/tulip.jpg"
              alt="tulips in the window"
            />
          </PhotoColumn>
          <PhotoColumn>
            <StaticImage
              src="./../images/miscellaneous/cricket.jpg"
              alt="cricket under blue light"
            />
            <StaticImage
              src="./../images/miscellaneous/Buddha-steps.jpg"
              alt="buddha statue entrance"
            />
            <StaticImage
              src="./../images/miscellaneous/splash.jpg"
              alt="sea spray"
            />
            <StaticImage
              src="./../images/miscellaneous/red-arrows-planes.jpg"
              alt="red arrows flying over Swansea"
            />
            <StaticImage
              src="./../images/miscellaneous/leaf.jpg"
              alt="leaf close up"
            />
            <StaticImage
              src="./../images/miscellaneous/keyhole.jpg"
              alt="eye through keyhole"
            />
            <StaticImage
              src="./../images/miscellaneous/robin.jpg"
              alt="robin"
            />
            <StaticImage
              src="./../images/miscellaneous/spider2.jpg"
              alt="small spider"
            />
            <StaticImage
              src="./../images/miscellaneous/misty.jpg"
              alt="Weimaraner"
            />
            <StaticImage
              src="./../images/miscellaneous/bee.jpg"
              alt="bee on dandelions"
            />
          </PhotoColumn>
        </PhotoRow>
      </PhotoPage>
    </Layout>
  );
};

export default MiscPage;
