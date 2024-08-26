import styles from './about.module.css';
import { FaInstagram } from 'react-icons/fa';


const About = () => {
  const sections = [
    {
      title: 'Our Inspiration',
      content: 'AI and machine learning models have tremendously grown in usage due to their advancements in computing power. More and more, the open-source AI community continues to grow and these advanced models are reaching even the hands of hobbyists. Our inspiration for this project comes from the growth of this new technology; we want to create our own model that will detect and identify skin conditions and recommend treatments based off of that. This project also serves as a great learning experience of the both of us.',
    },
    {
      title: 'What It Does',
      content: 'Our model takes a picture of skin and sends that to a machine learning model, which analyzes it for any skin conditions. We feed our model with a bunch of images from a database containing images of certain skin conditions. These labeled images help train the model on what to look for, and when it notices a pattern from what it has seen in training images on a brand new image, then it recognizes which skin condition it could be.',
    },
    {
      title: "What's Next For Dermalyze",
      content: 'We would like to continue developing our model by making the training and pre-processing steps more optimal. We intend to keep this app as accessible as possible because we found that many of the AIs out there are locked behind a paywall. By keeping our app free, we can increase awareness about existing solutions. To maintain our project’s sustainability, we can look into using affiliate links, such as Amazon, to provide users with links to buy products instead of just stating them, allowing us to pocket some money to invest in keeping a server online.',
    },
  ];

  const teamMembers = [
    {
      name: 'Neelesh Chevuri',
      jobTitle: 'Founder & CTO',
      description: 'Neelesh is passionate about artificial intelligence and its applications in everyday life. With a background in computer science, he leads the development of Dermalyze and its technology.',
      image: '/john-doe.jpg', // Replace with actual image path
      instagram: 'https://instagram.com/cyber_neel'
    },
    {
      name: 'Adway Kulkarni',
      jobTitle: 'Medical Researcher',
      description: 'Extremely short',
      image: 'https://www.instagram.com/budwayk/',
      instagram: 'https://www.instagram.com/budwayk/'
       // Replace with actual image path
    },
    {
      name: 'Sameer Agarwal',
      jobTitle: 'Website Development',
      description: 'Description coming soon...',
      image: 'https://www.instagram.com/sam.eer.agarwal/',
      instagram: 'https://www.instagram.com/sam.eer.agarwal/', // Replace with actual image path
    },
    {
      name: 'Murtaza Haque',
      jobTitle: 'Data & Marketing',
      description: 'On September 11th 2001, this man was in the cockpit of Flight 3281 which crashed into the Second Tower, killing 9000 people.',
      image: 'https://www.instagram.com/murtazahaque/',
      instagram: 'https://www.instagram.com/murtazahaque/', // Replace with actual image path
    },
    // Add more team members as needed
  ];

  return (
    <div className={styles.container}>
      <h1 style={{textAlign: 'center'}}>About Dermalyze</h1>
      <div className={styles.grid}>
        {sections.map((section, index) => (
          <div key={index} className={styles.sectionBox}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
      <div style={{padding: 5+'px'}}></div>
      <h1 style={{textAlign: 'center'}} id='team'>Meet the Team</h1>
      <div className={styles.grid}>
      {teamMembers.map((member, index) => (
      <div class="card mb-3" style={{ maxWidth: 540+'px'}}>
        <div class="row g-0">
          <div class="col-md-4">
              <img src={member.image} alt={member.name} className={styles.memberImage} />
          </div>
        <div class="col-md-6">
          <div class="card-body">
            <h5 class="card-title">{member.name}</h5>
            {member.instagram && (
                <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              )}
            <p>{member.jobTitle}</p>
            <p>{member.description}</p>
          </div>
        </div>
        </div>
      </div>
      
      ))}
      </div>
      {/* <div className={styles.grid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.sectionBox}>
            <img src={member.image} alt={member.name} className={styles.memberImage} />
            <h3>{member.name}</h3>
            {member.instagram && (
                <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              )}
            <p>{member.jobTitle}</p>
            <p>{member.description}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default About;
