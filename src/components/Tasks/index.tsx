"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LinearGradient } from "react-text-gradients";
interface Tasks {
  title: string;
  description: string;
}
const Task1 = {
  title: 'Manage Inventory and Stock',
  description: 'Your expert will help forecast and keep track of tool and supply usage, ensuring that your team always has exactly what they need to get the job done.'
}

const Task2 = {
  title: 'Quote and Invoice Customers',
  description: 'Your expert will help draft and send quotes and invoices to customers, ensuring you\'re getting paid appropriately for your services.'
}
const Task3 = {
  title: 'Follow Up with Customers',
  description: 'Your expert will help follow up with customers who might be due for maintenance or scheduled for services to increase recurring revenue.'
}
const Task4 = {
  title: 'Manage Bookings and Schedules',
  description: 'Your expert will help schedule services, installs, and consultations appropriately based on urgency and availability of manpoweers and tools/supplies.'
}
const Task5 = {
  title: 'Coordinate with Vendors and Suppliers',
  description: 'Your expert will help ensure that the stocking and ordering process is smooth and that you get the most cost savings from suppliers.'
}
const Task6 = {
  title: 'Manage Staff & HR',
  description: 'Your expert will help take care of staff relations, from sourcing candidates, interviewing, hiring, firing, and handling payrool and benefits.'
}
const Task7 = {
  title: 'Collect Due Payments and Activities',
  description: 'Your expert will help take care of staff relations, from sourcing candidates, interviewing, hiring, firing, and handling payrool and benefits.'
}
const Task8 = {
  title: 'Enter and Manage Invoices',
  description: 'Your expert will enter and keep track of physical and digital invoices in your systems while reconciling accounts payable and receivables.'
}
const Task9 = {
  title: 'Handle Insurance and Benefits',
  description: 'Your expert will help find and manage insurance and benefits, ensuring you\'re always getting the best insurance rates and the most out of your plans.'
}
const Task10 = {
  title: 'Bid and Submit Proposals',
  description: 'Your expert will help bid and submit proposals that fit your qualification and criteria to ensure you never miss a business opportunity'
}
const Task11 = {
  title: 'Handle Customer Service and Inquiries',
  description: 'Your expert will help deal and respond to customer inquiries and concerns promptly to improve customer satisfaction even while you are away.'
}
const Task12 = {
  title: 'Market Services and Generate Leads',
  description: 'Your expert will help design and develop compelling digital marketing strategies including organic posts, ads, and SEO to generate more leads and business.'
}
const Task13 = {
  title: 'Handle Outbound Calls',
  description: 'Your expert will help do outbound calls to customers to generate leads and opportunities and close leads.'
}
const Task14 = {
  title: 'Plan Optimized Routes',
  description: 'Your expert will help plan optimized routes for technicians based on location and other logistical details to save on time and fuel usage.'
}
const Task15 = {
  title: 'Manage Technician Schedules',
  description: 'Your expert will help in scheduling the right technicians based on their availability and fitness for the job based on skills.'
}
const Task16 = {
  title: 'Manage Work Orders',
  description: 'Your expert will help manage and update work orders in your systems to ensure each gets serviced appropriately and nothing falls through.'
}
const Task17 = {
  title: 'Manage Job Tickets',
  description: 'Your expert will help log and update job tickets in your systems based on findings or incidents reported by technicians for visibility and future reference.'
}
const Tasks = () => {
  const [tasks, setTasks]= useState<Tasks[]>([Task1, Task2,Task3,Task4,Task5,Task6,Task7,Task8,Task9,Task10,Task11,Task12,Task13,Task14,Task15,Task16,Task17])
  const [index, setIndex] = useState(0);
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section
      id="tasks"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px] overflow-hidden"
      style={{
        backgroundImage: "url(/images/agency/hero/background.jpg)",
        backgroundSize: "cover", // Ensures the background image covers the entire div
        backgroundPosition: "center", // Centers the background image
        backgroundRepeat: "no-repeat", // Prevents the background from repeating
      }}
    >
      <div className="w-full flex flex-col items-center px-15">
        <h1 className="text-3xl md:text-4xl mb-4 text-center text-black dark:text-white ">
          Let your expert take care of the work <span className="font-bold text-primary">you don't want to do</span>
        </h1>
        <p className="text-lg md:text-xl text-center">
          So you can focus on <span className="font-bold text-primary">high-impact business</span> and <span className="font-bold text-primary">personal initiatives</span>
        </p>
        
        <Link
          href="/contact"
          className="inline-flex items-center mt-8 justify-center rounded-3xl px-9 text-3xl mb-7 bg-primary py-[14px] text-center text-base font-medium text-white shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-black"
        >
          Learn how an Expert can help you!
        </Link>
      </div>
      <div className="w-full mt-10 flex overflow-x-auto overflow-y-hidden gap-4 px-15 py-12 no-scrollbar" style={{
        WebkitOverflowScrolling: "touch", // Smooth scrolling for mobile
      }}>
        {tasks
          .map((task, index) => (
            <div
              key={index}
              className="rounded-2xl flex flex-col justify-between shadow-md bg-primary dark:bg-gray-800 p-6 flex-shrink-0"
              style={{
                width: "400px", // Set the card width
                transition: "transform 0.2s ease-in-out", // Smooth animation
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              
              <p className="text-md mb-10 text-white dark:text-gray-300">
              {task.description}
              </p>
              <div style={{height:'1px', backgroundColor:'white', width:'100%', opacity:'10%'}}></div>
              <div className="w-full flex flex-row justify-between items-center">
                <h3 className="mt-4 text-2xl text-white font-bold dark:text-white w-4/5">
                  {task.title}
                </h3>
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
            
            <p className="text-md mb-3 bg-clip-text text-transparent bg-primary dark:text-gray-300">
                Get help where your business needs it the most. Think of our experts as just another team member.
            </p>
            <Link
              href="https://nextjstemplates.com/templates/play"
              className="inline-flex items-center justify-center rounded-3xl mb-7 bg-primary py-[14px] text-center text-base font-medium text-white shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-black"
            >
              Talk to an Expert
            </Link>
            <div style={{height:'1px', backgroundColor:'white', width:'100%', opacity:'10%'}}></div>
            <div className="w-full flex flex-row justify-between items-center">
              <h3 className="text-2xl bg-clip-text text-transparent bg-primary font-bold dark:text-white w-4/5">
                {"Anything else your business needs!"}
              </h3>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Tasks;
