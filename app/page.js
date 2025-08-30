import Image from 'next/image';

export default function ContactDetails() {
  return (
    <>
      <div className="font-sans bg-slate-800 min-h-screen p-8 sm:p-16">
        <main className="max-w-4xl mx-auto bg-white/10 p-8 rounded-xl shadow-lg backdrop-blur-lg border border-slate-500">
          <div className="flex flex-col items-center gap-4 mb-8">
            {/* Profile Image and Name */}
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-5 border-slate-700">
              <Image
                className="object-cover"
                src="/image/Profile.jpg"
                alt="Khaled Hossain"
                width={128}
                height={128}
                priority
              />
            </div>
            <h1 className="text-3xl font-semibold text-white mb-[-14px]">Khaled Hossain</h1>
            <p className="text-md font-light text-gray-200">Software Engineer</p>
          </div>

          {/* Contact Details */}
          <div className="space-y-1">
            <div className="flex items-center space-x-4 text-gray-700">
              <Image
                src="/image/mail.png"
                alt="Email Icon"
                width={80}
                height={80}
                className="text-gray-500"
              />
              <span className="text-lg text-gray-100">khaledhossain.dev@hotmail.com</span>
            </div>

            <div className="flex items-center space-x-4 text-gray-700 mt-[-18px]">
              <Image
                src="/image/phone.png"
                alt="Phone Icon"
                width={80}
                height={80}
                className="text-gray-500"
              />
              <span className="text-lg text-gray-100">+880 1572 362997</span>
            </div>

            <div className="flex items-center space-x-4 text-gray-700 mt-[-18px]">
              <Image
                src="/image/location.png"
                alt="Location Icon"
                width={80}
                height={80}
                className="text-gray-500"
              />
              <span className="text-lg text-gray-100">Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://www.linkedin.com/in/khaledhossain-devacc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-200 hover:text-green-500 transition-all duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/khaledhossain.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-200 hover:text-green-500 transition-all duration-300"
            >
              Facebook
            </a>
            <a
              href="https://x.com/shortccakee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-200 hover:text-green-500 transition-all duration-300"
            >
              Twitter
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
