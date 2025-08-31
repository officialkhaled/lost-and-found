import Image from 'next/image';
import CircularText from './CircularText';

export default function ContactDetails() {
  return (
    <div className="font-sans bg-slate-800 min-h-screen p-4 sm:p-16">
      <main className="max-w-4xl mx-auto bg-white/10 p-6 sm:p-8 rounded-xl shadow-lg backdrop-blur-lg border border-slate-500">

        {/* Profile Section */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center">
            <CircularText
              text="CONTACT ME * IF FOUND * "
              size={190}
              radius={90}
              duration={40}
            />
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                className="object-cover"
                src="/image/Profile.jpg"
                alt="Khaled Hossain"
                width={128}
                height={128}
                priority
              />
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-semibold text-white mt-6 text-center">
            Khaled Hossain
          </h1>
          <p className="text-sm sm:text-md font-light text-gray-200 text-center">
            Software Engineer
          </p>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col gap-4 sm:gap-2 sm:px-30">
          {/* Email */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-gray-700">
            <Image
              src="/image/mail.png"
              alt="Email Icon"
              width={50}
              height={50}
            />
            <span className="text-sm sm:text-lg text-gray-100 break-words text-center sm:text-left">
              khaledhossain.dev@hotmail.com
            </span>
          </div>

          {/* Phone */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-gray-700">
            <Image
              src="/image/phone.png"
              alt="Phone Icon"
              width={50}
              height={50}
            />
            <span className="text-sm sm:text-lg text-gray-100 text-center sm:text-left">
              +880 1572 362997
            </span>
          </div>

          {/* Location */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-gray-700">
            <Image
              src="/image/location.png"
              alt="Location Icon"
              width={50}
              height={50}
            />
            <span className="text-sm sm:text-lg text-gray-100 text-center sm:text-left">
              Dhaka, Bangladesh
            </span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-center">
          <a
            href="https://www.linkedin.com/in/khaledhossain-devacc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/khaledhossain.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300"
          >
            Facebook
          </a>
          <a
            href="https://x.com/shortccakee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300"
          >
            Twitter
          </a>
        </div>
      </main>
    </div>
  );
}
