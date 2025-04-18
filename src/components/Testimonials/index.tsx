import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Jacob Schezski",
    designation: "Owner of an HVAC Business",
    content:
      "I run the business myself, so having an assistant handle everything has allowed me to manage the business while getting to spend more time with my wife and kids.",
    image: "/images/testimonials/author-01.webp",
    star: 5,
  },
  {
    id: 2,
    name: "Martin Diego",
    designation: "COO of an HVAC Business",
    content:
      "I didn't know Filipinos were this competent. Alicia has been great for us and goes beyond what I ask of her each time. She's a big part of our success.",
    image: "/images/testimonials/author-02.jpg",
    star: 5,
  },
  {
    id: 3,
    name: "Zach Williams",
    designation: "Owner of Construction Firm",
    content:
      "Last month, she helped save us over $8000+ by going through supply house invoices and making sure we were getting charged correctly.",
    image: "/images/testimonials/author-03.jpg",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 dark:bg-dark-2 md:py-[120px] px-3 md:px-0">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What our Clients Say"
          paragraph="Don't take it from us. Hear some of our partners' stories and experiences."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
