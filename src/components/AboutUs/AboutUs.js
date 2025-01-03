import React from "react";

const teamMembers = [
  {
    name: "Dr. Jane Smith",
    role: "Founder & CEO",
    image: "/team-member-1.jpg",
  },
  {
    name: "Prof. John Doe",
    role: "Head of Curriculum",
    image: "/team-member-2.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Chief Operations Officer",
    image: "/team-member-3.jpg",
  },
  {
    name: "Michael Chen",
    role: "Lead Instructor",
    image: "/team-member-4.jpg",
  },
];

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="text-white py-16 bg-primary-500">
        <div className="container mx-auto px-4 flex items-center">
          <div className="w-1/2">
            <h1 className="text-4xl font-bold mb-4">About StudyStreak</h1>
            <p className="mb-8 text-primary-200">
              Empowering students to achieve their dreams through expert-led
              test preparation
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 md:mb-8">Our Mission</h2>
            <p className="text-xl mb-6 md:mb-8 leading-relaxed">
              At StudyStreak, we believe that every student deserves the
              opportunity to reach their full potential. Our mission is to
              provide world-class test preparation resources and expert guidance
              to help students achieve their target scores and open doors to
              their dream educational institutions and careers.
            </p>
            <button className=" text-center bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition mt-2 p-3">
              Learn More About Our Approach
            </button>
          </div>
        </div>
      </section>

      {/* <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-purple-100 rounded-full p-4 inline-block mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                {/* <img
                  src={
                    "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="
                  }
                  alt={member.name}
                  className="w-full h-48 object-cover"
                /> */}
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-purple-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of successful students who have achieved their dreams
            with STUDYSTREAK
          </p>
          <button className=" text-center bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition mt-2 p-3">
            Explore Our Courses
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
