"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import '@/styles/hero.css';
import { describe } from "node:test";
interface Tasks {
  title: string;
  image: string;
  description: string[];
}
const Task1 = {
  title: 'Jaclyn',
  image:'/images/profiles/profile1.jpg',
  description: ['3 years of experience working as a VA for HVAC businesses', 'Proficient with House Call Pro and Quickbooks', 'Holder of 5 Udemy Certifications']
}

const Task2 = {
  title: 'Adriel',
  image:'/images/profiles/profile2.jpg',
  description: ['5 years of experience working with trades companies', 'Proficient with MotionOps, House Call Pro, Quickbooks, Joist, and ChatGPT']}
const Task3 = {
  title: 'Julius',
  image:'/images/profiles/profile3.jpeg',
  description: ['4 years of experience in digital marketing for HVAC businesses', 'Proficient with Buffer, Figma, Final Cut Pro, and many more']}
const Task4 = {
  title: 'Alicia',
  image:'/images/profiles/profile4.jpg',
  description: ['6 years of experience as VA for construction and plumbing companies', 'Proficient with House Call Pro, Quickbooks, Google Suite, and ChatGPT']}
const Task5 = {
  title: 'Irene',
  image:'/images/profiles/profile5.jpg',
  description: ['7 years of experience as a back office operator for garbage collection company', 'Proficient with House Call Pro, Quickbooks, Google Suite, and ChatGPT']}
const Task6 = {
  title: 'Julianne',
  image:'/images/profiles/profile6.jpg',
  description: ['7 years of experience as a team lead for operations outsorucing for consturction companies', 'Proficient with House Call Pro, Jobber, Quickbooks, Google Suite, and ChatGPT']}
  
const StaffingProfiles = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState('');
  const [tasks, setTasks]= useState<Tasks[]>([Task1, Task2,Task3, Task4, Task5, Task6])
  const words = ["microinfluencers", "nanoinfluencers", "UGC creators", "KOL creators"];
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000); // Change word every 3 seconds
    
        return () => clearInterval(intervalId);
      }, []);
  
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <section
        className="overflow-hidden mt-11 py-12 flex flex-col xl:px-10"
      >
        <div className="xl:mx-12 xl:bg-primary rounded-3xl py-0 lg:py-12">
          <div className="w-full flex flex-col items-center px-10 lg:px-15 py-3 mb-2">
            <h1 className="text-4xl mb-4 xl:mb-2 text-center text-primary xl:text-darkgreen dark:text-white leading-none">
              Some of our talented office managers
            </h1>
            <p className="text-xl text-center text-primary xl:text-darkgreen leading-none">
              from a pool of <span className="text-secondary">over 50+ experts.</span>
            </p>
            <button
              aria-label="get started button"
              onClick={()=>{window.location.href="/contact"}}
              className="waitlist mt-6 mb-5 lg:mb-0 sm:text-md flex xs:w-3/4 items-center px-4 justify-center rounded-full bg-cream py-2.5 text-darkgreen duration-300 ease-in-out hover:bg-blackho dark:bg-btndark md:w-1/3 dark:hover:bg-blackho lg:text-lg"
            >
              Find one for your business!
            </button>
          </div>
          <div className="hidden md:flex w-full flex overflow-x-auto overflow-y-hidden gap-4 px-0 lg:px-15 py-3 pb-10 no-scrollbar2" style={{
            WebkitOverflowScrolling: "touch", // Smooth scrolling for mobile
          }}>
            {tasks
              .map((task, index) => (
                <div
                  key={index}
                  className="flex flex-col shadow-md bg-cream dark:bg-gray-800 flex-shrink-0"
                  style={{
                    width: "400px", // Set the card width
                    transition: "transform 0.2s ease-in-out", // Smooth animation
                    borderRadius: "25px"
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <div className="relative" style={{ height: "250px"}}>
                    <Image
                      src={task.image}
                      alt="Jaclyn"
                      layout="fill" // Makes the image fill its container
                      objectFit="cover" // Ensures the image covers the container without distortion
                      objectPosition="top"
                      style={{
                        borderRadius: '25px'
                      }}
                      className="rounded-t-2xl px-2 py-2 rounded-3xl" // Optionally round the top corners of the image
                    />
                  </div>
                  <div style={{height:'1px', backgroundColor:'white', width:'100%', opacity:'10%'}}></div>
                  <div className="w-full flex flex-row justify-between items-center px-6">
                    <h3 className="mt-4 text-2xl text-darkgreen font-bold dark:text-white w-4/5">
                      {task.title}
                    </h3>
                  </div>
                  <div className="px-6 py-6">
                    {task.description.map((item, index) => (
                      <li key={index} className="flex font-light items-center mb-2 gap-6">
                        {item}
                      </li>
                    ))}
                  </div>
                </div>
              ))}
             
          </div>
          <div className="flex md:hidden w-full flex overflow-x-auto overflow-y-hidden gap-4 px-0 lg:px-15 py-3 pb-10 no-scrollbar2" style={{
            WebkitOverflowScrolling: "touch", // Smooth scrolling for mobile
          }}>
            {tasks
              .map((task, index) => (
                <div
                  key={index}
                  className="flex flex-col shadow-md bg-cream dark:bg-gray-800 flex-shrink-0"
                  style={{
                    width: "290px", // Set the card width
                    transition: "transform 0.2s ease-in-out", // Smooth animation
                    borderRadius: "25px"
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <div className="relative" style={{ height: "250px"}}>
                    <Image
                      src={task.image}
                      alt="Jaclyn"
                      layout="fill" // Makes the image fill its container
                      objectFit="cover" // Ensures the image covers the container without distortion
                      objectPosition="top"
                      style={{
                        borderRadius: '25px'
                      }}
                      className="rounded-t-2xl px-2 py-2 rounded-3xl" // Optionally round the top corners of the image
                    />
                  </div>
                  <div style={{height:'1px', backgroundColor:'white', width:'100%', opacity:'10%'}}></div>
                  <div className="w-full flex flex-row justify-between items-center px-6">
                    <h3 className="mt-4 text-2xl text-darkgreen font-bold dark:text-white w-4/5">
                      {task.title}
                    </h3>
                  </div>
                  <div className="px-6 py-6">
                    {task.description.map((item, index) => (
                      <li key={index} className="flex font-light items-center mb-2 gap-6">
                        {item}
                      </li>
                    ))}
                  </div>
                </div>
              ))}
             
          </div>
          <div className="flex flex-col items-center mt-8 px-8 lg:px-0 text-center lg:text-start">
            <h1 className="text-3xl text-cream xl:text-darkgreen mb-3">Not the talent you're looking for?</h1>
            <p className="font-light text-cream xl:text-darkgreen">Don't worry we have 100s more to choose from. If none of them fit, we'll hire on the spot.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default StaffingProfiles;
