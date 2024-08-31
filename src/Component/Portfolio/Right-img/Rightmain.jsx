import React from 'react'
import Rightside from './Rightside'
import banner1 from '../image/background1.png';
import lalpath from '../image/lalpthlabs.png'
import Leftside from '../Left-img/Leftside';
import Admissify from '../image/admissify-desk.png';

function Rightmain() {
    const data =[
        {
            heading : "ONCQUEST",
            p1 : `Oncquest helps people stay healthy and detect diseases early. They have the best tests and screenings for cancer, diabetes, heart disease, and more`,
            p2 : "AbyM Technology is happy to have worked with them on their website, multilingual mobile app, patient database CMS and other IT solutions. We made their online platform easy and safe to use for patients, doctors, and labs all over India. We wanted to make their website more attractive and user-friendly",
            background:`${banner1}`,
            image1:"https://abym.in/assets/img/post/oncq-tab.png"
        },
        {
            heading : "LALPATHLABS",
            p1 : `When it comes to your health, you deserve the best. That’s why Dr Lal Path Labs is your trusted partner for all your diagnostic and preventive healthcare needs. They have a huge network of labs, centres, and pick-up points all over India. They make it easy and convenient for you to book tests, download reports, and access wellness packages online`,
            p2 : "AbyM Technology is proud to have worked with them on their website and app development, content creation, design, and other IT solutions. We have built a stunning and secure online platform that brings patients, doctors, and labs closer together. We have also made sure their tests and reports are reliable and accurate. We have given their website and app a fresh and user-friendly look",
            background:`${lalpath}`,
            image1:"https://abym.in/assets/img/post/lpl-tab.png"
        },
        {
            heading : "ADMISSIFY",
            p1 : `Admissify is a UK & India-based company that helps students achieve their dreams of studying abroad. They offer guidance and assistance for applying to over 32+ top universities across the world. They also provide services such as alumni chat, scholarship, immigration, and job support`,
            p2 : "AbyM Technology has done its website design and development, app design and development, content development and other IT works. We have created a stunning and user-friendly online platform that simplifies the application process and connects students with counsellors and experts. We have also ensured the security and privacy of the users and their data. We have given their website and app a fresh and attractive look.",
            background:`${Admissify}`,
            image1:"https://abym.in/assets/img/post/admissify-mob.png" 
        },
        {
            heading : "HSBP SALON",
            p1 : `HSBP Salon is a home service beauty parlour that offers salon and beauty services at your doorstep. They have professional and experienced beauticians, hair stylists and makeup artists who can pamper you with services like waxing, facial, manicure, pedicure, hair spa, makeup, hair style, bridal makeup and more`,
            p2 : "AbyM Technology has created a stunning and user-friendly website and app for them that allows you to book appointments, chat with experts and access offers easily. We have also ensured the security and privacy of their data. We have given their website and app a new and appealing look",
            background:`https://abym.in/assets/img/post/hsbp-mob2.png`,
            image1:"https://abym.in/assets/img/post/hsbp-mob1.png" 
        },
        {
            heading : "GO CONTEST",
            p1 : `GoContest is India's top digital contest platform, offering enjoyable and lucrative competitions and tournaments for a range of subjects, including GK, maths, history, and more. Users may easily and swiftly play, win, and get rewards and prizes. Website development, app development, content creation, web/app design, and other IT tasks have all been completed by AbyM Technology`,
            p2 : "We have developed an amazing and captivating online platform that highlights the best in inventiveness and creativity. Additionally, we have made sure that both users' and developers' data is secure and private. We improved the look and usability of their website and mobile app",
            background:`https://abym.in/assets/img/post/gocontest-desk.png`,
            image1:"https://abym.in/assets/img/post/gocontest-lap.png" 
        },
        {
            heading : "VCARE",
            p1 : `VCare is a pioneer in digital health solutions, empowering users and providers to manage and access their health records anytime, anywhere. VCare integrates with the Ayushman Bharat Digital Mission (ABDM) to provide a secure and convenient platform for personal health records (PHR). VCare also offers a comprehensive clinic management system for doctors and providers, helping them improve productivity and health outcomes   `,
            p2 : "AbyM Technology developed VCare’s website and lead generation campaigns, showcasing its innovative and user-centric features. We are proud to partner with VCare in their mission to transform healthcare in India",
            background:`https://abym.in/assets/img/post/vcare-desk.png`,
            image1:"https://abym.in/assets/img/post/vcare-mob.png" 
        },
        {
            heading : "DIVINEBEAUTY",
            p1 : `We created a stunning website for Divine Beauty, a national beauty pageant in India that selects the country’s representatives for Miss Earth and other international contests`,
            p2 : "We used advanced tools and database management to showcase their vision, mission, history, achievements, and events. We also optimized their website for organic searches, increasing their online visibility and reach.",
            background:`https://abym.in/assets/img/post/divinebeauty-desk.png`,
            image1:"https://abym.in/assets/img/post/divinebeauty-tab.png" 
        },
        {
            heading : "ORGANIC KITCHEN",
            p1 : `We designed and developed a user-friendly website for Organic Kitchen, a brand that delivers organic homestyle food in Delhi & NCR. We integrated features such as weekly menu, corporate catering, tiffin services, food lab test reports, and online ordering`,
            p2 : "We also ensured that their website ranks high on organic searches, attracting more customers and generating more revenue",
            background:`${Admissify}`,
            image1:"https://abym.in/assets/img/post/admissify-mob.png" 
        },
        {
            heading : "GLOBE",
            p1 : `GLOBE is a cancer hospital in Lucknow that offers top-quality care to patients with advanced diagnostics and clinical services. GLOBE has a team of expert cancer specialists who are committed to transforming cancer care and improving patient outcomes. GLOBE provides a safe, comfortable, and accessible environment for patients and their families`,
            p2 : "AbyM Technology helped GLOBE to design its UI/UX and manage patients' databases, enhancing its efficiency and performance. We are proud to partner with GLOBE in their noble cause of fighting cancer.",
            background:`https://abym.in/assets/img/post/globe-desk.png`,
            image1:"https://abym.in/assets/img/post/globe-lap.png" 
        },
        {
            heading : "HOLISOL",
            p1 : `HOLISOL is a supply chain organization that offers technology-enabled solutions for various industries. HOLISOL helps customers optimize their operations, reduce costs, and enhance customer satisfaction. HOLISOL has a team of passionate and experienced supply chain professionals who deliver value through innovation and leadership`,
            p2 : "AbyM Technology worked with HOLISOL to design their UI/UX and manage their database, ensuring a smooth and user-friendly experience for their clients and partners. We are delighted to support HOLISOL in its mission to create smart and sustainable supply chains",
            background:`https://abym.in/assets/img/post/holisol-desk.png`,
            image1:"https://abym.in/assets/img/post/holisol-lap.png" 
        }
    ]
  return (
    <div>
      <Rightside 
      head={data[0].heading}
      p1={data[0].p1}
      p2={data[0].p2}
      background={data[0].background}
      image1={data[0].image1}
      />
      <Leftside
       head={data[1].heading}
       p1={data[1].p1}
       p2={data[1].p2}
       background={data[1].background}
       image1={data[1].image1}
      />
      <Rightside 
      head={data[2].heading}
      p1={data[2].p1}
      p2={data[2].p2}
      background={data[2].background}
      image1={data[2].image1}
      />
      <Leftside 
      head={data[3].heading}
      p1={data[3].p1}
      p2={data[3].p2}
      background={data[3].background}
      image1={data[3].image1}
      />
      <Rightside 
       head={data[4].heading}
       p1={data[4].p1}
       p2={data[4].p2}
       background={data[4].background}
       image1={data[4].image1}
      />
      <Leftside 
      head={data[5].heading}
      p1={data[5].p1}
      p2={data[5].p2}
      background={data[5].background}
      image1={data[5].image1}
      />
      <Rightside 
      head={data[6].heading}
      p1={data[6].p1}
      p2={data[6].p2}
      background={data[6].background}
      image1={data[6].image1}
      />
      <Leftside 
      head={data[7].heading}
      p1={data[7].p1}
      p2={data[7].p2}
      background={data[7].background}
      image1={data[7].image1}
      />
      <Rightside 
      head={data[8].heading}
      p1={data[8].p1}
      p2={data[8].p2}
      background={data[8].background}
      image1={data[8].image1}
      />
      <Leftside 
      head={data[9].heading}
      p1={data[9].p1}
      p2={data[9].p2}
      background={data[9].background}
      image1={data[9].image1}
      />
      </div>
  )
}

export default Rightmain
