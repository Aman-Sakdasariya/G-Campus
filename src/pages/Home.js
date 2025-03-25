import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import college_img1 from "../resources/images/College-img1.jpg";
import Logo from "../resources/images/cap-1266204.svg";

function Home() {
  const [StudentCount, setStudentCount] = useState({
    Total: 12,
    BCOM: 4,
    BBA: 4,
    BCA: 4,
  });

  const [selectedCourse, setSelectedCourse] = useState("");
  const navigate = useNavigate();
  const [featuredStudents, setFeaturedStudents] = useState([]);
  const [socialPosts, setSocialPosts] = useState([]);
  const [activeMapPoint, setActiveMapPoint] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === featuredStudents.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? featuredStudents.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-slide effect
  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [autoSlide, featuredStudents.length]);

  useEffect(() => {
    // Fetch student count
    setTimeout(() => {
      loader()
        .then((response) => {
          console.log(response);
          setStudentCount(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);

    // Mock data for featured students
    setFeaturedStudents([
      {
        id: 1,
        name: "Rahul Sharma",
        course: "BCA",
        achievement: "Winner of National Coding Competition",
        bio: "Passionate about web development and AI technologies.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      },
      {
        id: 2,
        name: "Priya Patel",
        course: "BBA",
        achievement: "Student Entrepreneur of the Year",
        bio: "Founder of campus startup EcoPack that provides sustainable packaging solutions.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      },
      {
        id: 3,
        name: "Amit Singh",
        course: "BCOM",
        achievement: "Best Paper Award at National Commerce Conference",
        bio: "Specializes in financial analysis and market research.",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      },
    ]);

    // Mock data for social feed
    setSocialPosts([
      {
        id: 1,
        platform: "twitter",
        username: "@gcampus_bca",
        content:
          "Just completed our final project presentations! So proud of my team #GCampus #BCA #FinalYear",
        timestamp: "2 hours ago",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80",
      },
      {
        id: 2,
        platform: "instagram",
        username: "gcampus_bba",
        content:
          "Our annual business fest was a huge success! Over 500 participants this year 🎉 #GCampusLife #BBA",
        timestamp: "5 hours ago",
        image:
          "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80",
      },
      {
        id: 3,
        platform: "facebook",
        username: "G-Campus Official",
        content:
          "Congratulations to our BCOM students for winning the national accounting challenge!",
        timestamp: "1 day ago",
        image:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80",
      },
    ]);
  }, []);

  const handleSearch = () => {
    if (selectedCourse) {
      navigate(`/courses/${selectedCourse}`);
    }
  };

  // Campus map points data
  const mapPoints = [
    {
      id: 1,
      title: "Computer Lab",
      description: "Where our BCA students develop cutting-edge applications",
      coordinates: { x: 30, y: 40 },
      students: featuredStudents.filter((s) => s.course === "BCA").slice(0, 2),
    },
    {
      id: 2,
      title: "Business Center",
      description: "Home to our BBA program's case study competitions",
      coordinates: { x: 60, y: 30 },
      students: featuredStudents.filter((s) => s.course === "BBA").slice(0, 2),
    },
    {
      id: 3,
      title: "Commerce Wing",
      description: "Where our BCOM students analyze market trends",
      coordinates: { x: 45, y: 60 },
      students: featuredStudents.filter((s) => s.course === "BCOM").slice(0, 2),
    },
  ];

  const getPlatformIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case "twitter":
        return (
          <svg
            className="w-5 h-5 text-blue-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        );
      case "instagram":
        return (
          <svg
            className="w-5 h-5 text-pink-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        );
      default:
        return (
          <svg
            className="w-5 h-5 text-blue-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
          </svg>
        );
    }
  };

  return (
    <div>
      <main>
        {/* Hero section */}
        <section className="px-8 pt-6 pb-2 text-center md:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center">
              <img className="aspect-square w-1/6" src={Logo} alt="logo" />

              <h1 className="text-center text-3xl font-semibold text-heading md:max-w-4xl lg:text-5xl xl:text-6xl">
                Welcome to G-Campus: Premier Institution for Business and
                Technology Education
              </h1>
              <p className="mt-6 max-w-3xl text-xl">
                G-Campus offers transformative learning experiences through our
                BCA, BCom, and BBA programs, preparing students for leadership
                roles in the digital economy.
              </p>
              <form className="mt-6 flex flex-col gap-2 sm:flex-row">
                <div>
                  <label
                    htmlFor="email"
                    className="sr-only block text-sm font-semibold text-heading"
                  >
                    Courses
                  </label>
                  <input
                    id="Courses"
                    name="courses"
                    type="text"
                    list="courses"
                    placeholder="Select course"
                    onChange={(event) => setSelectedCourse(event.target.value)}
                    className="block  w-full rounded-xl border-2 border-layer-3 bg-muted-1 px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                  />
                  <datalist id="courses">
                    <option value="BCOM" />
                    <option value="BBA" />
                    <option value="BCA" />
                  </datalist>
                </div>
                <button
                  onClick={handleSearch}
                  type="submit"
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl border-none bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:text-white dark:focus:ring-white/80"
                >
                  Search
                </button>
              </form>
            </div>
            <div className="mt-12 md:px-2">
              <img
                className="h-auto w-full rounded-lg"
                src={college_img1}
                alt="college"
              />
            </div>
          </div>
        </section>

        {/* Student Showcase Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Meet Our Distinguished Students
            </h2>
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {featuredStudents.map((student) => (
                    <div
                      key={student.id}
                      className="min-w-full px-4 flex-shrink-0"
                    >
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 mb-6">
                        <div className="flex flex-col md:flex-row items-center">
                          <div className="md:w-1/3 mb-4 md:mb-0">
                            <img
                              src={student.image}
                              alt={student.name}
                              className="w-48 h-48 object-cover rounded-full mx-auto"
                            />
                          </div>
                          <div className="md:w-2/3 md:pl-8">
                            <h3 className="text-2xl font-bold text-gray-800">
                              {student.name}
                            </h3>
                            <p className="text-indigo-600 font-medium">
                              {student.course} Student
                            </p>
                            <p className="mt-2 text-gray-600">{student.bio}</p>
                            <p className="mt-2 font-semibold">
                              Achievement: {student.achievement}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-5 top-[40%] transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md ml-2 z-10 hover:bg-gray-100"
              >
                <svg
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-5 top-[40%] transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md mr-2 z-10 hover:bg-gray-100"
              >
                <svg
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <div className="flex justify-center mt-4 space-x-2">
                {featuredStudents.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentSlide === index ? "bg-indigo-600" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial section */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 pt-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Transformative Undergraduate Programs
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                G-Campus provides industry-aligned education through our
                flagship programs: the{" "}
                <Link
                  to="/courses/bcom"
                  className="text-indigo-500 hover:underline font-semibold"
                >
                  Bachelor of Commerce (BCOM)
                </Link>
                for comprehensive business education, the{" "}
                <Link
                  to="/courses/bca"
                  className="text-indigo-500 hover:underline font-semibold"
                >
                  Bachelor of Computer Applications (BCA)
                </Link>
                for cutting-edge technology training, and the{" "}
                <Link
                  to="/courses/bba"
                  className="text-indigo-500 hover:underline font-semibold"
                >
                  Bachelor of Business Administration (BBA)
                </Link>
                for developing future business leaders. Our curriculum combines
                academic rigor with practical experience.
              </p>
            </div>
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-calculator text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    {StudentCount.BCOM}
                  </h2>
                  <p className="leading-relaxed">BCOM</p>
                </div>
              </div>

              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-briefcase text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    {StudentCount.BBA}
                  </h2>
                  <p className="leading-relaxed">BBA</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-laptop text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    {StudentCount.BCA}
                  </h2>
                  <p className="leading-relaxed">BCA</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    {StudentCount.Total}
                  </h2>
                  <p className="leading-relaxed">TOTAL</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="px-2 pt-20 md:p-10">
          <div className="mx-auto max-w-6xl space-y-8 md:space-y-20">
            {/* Dynamic Student Showcase */}
            <div className="">
              <div className="flex flex-col rounded-3xl bg-layer-2 p-8">
                <h2 className="bg-gradient-to-r font-sans text-2xl font-semibold text-gradient gradient-peach md:text-3xl">
                  Student Excellence Showcase
                </h2>
                <p className="mt-4 text-lg text-justify">
                  Our students consistently achieve remarkable success in
                  academics, competitions, and entrepreneurial ventures. These
                  profiles highlight the exceptional talent we nurture across
                  all our programs.
                </p>
              </div>
              <div className="rounded-3xl bg-layer-2 p-8 md:col-span-2 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                  {featuredStudents.slice(0, 2).map((student) => (
                    <div
                      key={student.id}
                      className="bg-white rounded-xl shadow-md overflow-hidden"
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3">
                          <img
                            src={student.image}
                            alt={student.name}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <h3 className="text-xl font-bold text-gray-800">
                            {student.name}
                          </h3>
                          <p className="text-indigo-600">{student.course}</p>
                          <p className="mt-2 text-gray-600">{student.bio}</p>
                          <p className="mt-2 text-sm font-semibold">
                            Achievement: {student.achievement}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Campus Map */}
            <div className="lg:grid flex flex-col-reverse gap-6 lg:grid-cols-3">
              <div className="rounded-3xl bg-layer-2 p-8 md:col-span-2">
                <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
                  {/* Placeholder for campus map image */}
                  <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80"
                    alt="Campus Map"
                    className="w-full h-full object-cover"
                  />

                  {/* Interactive points on the map */}
                  {mapPoints.map((point) => (
                    <button
                      key={point.id}
                      className={`absolute w-8 h-8 rounded-full ${
                        activeMapPoint === point.id
                          ? "bg-indigo-700"
                          : "bg-indigo-500"
                      } hover:bg-indigo-700 transition`}
                      style={{
                        left: `${point.coordinates.x}%`,
                        top: `${point.coordinates.y}%`,
                      }}
                      onClick={() =>
                        setActiveMapPoint(
                          activeMapPoint === point.id ? null : point.id
                        )
                      }
                      aria-label={point.title}
                    />
                  ))}

                  {/* Info panel for active point */}
                  {activeMapPoint && (
                    <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg">
                      <h3 className="text-xl font-bold text-gray-800">
                        {mapPoints.find((p) => p.id === activeMapPoint).title}
                      </h3>
                      <p className="mt-2 text-gray-600">
                        {
                          mapPoints.find((p) => p.id === activeMapPoint)
                            .description
                        }
                      </p>

                      <h4 className="mt-4 font-semibold">Featured Students:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        {mapPoints
                          .find((p) => p.id === activeMapPoint)
                          .students.map((student) => (
                            <div
                              key={student.id}
                              className="flex items-center space-x-3"
                            >
                              <img
                                src={student.image}
                                alt={student.name}
                                className="w-12 h-12 rounded-full object-cover"
                              />
                              <div>
                                <p className="font-medium">{student.name}</p>
                                <p className="text-sm text-gray-500">
                                  {student.achievement}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col rounded-3xl bg-layer-2 p-8">
                <h2 className="bg-gradient-to-r font-sans text-2xl font-semibold text-gradient gradient-peach md:text-3xl">
                  Explore Our State-of-the-Art Campus
                </h2>
                <p className="mt-4 text-lg text-justify">
                  Discover our world-class facilities that foster innovation and
                  learning. Each location on our campus is designed to provide
                  students with the optimal environment for academic and
                  professional growth.
                </p>
                <button
                  onClick={() => setActiveMapPoint(null)}
                  className="mt-4 inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
                >
                  Reset Map
                </button>
              </div>
            </div>

            {/* Live Social Feed */}
            <div className="">
              <div className="flex flex-col rounded-3xl bg-layer-2 p-8">
                <h2 className="bg-gradient-to-r font-sans text-2xl font-semibold text-gradient gradient-peach md:text-3xl">
                  Campus Life & Events
                </h2>
                <p className="mt-4 text-lg text-justify">
                  Stay updated with the vibrant G-Campus community through our
                  social channels. Follow us to see student achievements, campus
                  events, and academic highlights.
                </p>
                <div className="mt-4 flex space-x-4">
                  <span className="text-sm font-medium">Follow us:</span>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800">
                    Twitter
                  </a>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800">
                    Instagram
                  </a>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800">
                    Facebook
                  </a>
                </div>
              </div>

              <div className="rounded-3xl bg-layer-2 p-8 md:col-span-2 ">
                <div className="space-y-4">
                  {socialPosts.map((post) => (
                    <div
                      key={post.id}
                      className="p-4 bg-white rounded-lg shadow"
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        {getPlatformIcon(post.platform)}
                        <span className="font-medium">{post.username}</span>
                        <span className="text-gray-500 text-sm">
                          {post.timestamp}
                        </span>
                      </div>
                      <p className="mb-3">{post.content}</p>
                      {post.image && (
                        <img
                          src={post.image}
                          alt="Social media post"
                          className="w-full h-48 object-cover rounded"
                        />
                      )}
                      <div className="mt-3 flex space-x-4 text-sm text-gray-500">
                        <button className="flex items-center space-x-1 hover:text-indigo-600">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                          <span>Like</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-indigo-600">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                          <span>Comment</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-indigo-600">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                            />
                          </svg>
                          <span>Share</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

async function loader() {
  const data = { Total: 12, BCOM: 4, BBA: 4, BCA: 4 };
  try {
    const response = await axios.get(
      "http://localhost:5000/students/coursewisestudents"
    );
    return response.data.data || data;
  } catch (err) {
    console.error("Error fetching data:", err);
    return data;
  }
}

export default Home;
