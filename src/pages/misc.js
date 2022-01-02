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
              src="./../images/Miscellaneous/crystals.jpeg"
              alt="crystals in flask"
            />
            <StaticImage
              src="./../images/Miscellaneous/butterfly.jpg"
              alt="butterfly on fruit"
            />
            <StaticImage src="./../images/Miscellaneous/bug.JPG" alt="bug" />
            <StaticImage
              src="./../images/Miscellaneous/big ben.jpg"
              alt="Big Ben London"
            />
            <StaticImage
              src="./../images/Miscellaneous/shipwreck.jpg"
              alt="shipwreck"
            />
            <StaticImage
              src="./../images/Miscellaneous/flower.jpg"
              alt="white flower"
            />
            <StaticImage
              src="./../images/Miscellaneous/microscope.jpg"
              alt="cricket wing under microscope"
            />
            <StaticImage
              src="./../images/Miscellaneous/galaxy-flower.jpg"
              alt="galaxy flower"
            />
            <StaticImage
              src="./../images/Miscellaneous/scenery.jpg"
              alt="scenery"
            />
            <StaticImage
              src="./../images/Miscellaneous/squirrel.jpg"
              alt="squirrel"
            />
          </PhotoColumn>
          <PhotoColumn>
            <StaticImage
              src="./../images/Miscellaneous/Buddha.jpg"
              alt="buddha statue"
            />
            <StaticImage
              src="./../images/Miscellaneous/spider.jpg"
              alt="large spider on web"
            />
            <StaticImage
              src="./../images/Miscellaneous/landshut.jpg"
              alt="Landshut Germany"
            />
            <StaticImage src="./../images/Miscellaneous/fly.jpg" alt="fly" />
            <StaticImage
              src="./../images/Miscellaneous/rocks.jpg"
              alt="beach rocks"
            />
            <StaticImage
              src="./../images/Miscellaneous/gecko.jpg"
              alt="gecko in bamboo"
            />
            <StaticImage
              src="./../images/Miscellaneous/squirrel2.JPG"
              alt="squirrel2"
            />
            <StaticImage
              src="./../images/Miscellaneous/yellow-flowers.jpg"
              alt="yellow flowers"
            />
            <StaticImage
              src="./../images/Miscellaneous/norway.jpg"
              alt="Norwegian church"
            />
            <StaticImage
              src="./../images/Miscellaneous/tulip.jpg"
              alt="tulips in the window"
            />
          </PhotoColumn>
          <PhotoColumn>
            <StaticImage
              src="./../images/Miscellaneous/cricket.JPG"
              alt="cricket under blue light"
            />
            <StaticImage
              src="./../images/Miscellaneous/Buddha-steps.jpg"
              alt="buddha statue entrance"
            />
            <StaticImage
              src="./../images/Miscellaneous/splash.jpg"
              alt="sea spray"
            />
            <StaticImage
              src="./../images/Miscellaneous/red-arrows.jpg"
              alt="red arrows flying over Swansea"
            />
            <StaticImage
              src="./../images/Miscellaneous/leaf.JPG"
              alt="leaf close up"
            />
            <StaticImage
              src="./../images/Miscellaneous/keyhole.jpg"
              alt="eye through keyhole"
            />
            <StaticImage
              src="./../images/Miscellaneous/robin.jpg"
              alt="robin"
            />
            <StaticImage
              src="./../images/Miscellaneous/spider2.jpg"
              alt="small spider"
            />
            <StaticImage
              src="./../images/Miscellaneous/misty.jpg"
              alt="Weimaraner"
            />
            <StaticImage
              src="./../images/Miscellaneous/bee.jpg"
              alt="bee on dandelions"
            />
          </PhotoColumn>
        </PhotoRow>
      </PhotoPage>
    </Layout>
  );
};

export default MiscPage;
