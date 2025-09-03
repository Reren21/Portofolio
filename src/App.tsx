import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 🔥 Floating Background Gradient Animation
const FloatingBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="w-[500px] h-[500px] bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob absolute top-10 left-10"></div>
    <div className="w-[400px] h-[400px] bg-gradient-to-r from-yellow-200 via-orange-300 to-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 absolute top-40 right-20"></div>
  </div>
);

function App() {
  const [showContact, setShowContact] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showLibraries, setShowLibraries] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState<null | {
    src: string;
    name: string;
    desc: string;
    mapUrl: string;
  }>(null);

  const [skillWidths, setSkillWidths] = useState({
    figma: "0%",
    tailwind: "0%",
  });

  useEffect(() => {
    setTimeout(() => {
      setSkillWidths({ figma: "90%", tailwind: "85%" });
    }, 500);
  }, []);

  const toggleContactModal = () => setShowContact(!showContact);
  const toggleProjectsModal = () => setShowProjects(!showProjects);
  const toggleExperienceModal = () => setShowExperience(!showExperience);
  const toggleLibrariesModal = () => setShowLibraries(!showLibraries);

  const schools = [
    {
      src: "/TK Aisyiyah.png",
      name: "TK Aisyiyah",
      desc: "TK Aisyiyah adalah taman kanak-kanak tempat saya belajar dasar-dasar pendidikan anak usia dini.",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.237315787846!2d107.90058169999998!3d-7.213747299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68b1a54f25f463%3A0xc9b78e2f53a548c0!2sTK%20Aisyiyah%20II%20Jalan%20Bank%20Garut!5e0!3m2!1sid!2sid!4v1756870156459!5m2!1sid!2sid",
    },
    {
      src: "/Muhammadiyah.png",
      name: "MDTA Muhammadiyah",
      desc: "MDTA Muhammadiyah adalah madrasah diniyah tempat saya belajar agama Islam.",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15832.960107493998!2d107.89845009999999!3d-7.213437249999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68b0522f7e95db%3A0xcc4f150bc266487e!2sNata%20Sahroem%20Muhammadiyah!5e0!3m2!1sid!2sid!4v1756870474402!5m2!1sid!2sid",
    },
    {
      src: "/SD.png",
      name: "SDN Paminggir",
      desc: "SDN Paminggir adalah sekolah dasar tempat saya menempuh pendidikan dasar.",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.2400268734996!2d107.89845009999999!3d-7.213437249999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68b0516bda1e79%3A0x297d274178f3eb6f!2sSDN%20Paminggir%20III-IV-V!5e0!3m2!1sid!2sid!4v1756870306216!5m2!1sid!2sid",
    },
    {
      src: "/DOEGA.png",
      name: "SMP Negeri 2 Garut",
      desc: "SMP Negeri 2 Garut adalah sekolah menengah pertama saya.",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.2203821055887!2d107.9036251!3d-7.2156836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68b15acce05759%3A0xaf841bd56622912!2sSMPN%202%20Garut!5e0!3m2!1sid!2sid!4v1756869993087!5m2!1sid!2sid",
    },
    {
      src: "/SMEA.png",
      name: "SMK Negeri 1 Garut",
      desc: "SMK Negeri 1 Garut adalah sekolah kejuruan yang saya ambil untuk fokus ke bidang tertentu.",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.3356171339638!2d107.89057179999999!3d-7.202496699999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68b17fffd28721%3A0xb57506be6f83442!2sSMKN%201%20Garut%20(SMEAN)!5e0!3m2!1sid!2sid!4v1756870217969!5m2!1sid!2sid",
    },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 font-sans text-sm overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="/Eyes.mp4"
        autoPlay
        loop
        muted
      />
      <FloatingBackground />

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {/* Left Panel */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-1 bg-white/20 backdrop-blur-md rounded-3xl p-6 shadow-none border border-white/20 flex flex-col items-center text-center relative overflow-hidden"
        >
          <img
            src="/reren.jpg"
            alt="Reren"
            className="w-28 h-28 rounded-full object-cover border-4 border-black shadow-xl mb-4 transition-transform duration-500 hover:scale-110"
          />
          <h1 className="text-2xl font-bold text-white-600">REREN</h1>
          <p className="text-xs text-black mt-1">Redondo Rui Paslan</p>

          <div className="flex gap-3 mt-4">
            <button
              onClick={toggleContactModal}
              className="px-5 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-700 hover:to-red-600 transition-all duration-300 rounded-full text-xs shadow-md hover:scale-105"
            >
              ✉️ Contact
            </button>
          </div>

          {/* Skills */}
          <div className="mt-6 w-full">
            <div className="bg-gray-100/50 border border-red-100/30 rounded-xl p-4 w-full text-center shadow-inner">
              <h3 className="text-sm font-bold mb-3 bg-black px-6 py-1 rounded-md inline-block shadow-sm">
                🛠 Skills
              </h3>
              <div className="space-y-4 text-left text-xs text-gray-700">
                {[
                  { name: "🎨 UI/UX Design", percent: "90%", width: skillWidths.figma, color: "bg-red-500" },
                  { name: "💻 Front-End Developer", percent: "85%", width: skillWidths.tailwind, color: "bg-red-400" },
                ].map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span className="text-gray-500">{skill.percent}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: skill.width }}
                        transition={{ duration: 1, delay: idx * 0.3 }}
                        className={`${skill.color} h-3 rounded-full shadow-md`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 bg-red/100 backdrop-blur-md rounded-3xl p-6 shadow-none border border-white/50 relative overflow-hidden flex flex-col justify-between h-full"
        >
          {/* Bagian atas */}
          <div className="space-y-6">
            {/* About Me */}
            <div>
              <h2 className="text-lg font-bold text-white mb-3 bg-red-500 px-3 py-1 rounded-md inline-block shadow-sm">
                👋 About Me
              </h2>
              <p className="text-sm text-white leading-relaxed">
                I'm <strong>Reren</strong>, a passionate Front-End Developer & UI/UX Designer. I love creating beautiful, user-friendly websites and applications that not only look good but also feel intuitive and smooth to use. My goal is to turn ideas into interactive digital experiences that delight users.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
              }}
            >
              {[{ label: "Completed Projects", value: "7" }, { label: "Average Rating", value: "⭐ 4/5" }, { label: "Clients Handled", value: "1" }].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  className="bg-gradient-to-r from-red-200 via-red-400 to-red-600 border border-red-300 rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all"
                >
                  <h4 className="text-xl font-bold">{stat.value}</h4>
                  <p className="text-xs text-black mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bagian bawah */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                🎓 Education
              </h3>
              <div className="grid grid-cols-5 gap-3">
                {schools.map((school, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedSchool(school)}
                    className="flex flex-col items-center text-center hover:scale-110 transition-transform duration-500 cursor-pointer"
                  >
                    <img src={school.src} alt={school.name} className="w-8 h-8 object-contain mb-1" />
                    <p className="text-[10px] text-white">{school.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 justify-center">
              <button
                onClick={toggleProjectsModal}
                className="px-4 py-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition transform hover:scale-105"
              >
                💻 Projects
              </button>
              <button
                onClick={toggleExperienceModal}
                className="px-4 py-2 bg-purple-500 text-white rounded-full shadow hover:bg-purple-600 transition transform hover:scale-105"
              >
                📜 Experience
              </button>
              <button
                onClick={toggleLibrariesModal}
                className="px-4 py-2 bg-yellow-500 text-white rounded-full shadow hover:bg-yellow-600 transition transform hover:scale-105"
              >
                🧩 Libraries
              </button>
            </div>
          </div>
        </motion.div>

        {/* Contact Modal */}
        {showContact && (
          <Modal title="📩 Contact Me" onClose={toggleContactModal}>
            <p className="text-sm text-gray-700 mb-3">
              Feel free to reach out to me via the following channels:
            </p>
            <ul className="text-sm text-gray-800 space-y-3">
              <li>
                📧 Email: <a href="mailto:paslanrr12@gmail.com" className="text-red-600 underline">paslanrr12@gmail.com</a>
              </li>
              <li>
                📲 Instagram: <a href="https://www.instagram.com/rerendelrey" className="text-red-600 underline" target="_blank">@rerendelrey</a>
              </li>
              <li>
                🎵 TikTok: <a href="https://www.tiktok.com/@redondorp" className="text-red-600 underline" target="_blank">reren</a>
              </li>
            </ul>
          </Modal>
        )}

        {/* Projects Modal */}
        {showProjects && (
          <Modal title="💻 Projects" onClose={toggleProjectsModal}>
            <div className="space-y-4">
              {[{ img: "/Data Customer.png", title: "Data Customer" }, { img: "/Esther Chakra.png", title: "Tampilan Chat GPT" }, { img: "/Menu.png", title: "Menu" }, { img: "/Form.png", title: "Form" }, { img: "/Project Dashboard Hotel.png", title: "Dashboard Hotel" }, { img: "/Table Const Data Siswa.png", title: "Table Data Siswa" }, { img: "/Table Data KTP.png", title: "Table Data KTP" }].map((project, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.05 }} className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <img src={project.img} alt={project.title} className="w-32 h-20 object-cover rounded-lg flex-shrink-0" />
                  <h4 className="font-bold text-red-500 text-lg">{project.title}</h4>
                </motion.div>
              ))}
            </div>
          </Modal>
        )}

        {/* Experience Modal */}
        {showExperience && (
          <Modal title="📜 Experience" onClose={toggleExperienceModal}>
            <div className="space-y-4">
              <div className="flex gap-4 items-start bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-all">
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/c7/91/5f/zuri-express-lippo-cikarang.jpg?w=700&h=-1&s=1" alt="Zuri Express" className="w-12 h-12 object-cover rounded-full flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-red-500">Zuri Express Lippo Cikarang</h4>
                  <p className="text-sm text-black font-semibold">( Praktek Kerja Lapangan )</p>
                  <p className="text-xs text-gray-500 mb-1">Juli - November 2025</p>
                </div>
              </div>
            </div>
          </Modal>
        )}

        {/* Libraries Modal */}
        {showLibraries && (
          <Modal title="🧩 Libraries" onClose={toggleLibrariesModal}>
            <div className="space-y-3">
              {[{ name: "⚛️ React", link: "https://react.dev/" }, { name: "🌬️ Tailwind CSS", link: "https://tailwindcss.com/" }, { name: "📊 Recharts", link: "https://recharts.org/" }, { name: "✨ Lucide Icons", link: "https://lucide.dev/" }, { name: "🎨 shadcn/ui", link: "https://ui.shadcn.com/" }].map((lib, idx) => (
                <motion.a key={idx} href={lib.link} target="_blank" whileHover={{ scale: 1.05 }} className="block p-3 bg-gray-100 rounded-lg shadow hover:shadow-md transition-all text-red-500 font-medium">
                  {lib.name}
                </motion.a>
              ))}
            </div>
          </Modal>
        )}

        {/* School Modal */}
        {selectedSchool && (
          <Modal title={`🏫 ${selectedSchool.name}`} onClose={() => setSelectedSchool(null)}>
            <div className="flex flex-col items-center space-y-4">
              <img src={selectedSchool.src} alt={selectedSchool.name} className="w-20 h-20 object-contain" />
              <p className="text-sm text-gray-700 text-center">{selectedSchool.desc}</p>
              <iframe src={selectedSchool.mapUrl} width="100%" height="200" className="rounded-lg border" allowFullScreen loading="lazy"></iframe>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}

// Modal Animasi
const Modal = ({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) => (
  <AnimatePresence>
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ duration: 0.4 }}
        className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto relative"
      >
        <button onClick={onClose} className="absolute top-2 right-3 text-gray-500 hover:text-red-700 text-lg font-bold">×</button>
        <h2 className="text-xl font-bold text-black mb-4">{title}</h2>
        {children}
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

export default App;