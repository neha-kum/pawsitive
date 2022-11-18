import React from "react";
import Team from "../components/Team";
import styles from "../styles/Team.module.css";

const TeamPage = () => {
  return (
    <>
      <div class={`${styles.profiles} px-4`}>
        <Team
          name='Prasanna'
          role='Frontend Developer'
          url={"/pp.jpg"}
          socialLink={"https://twitter.com/prasannaj_dev"}
        />
        <Team
          name='Rahul'
          role='UI/UX Designer'
          url='/photo.jpeg'
          socialLink={"https://twitter.com/rahul3526"}
        />
        <Team
          name='Saurabh'
          role='Backend Developer'
          url='/photo.jpeg'
          socialLink={"https://twitter.com/saurabh17999"}
        />
        <Team
          name='Neha'
          role='NFT Artist'
          url='/photo.jpeg'
          socialLink={"https://twitter.com/saurabh17999"}
        />
      </div>
    </>
  );
};

export default TeamPage;
