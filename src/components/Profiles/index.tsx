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

const StaffingProfiles = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState('');
  const [tasks, setTasks]= useState<Tasks[]>([Task1, Task2,Task3])
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
        className="overflow-hidden pb-20 xl:pb-25 flex flex-col"
        style={{
          backgroundImage: "url(/images/profiles/background.jpg)",
          backgroundSize: "cover", // Ensures the background image covers the entire div
          backgroundPosition: "center", // Centers the background image
          backgroundRepeat: "no-repeat", // Prevents the background from repeating
        }}
      >
        <div className="w-full flex flex-col items-center px-15 mb-12">
          <h1 className="text-4xl mb-2 text-center text-black dark:text-white ">
            Some of our <span className="text-primary font-bold">talented virtual assistants</span> 
          </h1>
          <p className="text-xl text-center ">
            from a pool of over 50+ experts.
          </p>
          <button
            aria-label="get started button"
            onClick={()=>{window.location.href="/contact"}}
            className="waitlist mt-6 sm:text-md flex xs:w-3/4 items-center px-4 justify-center rounded-full bg-primary py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark md:w-1/3 dark:hover:bg-blackho lg:text-lg"
          >
            Find one for your business!
          </button>
        </div>
          <div className="w-full mt-10 flex overflow-x-auto overflow-y-hidden gap-4 px-15 py-15 no-scrollbar" style={{
            WebkitOverflowScrolling: "touch", // Smooth scrolling for mobile
          }}>
            {tasks
              .map((task, index) => (
                <div
                  key={index}
                  className="rounded-2xl flex flex-col shadow-md bg-white dark:bg-gray-800 flex-shrink-0"
                  style={{
                    width: "500px", // Set the card width
                    transition: "transform 0.2s ease-in-out", // Smooth animation
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  
                  
                  <div className="relative" style={{ height: "250px" }}>
                    <Image
                      src={task.image}
                      alt="Jaclyn"
                      layout="fill" // Makes the image fill its container
                      objectFit="cover" // Ensures the image covers the container without distortion
                      objectPosition="top"
                      className="rounded-t-2xl" // Optionally round the top corners of the image
                    />
                  </div>
                  <div style={{height:'1px', backgroundColor:'white', width:'100%', opacity:'10%'}}></div>
                  <div className="w-full flex flex-row justify-between items-center px-6">
                    <h3 className="mt-4 text-2xl text-black font-bold dark:text-white w-4/5">
                      {task.title}
                    </h3>
                  </div>
                  <div className="px-6 py-6">
                    {task.description.map((item, index) => (
                      <li key={index} className="flex items-center mb-2 gap-6">
                        {item}
                      </li>
                    ))}
                  </div>
                </div>
              ))}
              <div
                key={index}
                className="rounded-2xl flex flex-col justify-between shadow-md bg-white dark:bg-gray-800 p-6 flex-shrink-0"
                style={{
                  width: "400px", // Set the card width
                  height: "300px", // Set the card height
                  transition: "transform 0.2s ease-in-out", // Smooth animation
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                
                <p className="text-md mb-10 bg-clip-text text-transparent bg-primary dark:text-gray-300">
                  Don't worry, we have 100s more to choose from. If none of them fit what you're looking for, we'll hire on the spot.
                </p>
                <div style={{height:'1px', backgroundColor:'white', width:'100%', opacity:'10%'}}></div>
                <div className="w-full flex flex-row justify-between items-center">
                  <h3 className="text-2xl bg-clip-text text-transparent bg-primary font-bold dark:text-white w-4/5">
                    {"Not the talent you're looking for?"}
                  </h3>
                </div>
              </div>
          </div>
      </section>
    </>
  );
};

export default StaffingProfiles;
