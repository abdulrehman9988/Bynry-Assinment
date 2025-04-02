import React from 'react';


const profiles = [
  {
    id: 1,
    name: "Abdul Rehman Gharade",
    photo: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    profession: "Software Engineer",
    description:"Develops and maintains software applications. Works with programming languages to build solutions. Collaborates with teams to enhance software performance.",
    location: { lat:28.6139, lng:77.2090 }
  },
  {
    id: 2,
    name: "Ismail Saldulkar",
    photo: "https://media.istockphoto.com/id/1285124274/photo/middle-age-man-portrait.jpg?s=612x612&w=0&k=20&c=D14m64UChVZyRhAr6MJW3guo7MKQbKvgNVdKmsgQ_1g=",
    profession: "Frontend Developer",
    description:"Designs and builds user interfaces using HTML, CSS, and JavaScript. Focuses on responsive and interactive web experiences. Works with frameworks like React and Angular.",
    location: { lat: 19.0760, lng: 72.8777 }
  },
  {
    id: 3,
    name: "Ritesh Ram",
    photo: "https://cdn.pixabay.com/photo/2022/09/08/15/16/cute-7441224_1280.jpg",
    profession: "Backend Developer",
    description:"Manages server-side logic and databases for applications. Works with technologies like Node.js, Django, and SQL. Ensures security and scalability of systems.",
    location: { lat: 12.9716, lng: 77.5946}
  },
  {
    id: 4,
    name: "Sana Sharif",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s",
    profession: "Full Stack Developer",
    description:"Handles both frontend and backend development. Works with a wide range of technologies to build complete web applications. Ensures seamless integration between client and server.",
    location: { lat: 13.0827, lng: 80.2707}
  },{
    id: 5,
    name: "DevOps Engineer",
    photo: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    profession: "DevOps Engineer",
    description:"Bridges the gap between development and IT operations. Automates deployment, monitoring, and infrastructure management. Works with tools like Docker, Kubernetes, and CI/CD pipelines.",
    location: { lat: 17.3850, lng: 78.4867 }
  },
  {
    id: 6,
    name: "Priyanka chogle",
    photo: "https://marketplace.canva.com/EAFqNrAJpQs/2/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-nHZ1TkZ0aGk.jpg",
    profession: "Cloud Architect",
    description:"Designs and manages cloud-based solutions for businesses. Works with AWS, Azure, or Google Cloud to ensure scalability and security. Helps companies transition to cloud infrastructure.",
    location: { lat: 22.5726, lng: 88.3639 }
  },
  {
    id: 7,
    name: "Asma halde",
    photo: "https://thumbs.dreamstime.com/b/profile-picture-smiling-indian-female-employee-profile-picture-smiling-millennial-indian-female-employee-posing-office-198022033.jpg",
    profession: "Data Scientist",
    description:"Analyzes complex data to find patterns and insights. Uses machine learning and statistical models to make predictions. Works with Python, R, and big data tools.",
    location: { lat: 23.0225, lng: 72.5714}
  },
  {
    id: 8,
    name: "Zubiha Panker",
    photo: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    profession: "Cybersecurity Analyst",
    description:"Protects systems from cyber threats and vulnerabilities. Monitors networks for suspicious activity and implements security measures. Works with firewalls, encryption, and ethical hacking.",
    location: { lat: 18.5204, lng: 73.8567 }
  },
  {
    id: 9,
    name: "Maryam Solkar",
    photo: "https://media.istockphoto.com/id/2060433249/photo/photo-of-young-girl-wearing-t-shirt-isolated-yellow-background-stock-photo.jpg?s=612x612&w=0&k=20&c=vizngrIwOsmm5nVIG_018_GwUyIwD7npUVIX0PyFq1U=",
    profession: "UI/UX Designer",
    description:"Creates user-friendly interfaces and experiences for digital products. Conducts research to improve usability and accessibility. Works with tools like Figma, Adobe XD, and Sketch.",
    location: { lat: 26.9124, lng: 75.7873 }
  },
  {
    id: 10,
    name: "Sufyan Halde",
    photo: "https://c8.alamy.com/comp/2GY2P66/new-job-profile-portrait-of-junior-manager-young-professional-in-formalwear-professional-man-2GY2P66.jpg",
    profession: "AI/ML Engineer",
    description:"Develops artificial intelligence and machine learning models. Works on projects like chatbots, recommendation systems, and automation. Uses TensorFlow, PyTorch, and deep learning algorithms",
    location: { lat: 26.8467, lng: 80.9462}
  }
  ,
  {
    id: 11,
    name: "Talha Anjum",
    photo: "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?s=612x612&w=0&k=20&c=w8SlKv-4u6xYyU07CXeBRvfW6F0iYx-a7HR2ChM8ZbU=",
    profession: "Database Administrator (DBA)",
    description:"Manages and optimizes databases for performance and security. Works with SQL, NoSQL, and cloud databases. Ensures data integrity and backup management.",
    location: { lat: 23.2599, lng: 77.4126 }
  },
  {
    id: 12,
    name: "Salman ghratkar",
    photo: "https://www.shutterstock.com/image-photo/happy-mature-male-business-leader-600nw-2118840614.jpg",
    profession: "Game Developer",
    description:"Designs and builds video games using engines like Unity or Unreal. Works on graphics, physics, and AI for immersive experiences. Uses C++, C#, or JavaScript for development.",
    location: { lat: 17.6868, lng: 83.2185 }
  }
  

];

const ProfileList = ({ onSelect }) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {profiles.map((profile) => (
        <div className="col" key={profile.id}>
          <div className="card text-center shadow-sm">
            <img src={profile.photo} className="card-img-top mx-auto mt-3 rounded-circle" alt={profile.name} style={{width:'150px' ,height:'150px',objectFit:"cover" }} />
            <div className="card-body">
              <h5 className="card-title">{profile.name}</h5>
              <p className="card-text">{profile.profession}</p>
              <button type='button' className='btn btn-primary' onClick={(event) => onSelect(profile, event)}>Summary</button>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
