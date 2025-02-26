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
  description: ['620k followers on TikTok and IG combined', 'Produced over 5+ videos a week', 'Generated over 7+ brand deals monthly']
}

const Task2 = {
  title: 'Michael',
  image:'/images/profiles/bossman.png',
  description: ['180k subscribers on YouTube',  'Produced over 3+ videos a week', 'Generated over 4+ brand deals monthly']}
const Task3 = {
  title: 'Samuel',
  image:'/images/profiles/samuel.jpeg',
  description: ['362k followers on TikTok and IG combined', 'Produced over 4+ videos a week', 'Generated over 7+ brand deals monthly']}
const Task4 = {
  title: 'Jon',
  image:'/images/profiles/jon.png',
  description: ['450k followers on TikTok, YouTube, and IG combined', 'Produced over 6+ videos a week', 'Generated over 8+ brand deals monthly']}
const Task5 = {
  title: 'Irene',
  image:'/images/profiles/molly.webp',
  description: ['1.3M+ followers on TikTok, YouTube, and IG combined', 'Produced over 14+ videos a week', 'Generated over 15+ brand deals monthly']}
const Task6 = {
  title: 'Julianne',
  image:'/images/profiles/okely.jpeg',
  description: ['310k followers on TikTok and IG combined', 'Produced over 4+ videos a week', 'Generated over 6+ brand deals monthly']}
const Task7 = {
  title: 'Shanelle',
  image:'/images/profiles/shanelle.png',
  description: ['84k followers on TikTok', 'Produced over 3+ videos a week', 'Generated over 5+ brand deals monthly']}
  const Task8 = {
    title: 'Anne',
    image:'/images/profiles/anne.jpeg',
    description: ['57k followers on TikTok and IG', 'Produced over 3+ videos a week', 'Generated over 4+ brand deals monthly']}
    const Task9 = {
      title: 'Maddy',
      image:'/images/profiles/Maddy.png',
      description: ['1.2M followers on TikTok', 'Produced over 3+ videos a week', 'Generated over 5+ brand deals monthly']}
  
const StaffingProfiles = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState('');
  const [tasks, setTasks]= useState<Tasks[]>([Task1, Task2, Task4, Task5, Task6, Task7, Task8, Task9])
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
        className="overflow-hidden mt-0 lg:mt-0 py-12 flex flex-col xl:px-10 bg-[#101518] lg:bg-none"
      >
        <div className="xl:mx-12 xl:bg-primary rounded-3xl py-0 lg:py-12">
          <div className="w-full flex flex-col items-center px-10 lg:px-15 py-3 mb-2">
            <h1 className="text-4xl mb-4 xl:mb-2 text-center text-primary xl:text-darkgreen dark:text-white leading-none">
              Creators that we've worked with!
            </h1>
            <p className="text-xl text-center text-primary xl:text-darkgreen leading-none">
              from a pool of <span className="text-secondary">over 50+ creators and influencers.</span>
            </p>
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
        </div>
      </section>
    </>
  );
};

export default StaffingProfiles;
