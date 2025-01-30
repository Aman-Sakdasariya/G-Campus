import React from "react";
import ImageGridView from "../../components/ImageGridView";
import MemberTableView from "../../components/MemberTableView";

const committeeMemberArray = [
  {
    name: "DR. AYUSH P. DESAI",
    designation: "PRINCIPAL",
    batch: "BOTH",
    connect: "AYUSHDESAI@GCAMPUS.AC.IN",
  },
  {
    name: "DR. SANJU M. KAYASTH",
    designation: "VICE-PRINCIPAL",
    batch: "BATCH-1",
    connect: "SANJUKAYASTH@GCAMPUS.AC.IN",
  },
  {
    name: "DR. KISHORE R. GHADIYALI",
    designation: "BCA-CO-ORDINATOR",
    batch: "BATCH-2",
    connect: "KISHOREGHADIYALI@GCAMPUS.AC.IN",
  },
  {
    name: "DR. KOMAL M. MEHTA",
    designation: "CO-ORDINATOR",
    batch: "BATCH-1",
    connect: "https://www.linkedin.com/in/AYUSH-p-desai-92720b191/",
  },
  {
    name: "DR. PIYUSH A. NAIK",
    designation: "CO-ORDINATOR",
    batch: "BATCH-2",
    connect: "https://www.linkedin.com/in/AYUSH-p-desai-92720b191/",
  },
  {
    name: "MR. MANOJ M. SHAH",
    designation: "MEMBER",
    batch: "BATCH-1",
    connect: "https://www.linkedin.com/in/AYUSH-p-desai-92720b191/",
  },
];

const stepImageData = [
  {
    title: "STEP GLOBAL LEADERSHIP SUMMIT",
    subTitle: "New York City, USA",
    description:
      "An exclusive global summit bringing together influential leaders, innovators, and change-makers to discuss and shape the future of education, technology, and community development.",
  },
  {
    title: "TECH TALKS",
    subTitle: "Bangalore, India",
    description:
      "A technology-driven event bringing together industry experts, developers, and students to discuss the latest trends, innovations, and breakthroughs in the tech world.",
  },
  {
    title: "CULTURAL FESTIVAL",
    subTitle: "Delhi, India",
    description:
      "A vibrant celebration of India’s diverse cultural heritage, featuring performances, workshops, exhibitions, and food stalls showcasing the richness of Indian traditions.",
  },
  {
    title: "SPORTS CHALLENGE",
    subTitle: "Mumbai, India",
    description:
      "An inter-college sports competition designed to bring together athletes from various colleges to compete in a range of sports, promoting fitness and teamwork.",
  },
  {
    title: "INNOVATION SUMMIT",
    subTitle: "Hyderabad, India",
    description:
      "A conference focused on the latest innovations in science, technology, and engineering. Industry leaders and entrepreneurs share insights, fostering creativity and future progress.",
  },
  {
    title: "ENVIRONMENTAL LEADERSHIP FORUM",
    subTitle: "Chennai, India",
    description:
      "An event focusing on sustainability, climate change, and environmental conservation. Bringing together environmental leaders and activists to discuss actionable solutions for a greener future.",
  },
];

const Step = () => {
  return (
    <section className="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
      <h1 className="text-5xl font-semibold text-center my-10">
        THE STEP CLUB
      </h1>

      <MemberTableView data={committeeMemberArray} DESIGNATION BATCH />
      <ImageGridView
        title="GLIMPSES OF ACTIVITIES"
        description="Glimpses of activities include outdoor pursuits like hiking, camping, and sports, as well as indoor hobbies such as reading, cooking, and crafting. Social engagements, work-related tasks, educational pursuits, volunteer efforts, creative endeavors, and fitness activities also contribute to people's lifestyles and interests."
        data={stepImageData}
      />
    </section>
  );
};

export default Step;
