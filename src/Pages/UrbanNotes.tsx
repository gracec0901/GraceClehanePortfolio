import ProjectTemplate from "../Components/ProjectTemplate";
import "../Pages/CSS/ProjectTemplate.css";
import './CSS/Home.css';
import '../App.css';
import './CSS/AnSiopa.css';


import UNPhones2 from '/Images/Project One/UNPhones2.png';
import UNPortfolio from '/Images/Project One/UNPortfolio.jpg';
import UNPoster from '/Images/Project One/UNPoster.jpg';
import UNDisplay from '/Images/Project One/UNDisplay.jpg';
import PFI1 from '/Images/Project One/PFI1.jpeg';
import UNPhone3 from '/Images/Project One/UNPhone3.png';
import UNPhone1 from '/Images/Project One/UNPhone1.png';
import UNPhone4 from '/Images/Project One/UNPhone4.png';
import UNStatue from '/Images/Project One/UNStatue.png';
import UNHand from '/Images/Project One/UNHand.png';
import ixuxhover from '/Images/Homepage/ixuxhover.png';
import ixdnotehover from '/Images/Homepage/ixdnotehover.png';

export default function UrbanNotes() {
  return (
    <ProjectTemplate
      introTitle="Urban Notes"
      introText="Final Year Project"
      year={["2024"]}
      scope={["App Design", "User Studies", "Graphic Design", "AR Design", "Figma"]}
      discipline={["BA Creative Digital Media at Munster Technological University"]}
      sections={[
        {
          title: "Overview",
          text: (<>For my Final Year Project, I independently designed an application aimed towards local citizens and tourists, allowing them to explore and interact with the street art of Cork independently and learn the stories behind the art and the artists. Growing up, I have always admired the street art of Cork and I wanted to have an engaging and interesting way to interact and to give back to the talented artists that give us these powerful works of art, beautifying our city. I wanted to create a product that allowed the user to easily access this information in an interactive and engaging way while also being able to open up a discussion about the art with the rest of the community.</>),
          media: [
            { type: "image", src: UNStatue },
            { type: "image", src: UNHand },
            { type: "image", src: UNPhone4 }
          ]
        },
        {
          title: "Outcome",
          text: (<>Urban Notes is a community-based application where the user benefits from the immersive design of interacting with the artworks, gaining a knowledge into the cultural significance and stories of the art and the artists gain exposure from the art, through the AR stories showing their name and links to appropriate websites such as portfolios or web shops.<br/><br/>
                The aim behind this project is to bridge the disconnect we have with art that is telling our stories. Urban Notes aims to open up an engagement between the public realm and the community.<br/><br/>
                Urban Notes is based in Cork City, but this application has the capabilities to be expanded beyond Cork City and be used in cities all across Ireland and even Europe. Urban Notes is a tool for exploration and engagement which is a function that can be expanded on to include more domains.</>),
          media: [
            { type: "image", src: UNPortfolio },
            { type: "image", src: UNPoster },
            { type: "image", src: UNDisplay }
          ]
        },
        {
          title: "Technology",
          text: (<>Urban Notes works off of AR technology to function the personalised notes, by using Lens Studio, an AR filter was built to mimic how a mural artist would spray paint the wall and from here developed the idea that the user would use their hand to draw their chosen note and this would then be put on the art piece.<br /><br />I wanted to add this functionality as AR is a growing technology and through testing other apps utilising AR I wanted to implement this into the application to maximise engagement and interest. The AR can be seen through the pre-made AR stories, bringing the art to life telling its story and its message. This function is useful to provide context and history behind the piece to both the local citizens and visitors to the city. Then the virtual notes using Lens Studio and Unity adds a level of interactivity and immersion, inviting users to leave their own interpretation and message on the art in a non damaging way as it's completely digital.</>),
          media: [
            { type: "image", src: UNPhone1 },
            { type: "image", src: UNPhones2 },
            { type: "image", src: UNPhone3 }
          ]
        },
        {
          title: "Prize for Innovation",
          text: (<>IUrban Notes was honoured to be shortlisted for the MTU Prize for Innovation in 2024. The experience was incredibly rewarding, as it provided the opportunity to pitch the project to potential investors and connect with fellow young entrepreneurs, gaining insights into their inspiring ideas.<br/><br/>
                It was pitched to possible investors and the prize judges in which valuable advice and insights were gained into how the project can be made more valuable to customers. With the support from customers such as Fáilte Ireland and the Arts Council, it can be used as a tool for general cultural exploration and engagement, for example it can be used for music or tourist attractions.</>),
          media: [
            { type: "video", src: `${import.meta.env.BASE_URL}videos/UNVid.mp4` },
            { type: "image", src: PFI1 },
            { type: "video", src: `${import.meta.env.BASE_URL}videos/UNVid2.mp4` }
            
          ]
        },
      ]}

      prevProject={{ to: "/InteractionDesign", label: "Previous project", image: ixuxhover }}
      nextProject={{ to: "/ImmersiveDesign", label: "Next project", image: ixdnotehover }}
    />
  );
}