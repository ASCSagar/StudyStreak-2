import React from "react";

const Lesson = () => {
  return (
    <section id="" class="block block-webinar block-webinar-home-block">
      <section class="td-classes py-8">
        <div class="container mx-auto text-center">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">
            Join our live lessons for advice from the experts
          </h2>
          <p class="caption mb-12 text-gray-600">
            Build your confidence in all IELTS skills and prepare for studying
            abroad with our daily live lessons
          </p>
          <div class="flex flex-wrap -mx-4">
            <div class="w-full sm:w-1/3 px-4 mb-8">
              <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <div class="lesson-type bg-blue-500 text-white py-2 px-4 max-w-xs mx-auto text-start font-semibold rounded-b-lg mb-1">
                  Orientation
                </div>
                <a href="#" class="block relative">
                  <img
                    src="images/shutterstock_583424317.jpg"
                    alt="Current IELTS Speaking Test Questions &amp; Topics"
                    class="w-full h-48 object-cover"
                  />
                  <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 class="text-white font-bold text-lg">IELTS-Demo</h3>
                  </div>
                </a>
                <div class="p-6">
                  <ul class="text-gray-700 mb-4 space-y-1">
                    <li>All about 4 Modules</li>
                    <li>Paper Style</li>
                    <li>IELTS Test Settings</li>
                    <li>IDP Certified Faculties</li>
                    <li>Anytime Demo</li>
                    <li>Flexible Timings</li>
                    <li>60+ hours video lessons</li>
                    <li class="font-semibold text-green-500">Free</li>
                  </ul>
                  <button
                    type="button"
                    class="join w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                    data-toggle="modal"
                    data-target="#myModal1"
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>

            <div class="w-full sm:w-1/3 px-4 mb-8">
              <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <div class="lesson-type bg-blue-500 text-white py-2 px-4 max-w-xs mx-auto text-center font-semibold rounded-b-lg">
                  Study Abroad Counselling
                </div>
                <a href="#" class="block relative">
                  <img
                    src="images/charts-data-desk-669615.jpg"
                    alt="Current IELTS Speaking Test Questions &amp; Topics"
                    class="w-full h-48 object-cover"
                  />
                  <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 class="text-white font-bold text-lg">
                      UK/Canada/USA/Aus/NZ
                    </h3>
                  </div>
                </a>
                <div class="p-6">
                  <ul class="text-gray-700 mb-4 space-y-1">
                    <li>Eligibility Assessment</li>
                    <li>Admission Process</li>
                    <li>About Country</li>
                    <li>Documents Required</li>
                    <li>Upcoming Intakes</li>
                    <li>Costs and Scholarships</li>
                    <li>Languages: English/Gujarati/Hindi</li>
                    <li class="font-semibold text-green-500">Free</li>
                  </ul>
                  <button
                    type="button"
                    class="join w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                    data-toggle="modal"
                    data-target="#myModal"
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Lesson;
