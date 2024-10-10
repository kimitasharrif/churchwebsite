import React from 'react';
import '../App.css'; // Unified styling
import home from '../assets/bg/mountain.jpg';

function Home() {
  return (
    <>
      <div className="homelogo">
        <img src={home} alt="welcome home" className="home-logo" />
      </div>
      <div className="section home-section">
        <h1>Welcome to ALL NATIONS-PEFA CHURCH KAYOLE B</h1>
        <p>We are so glad you're here. Learn more about us and join our community.</p>
     
        <h2>About Our Church</h2>
        <p>
          Welcome to All Nations-PEFA Church Kayole B, a vibrant community dedicated to empowering individuals and families through faith, fellowship, and service. Nestled in the heart of Kayole, we are committed to nurturing spiritual growth and building strong, resilient families within our community. At All Nations-PEFA Church, we believe in creating a welcoming environment where everyone, regardless of their background, can experience the love of Christ and grow in their faith.
          Our passionate pastors and dedicated leaders work tirelessly to provide engaging worship services, transformative teachings, and meaningful outreach programs that address the needs of our community. We strive to foster a spirit of love, compassion, and unity among our members, encouraging them to share their gifts and talents for the glory of God.
        </p>
        <p>
          Whether you are seeking a place to connect with others, grow spiritually, or find support during life's challenges, All Nations-PEFA Church offers a variety of programs designed to meet your needs. From dynamic youth ministries and empowering women's groups to impactful community service initiatives and inspiring worship experiences, we are here to walk alongside you on your faith journey.
        </p>
        <p>Join us as we worship, learn, and serve together, creating a brighter future for ourselves and our community through the power of God’s love.</p>
        <p>Our church is a place of worship, fellowship, and outreach. We believe in bringing the love of Christ to our community and the world.</p>
        <h3>Mission and Vision</h3>
        <p>Our mission is to spread the Gospel and to serve others with the love of Jesus Christ.</p>
        <h3>Leadership Team</h3>
        <ul>
          <li>Senior Pastor: Peter Ndambuki</li>
          <li>Associate Pastor: William Wasonga</li>
          <li>Youth Pastor: Tom Brown</li>
        </ul>
      </div>
    </>
  );
}

export default Home;
