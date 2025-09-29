import React from 'react';

const userData = {
  nama: "Salman Al Farisy Azhar",
  jabatan: "Front-End Developer & UI/UX Designer",
  perkenalan: "I'm a dedicated student at Bina Nusantara University, specializing in Front-End Development and UI/UX Design. I'm passionate about crafting engaging user experiences through innovative design thinking and creating responsive web solutions. Let's collaborate and embark on a journey of creativity and excellence!.",
  hobby: ["Play Basketball", "Swimming", "Coding"],
};

const BiografiPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center p-8 md:p-12">
      
      <main className="w-full max-w-3xl pt-12 pb-20">
        
        <header className="mb-12 border-b border-gray-100 pb-6">
          <p className="text-base font-semibold uppercase tracking-widest text-indigo-600 mb-1">
            Biografi
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter leading-none">
            {userData.nama}
          </h1>
          <p className="text-xl text-gray-500 mt-2 font-light">
            {userData.jabatan}
          </p>
        </header>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Perkenalan Singkat
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-indigo-300 pl-4">
            {userData.perkenalan}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Hobby
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {userData.hobby.map((item, index) => (
              <span 
                key={index} 
                className="px-3.5 py-1 text-sm font-medium border border-gray-200 text-gray-700 rounded-lg bg-gray-50 hover:bg-indigo-50 hover:border-indigo-400 transition-colors duration-200"
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      </main>

      <footer className="w-full max-w-3xl pt-6 border-t border-gray-100 text-center text-sm text-gray-400 mt-auto">
        &copy; {new Date().getFullYear()} Salman Al Farisy Azhar.
      </footer>
    </div>
  );
};

export default BiografiPage;