import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="mt-20 md:mt-28 mb-12 md:mb-20 px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto">
      <div className="text-center space-y-2 mb-8">
        <h3 className="text-gray-600 text-lg md:text-xl font-light">Get In Touch</h3>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          Contact Me
        </h1>
      </div>

      <div className="flex flex-col items-center gap-6 text-center">
        <div className="space-y-8">
          {/* Email Section */}
          <div className="flex flex-col items-center gap-2">
            <MdEmail className="w-8 h-8 text-blue-600 mb-2" />
            <a 
              href="mailto:maryamanwar502@gmail.com" 
              className="text-lg md:text-xl text-gray-700 hover:text-blue-600 transition-colors break-all underline underline-offset-4"
            >
              maryamanwar502@gmail.com
            </a>
          </div>

          {/* LinkedIn Section */}
          <div className="flex flex-col items-center gap-2">
            <FaLinkedin className="w-8 h-8 text-blue-600 mb-2" />
            <a
              href="https://www.linkedin.com/in/maryam-anwar-16b6b92b7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl text-gray-700 hover:text-blue-600 transition-colors underline underline-offset-4"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}