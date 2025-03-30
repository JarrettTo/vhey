import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="wow fadeInUp relative z-10 bg-[#FDFDF5] pt-20 lg:pt-[100px] border-[1px] border-primary px-8 md:px-0"
      data-wow-delay=".15s"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <Link href="/" className="mb-6 inline-block max-w-[160px]">
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  className="max-w-full"
                />
              </Link>
              <p className="mb-8 max-w-[270px] font-light text-darkgreen font-light">
                Helping creators and managers win more deals and create more content.
              </p>
              <div className="-mx-3 flex items-center">
               
                <a
                  aria-label="social link"
                  href="/#"
                  className="px-3 text-darkgreen hover:text-white"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M18.8065 1.8335H3.16399C2.42474 1.8335 1.83334 2.42489 1.83334 3.16414V18.8362C1.83334 19.5459 2.42474 20.1668 3.16399 20.1668H18.7473C19.4866 20.1668 20.078 19.5754 20.078 18.8362V3.13457C20.1371 2.42489 19.5457 1.8335 18.8065 1.8335ZM7.24464 17.4168H4.55379V8.69371H7.24464V17.4168ZM5.88443 7.48135C4.99733 7.48135 4.31721 6.77167 4.31721 5.91414C4.31721 5.05661 5.0269 4.34694 5.88443 4.34694C6.74196 4.34694 7.45163 5.05661 7.45163 5.91414C7.45163 6.77167 6.8011 7.48135 5.88443 7.48135ZM17.4463 17.4168H14.7554V13.1883C14.7554 12.183 14.7258 10.8523 13.336 10.8523C11.9167 10.8523 11.7097 11.976 11.7097 13.0996V17.4168H9.01884V8.69371H11.6506V9.90608H11.6801C12.0645 9.1964 12.9221 8.48672 14.2527 8.48672C17.0027 8.48672 17.5054 10.2609 17.5054 12.6856V17.4168H17.4463Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-bold text-darkgreen">
                About Us
              </h4>
              <ul>
                <li>
                  <a
                    href="/"
                    className="mb-3 inline-block font-light text-darkgreen hover:text-darkgreen"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/#ai"
                    className="mb-3 inline-block font-light text-darkgreen hover:text-darkgreen"
                  >
                    Our AI
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="mb-3 inline-block font-light text-darkgreen hover:text-darkgreen"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          
          <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-bold text-darkgreen">
                Useful Links
              </h4>
              <ul>
                <li>
                  <a
                    href="/#faq"
                    className="mb-3 inline-block font-light text-darkgreen hover:text-darkgreen"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="mb-3 inline-block font-light text-darkgreen hover:text-darkgreen"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/creators"
                    className="mb-3 inline-block font-light text-darkgreen hover:text-darkgreen"
                  >
                    For Creators
                  </a>
                </li>
                <li>
                  <a
                    href="/managers"
                    className="mb-3 inline-block font-light text-darkgreen hover:text-darkgreen"
                  >
                    For Managers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-3xl font-bold text-darkgreen">Ready to get started?</h1>
            <p className="text-darkgreen font-light mt-3">Create more content and win more deals.</p>
            <Link
              href="/contact"
              className="mt-5 inline-block rounded-3xl border border-transparent bg-primary px-7 py-3 font-light font-medium text-darkgreen transition hover:bg-white hover:text-black"
            >
              Book a call
            </Link>
          </div>
        </div>
        
      </div>

      <div className="mt-12 border-t border-[#8890A4] border-opacity-40 py-8 lg:mt-[60px]">
        {/*<div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-2/3 lg:w-1/2">
              <div className="my-1">
                <div className="-mx-3 flex items-center justify-center md:justify-start">
                  <a
                    href="/#"
                    className="px-3 font-light text-darkgreen hover:text-white hover:underline"
                  >
                    Privacy policy
                  </a>
                  <a
                    href="/#"
                    className="px-3 font-light text-darkgreen hover:text-white hover:underline"
                  >
                    Legal notice
                  </a>
                  <a
                    href="/#"
                    className="px-3 font-light text-darkgreen hover:text-white hover:underline"
                  >
                    Terms of service
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/3 lg:w-1/2">
              <div className="my-1 flex justify-center md:justify-end">
                <p className="font-light text-darkgreen">
                  Designed and Developed by{" "}
                  <a
                    href="https://tailgrids.com"
                    rel="nofollow noopner noreferrer"
                    target="_blank"
                    className="text-gray-1 hover:underline"
                  >
                    TailGrids and Next.js Templates
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>*/}
      </div>

      
    </footer>
  );
};

export default Footer;
