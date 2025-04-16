//import { Button } from "@nextui-org/react";
//import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Divider } from "@nextui-org/react";
import Icon from "@mdi/react";
import { mdiChevronLeftCircle, mdiChevronRightCircle } from "@mdi/js";
import { useLocation } from "react-router";

const cardVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.4,
      duration: 0.8,
      ease: "easeInOut",
    },
  }),
};

const sponsors = [
  //{ src: "/consejo-fed-inv.png", alt: "Consejo Federal de Inversiones" },
  { src: "/logo-gob-larioja.png", alt: "Gobierno de La Rioja" },
  { src: "/polo-tec.png", alt: "Polo Tecnológico" },
];

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + sponsors.length) % sponsors.length
    );
  };

  return (
    <div>
      <motion.div
        id="historia"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={cardVariant}
        className="md:w-4/6 w-5/6 m-auto md:mb-48 mb-24 md:mt-36 mt-12"
      >
        <div className="flex md:flex-row p-2 items-center mb-2">
          <div className="flex md:flex-col flex-col md:items-center md:ml-8 ml-4 md:space-y-4">
            <h2 className="md:text-4xl text-xl text-white font-fredoka items-center">
              Camino hacia la Nueva Era Competitiva
            </h2>
            <Divider
              orientation="horizontal"
              className="h-1 rounded-full w-full justify-center m-auto"
              style={{
                background:
                  "linear-gradient(to left, rgba(75, 0, 130, 0.8), rgba(128, 0, 128, 0.8), rgba(251, 191, 36, 0.8))",
              }}
            />
          </div>
        </div>

        <div
          className="flex md:mt-2 rounded-3xl p-8"
          style={{
            background:
              "linear-gradient(to right, rgba(75, 0, 130, 0.1), rgba(128, 0, 128, 0.1), rgba(255, 192, 203, 0.1))",
          }}
        >
          <p className="md:text-lg text-sm text-white font-nunito font-light">
            Hace tres años y medio, surgió la visión de crear un programa para
            impulsar un polo tecnológico en la provincia de La Rioja, Argentina.
            Este ambicioso proyecto buscaba fomentar la creación de puestos
            laborales exclusivos para la industria IT en la región. Además de la
            creación de un espacio físico exclusivo, la creación de leyes que
            impulsaran el sector y en la implementación de diversos proyectos de
            capacitación, nació el programa "Pilar Tecno". <br /> <br /> Este
            programa ha posicionado a la provincia como pionera en la formación
            de perfiles técnicos altamente demandados por la industria. La
            colaboración entre sectores gubernamentales y no gubernamentales ha
            sido clave para llevar a cabo esta misión. Entre los principales
            colaboradores se encuentran el gobierno de la provincia de La Rioja
            y el Consejo Federal de Inversiones, además de diversos
            profesionales altamente calificados del sector. <br /> <br /> Hoy en
            día, nuestro programa es uno de los más elegidos en la provincia,
            gracias a su excelente currícula, que asegura que cada estudiante
            adquiera el nivel técnico y profesional base, el cual es demandado
            por la industria IT.
          </p>
        </div>
      </motion.div>

      <motion.div
        id="profesionales"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
        className="md:w-3/6 w-5/6 m-auto md:mt-36 md:p-4 md:mb-72 mb-24 relative rounded-3xl"
      >
        <div className="flex md:flex-row justify-center items-center rounded-3xl p-4 md:mb-24 mb-8">
          <div
            className="flex md:flex-row rounded-full md:py-0 md:px-8 md:p-4 p-2 justify-center items-center"
            style={{
              background:
                "linear-gradient(to left, rgba(75, 0, 130, 0.8), rgba(128, 0, 128, 0.8), rgba(251, 191, 36, 0.8))",
            }}
          >
            <img
              src="/team-work.png"
              alt="Team"
              className="md:w-auto md:h-24 w-auto h-16"
              style={{
                filter: "drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.5))",
              }}
            />
            <h2 className="md:text-4xl text-xl text-white font-fredoka md:ml-4">
              Equipo de Profesionales de PILAR TECNO
            </h2>
          </div>
        </div>

        <h2 className="md:text-xl text-sm text-center text-white font-fredoka md:mb-16 mb-8">
          Te presentamos el equipo humano a cargo del programa:
        </h2>

        <div
          className="md:w-6/6 rounded-3xl border-2 border-warning border-opacity-40 md:p-4 p-2 space-y-4"
          style={{
            background:
              "linear-gradient(to left, rgba(75, 0, 130, 0.1), rgba(128, 0, 128, 0.1), rgba(255, 192, 203, 0.1))",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={cardVariant}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex md:flex-row flex-col md:space-x-4 items-center md:justify-center rounded-3xl border-2 border-warning border-opacity-40 md:p-4 p-2 md:py-4 space-y-2 m-auto md:mt-4 md:mb-8"
            style={{
              background:
                "linear-gradient(to right, rgba(75, 0, 130, 0.2), rgba(128, 0, 128, 0.2), rgba(255, 192, 203, 0.2))",
            }}
          >
            <div className="flex md:flex-row md:w-1/5 w-2/5 items-center justify-center gap-2 rounded-2xl md:p-3 p-2 bg-black bg-opacity-30 shadow-xl md:-mb-2">
              <img
                src="/personal-info.png"
                alt="Personal"
                className="md:w-12 md:h-12 w-auto h-8"
                style={{
                  filter: "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5))",
                }}
              />
              <p className="text-white font-fredoka md:text-xl text-sm">
                Director
              </p>
            </div>

            <div className="flex md:flex-row md:w-1/3 w-full items-center md:justify-start justify-center gap-2 rounded-2xl md:p-3 p-3 bg-secondary bg-opacity-30 shadow-xl">
              <img
                src="/fernando.jpg"
                alt="Fernando"
                className="md:w-auto md:h-12 w-8 h-8 rounded-full"
                style={{
                  filter: "drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.5))",
                }}
              />
              <p className="text-white font-fredoka md:text-md text-sm md:ml-2">
                Fernando A. Gonzalez
              </p>
            </div>

            <div className="flex md:flex-row md:w-2/5 w-full items-center justify-center rounded-2xl md:p-2 bg-success bg-opacity-30 shadow-xl">
              <p className="text-white font-fredoka md:text-md text-sm md:ml-2 p-4">
                Software Lead Engineer
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/fernando-a-gonzalez/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex md:w-auto md:h-16 w-12 h-12 rounded-3xl md:m-0 m-auto"
              style={{
                filter: "drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.5))",
              }}
            >
              <img
                src="/linkedin.png"
                alt="Linkedin"
                className="w-full h-full object-contain"
              />
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={cardVariant}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex md:flex-row flex-col md:space-x-4 items-center md:justify-center rounded-3xl border-2 border-warning border-opacity-40 md:p-4 p-2 md:py-4 space-y-2 m-auto md:mt-4 md:mb-8"
            style={{
              background:
                "linear-gradient(to right, rgba(75, 0, 130, 0.2), rgba(128, 0, 128, 0.2), rgba(255, 192, 203, 0.2))",
            }}
          >
            <div className="flex md:flex-row md:w-1/5 w-2/5 items-center justify-center gap-2 rounded-2xl md:p-3 p-2 bg-black bg-opacity-30 shadow-xl md:-mb-2">
              {" "}
              <img
                src="/personal-info.png"
                alt="Personal"
                className="md:w-12 md:h-12 w-auto h-8"
                style={{
                  filter: "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5))",
                }}
              />
              <p className="text-white font-fredoka md:text-xl text-sm">
                Tutor
              </p>
            </div>

            <div className="flex md:flex-row md:w-1/3 w-full items-center md:justify-start justify-center gap-2 rounded-2xl md:p-3 p-3 bg-secondary bg-opacity-30 shadow-xl">
              <img
                src="/brenda.jpg"
                alt="Brenda"
                className="md:w-auto md:h-12 w-8 h-8 rounded-full"
                style={{
                  filter: "drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.5))",
                }}
              />
              <p className="text-white font-fredoka md:text-md text-sm md:ml-2">
                Brenda Mollaret
              </p>
            </div>

            <div className="flex md:flex-row md:w-2/5 w-full items-center justify-center rounded-2xl md:p-2 bg-success bg-opacity-30 shadow-xl">
              <p className="text-white font-fredoka md:text-md text-sm md:ml-2 p-4">
                SSR Full Stack Developer
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/brenda-mollaret/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex md:w-auto md:h-16 w-12 h-12 rounded-3xl md:m-0 m-auto"
              style={{
                filter: "drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.5))",
              }}
            >
              <img
                src="/linkedin.png"
                alt="Linkedin"
                className="w-full h-full object-contain"
              />
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={cardVariant}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex md:flex-row flex-col md:space-x-4 items-center md:justify-center rounded-3xl border-2 border-warning border-opacity-40 md:p-4 p-2 md:py-4 space-y-2 m-auto md:mt-4 md:mb-8"
            style={{
              background:
                "linear-gradient(to right, rgba(75, 0, 130, 0.2), rgba(128, 0, 128, 0.2), rgba(255, 192, 203, 0.2))",
            }}
          >
            <div className="flex md:flex-row md:w-1/5 w-2/5 items-center justify-center gap-2 rounded-2xl md:p-3 p-2 bg-black bg-opacity-30 shadow-xl md:-mb-2">
              {" "}
              <img
                src="/personal-info.png"
                alt="Personal"
                className="md:w-12 md:h-12 w-auto h-8"
                style={{
                  filter: "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5))",
                }}
              />
              <p className="text-white font-fredoka md:text-xl text-sm">
                Tutor
              </p>
            </div>

            <div className="flex md:flex-row md:w-1/3 w-full items-center md:justify-start justify-center gap-2 rounded-2xl md:p-3 p-3 bg-secondary bg-opacity-30 shadow-xl">
              <img
                src="/marianela.jpg"
                alt="Marianela"
                className="md:w-auto md:h-12 w-8 h-8 rounded-full"
                style={{
                  filter: "drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.5))",
                }}
              />
              <p className="text-white font-fredoka md:text-md text-sm md:ml-2">
                Marianela Gomez Luna
              </p>
            </div>

            <div className="flex md:flex-row md:w-2/5 w-full items-center justify-center rounded-2xl md:p-2 bg-success bg-opacity-30 shadow-xl">
              <p className="text-white font-fredoka md:text-md text-sm md:ml-2 p-4">
                SSR Frontend Developer
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/marianella-gomez-luna/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex md:w-auto md:h-16 w-12 h-12 rounded-3xl md:m-0 m-auto"
              style={{
                filter: "drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.5))",
              }}
            >
              <img
                src="/linkedin.png"
                alt="Linkedin"
                className="w-full h-full object-contain"
              />
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={cardVariant}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex md:flex-row flex-col md:space-x-4 items-center md:justify-center rounded-3xl border-2 border-warning border-opacity-40 md:p-4 p-2 md:py-4 space-y-2 m-auto md:mt-4 md:mb-8"
            style={{
              background:
                "linear-gradient(to right, rgba(75, 0, 130, 0.2), rgba(128, 0, 128, 0.2), rgba(255, 192, 203, 0.2))",
            }}
          >
            <div className="flex md:flex-row md:w-1/5 w-2/5 items-center justify-center gap-2 rounded-2xl md:p-3 p-2 bg-black bg-opacity-30 shadow-xl md:-mb-2">
              {" "}
              <img
                src="/personal-info.png"
                alt="Personal"
                className="md:w-12 md:h-12 w-auto h-8"
                style={{
                  filter: "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5))",
                }}
              />
              <p className="text-white font-fredoka md:text-xl text-sm">
                Tutor
              </p>
            </div>

            <div className="flex md:flex-row md:w-1/3 w-full items-center md:justify-start justify-center gap-2 rounded-2xl md:p-3 p-3 bg-secondary bg-opacity-30 shadow-xl">
              <img
                src="/patricia.jpg"
                alt="Patricia"
                className="md:w-auto md:h-12 w-8 h-8 rounded-full"
                style={{
                  filter: "drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.5))",
                }}
              />
              <p className="text-white font-fredoka md:text-md text-sm md:ml-2">
                Patricia Salas
              </p>
            </div>

            <div className="flex md:flex-row md:w-2/5 w-full items-center justify-center rounded-2xl md:p-2 bg-success bg-opacity-30 shadow-xl">
              <p className="text-white font-fredoka md:text-md text-sm md:ml-2 p-4">
                Traductora Profesional
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/trad-patricia-alejandra-salas/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex md:w-auto md:h-16 w-12 h-12 rounded-3xl md:m-0 m-auto"
              style={{
                filter: "drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.5))",
              }}
            >
              <img
                src="/linkedin.png"
                alt="Linkedin"
                className="w-full h-full object-contain"
              />
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={cardVariant}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex md:flex-row flex-col md:space-x-4 items-center md:justify-center rounded-3xl border-2 border-warning border-opacity-40 md:p-4 p-2 md:py-4 space-y-2 m-auto md:mt-4 md:mb-8"
            style={{
              background:
                "linear-gradient(to right, rgba(75, 0, 130, 0.2), rgba(128, 0, 128, 0.2), rgba(255, 192, 203, 0.2))",
            }}
          >
            <div className="flex md:flex-row md:w-1/5 w-2/5 items-center justify-center gap-2 rounded-2xl md:p-3 p-2 bg-black bg-opacity-30 shadow-xl md:-mb-2">
              {" "}
              <img
                src="/personal-info.png"
                alt="Personal"
                className="md:w-12 md:h-12 w-auto h-8"
                style={{
                  filter: "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5))",
                }}
              />
              <p className="text-white font-fredoka md:text-xl text-sm">
                Tutor
              </p>
            </div>

            <div className="flex md:flex-row md:w-1/3 w-full items-center md:justify-start justify-center gap-2 rounded-2xl md:p-3 p-3 bg-secondary bg-opacity-30 shadow-xl">
              <img
                src="/sergio.jpg"
                alt="Sergio"
                className="md:w-auto md:h-12 w-8 h-8 rounded-full"
                style={{
                  filter: "drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.5))",
                }}
              />
              <p className="text-white font-fredoka md:text-md text-sm md:ml-2">
                Sergio Martinez
              </p>
            </div>

            <div className="flex md:flex-row md:w-2/5 w-full items-center justify-center rounded-2xl md:p-2 bg-success bg-opacity-30 shadow-xl">
              <p className="text-white font-fredoka md:text-md text-sm text-center md:p-2 p-4">
                Licenciado en Psicología, Magister en Administración de Empresas
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/sergiogabrielmartinez/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex md:w-auto md:h-16 w-12 h-12 rounded-3xl md:m-0 m-auto"
              style={{
                filter: "drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.5))",
              }}
            >
              <img
                src="/linkedin.png"
                alt="Linkedin"
                className="w-full h-full object-contain"
              />
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={cardVariant}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex md:flex-row flex-col md:space-x-4 items-center md:justify-center rounded-3xl border-2 border-warning border-opacity-40 md:p-4 p-2 md:py-4 space-y-2 m-auto md:mt-4 md:mb-8"
            style={{
              background:
                "linear-gradient(to right, rgba(75, 0, 130, 0.2), rgba(128, 0, 128, 0.2), rgba(255, 192, 203, 0.2))",
            }}
          >
            <div className="flex md:flex-row md:w-1/5 w-2/5 items-center justify-center gap-2 rounded-2xl md:p-3 p-2 bg-black bg-opacity-30 shadow-xl md:-mb-2">
              {" "}
              <img
                src="/personal-info.png"
                alt="Personal"
                className="md:w-12 md:h-12 w-auto h-8"
                style={{
                  filter: "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5))",
                }}
              />
              <p className="text-white font-fredoka md:text-xl text-sm">
                Tutor
              </p>
            </div>

            <div className="flex md:flex-row md:w-1/3 w-full items-center md:justify-start justify-center gap-2 rounded-2xl md:p-3 p-3 bg-secondary bg-opacity-30 shadow-xl">
              <img
                src="/marcelo.jpg"
                alt="Marcelo"
                className="md:w-auto md:h-12 w-8 h-8 rounded-full"
                style={{
                  filter: "drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.5))",
                }}
              />
              <p className="text-white font-fredoka md:text-md text-sm md:ml-2">
                Marcelo Martinez
              </p>
            </div>

            <div className="flex md:flex-row md:w-2/5 w-full items-center justify-center rounded-2xl bg-success bg-opacity-30 shadow-xl">
              <p className="text-white font-fredoka md:text-md text-sm text-center md:p-4 p-4">
                Magister & International University Teacher, Business
                Consultant, Scientific reviewer
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/marcelomartinez-lr/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex md:w-auto md:h-16 w-12 h-12 rounded-3xl md:m-0 m-auto"
              style={{
                filter: "drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.5))",
              }}
            >
              <img
                src="/linkedin.png"
                alt="Linkedin"
                className="w-full h-full object-contain"
              />
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={cardVariant}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex md:flex-row flex-col md:space-x-4 items-center md:justify-center rounded-3xl border-2 border-warning border-opacity-40 md:p-4 p-2 md:py-4 space-y-2 m-auto md:mt-4 md:mb-8"
            style={{
              background:
                "linear-gradient(to right, rgba(75, 0, 130, 0.2), rgba(128, 0, 128, 0.2), rgba(255, 192, 203, 0.2))",
            }}
          >
            <div className="flex md:flex-row md:w-1/5 w-2/5 items-center justify-center gap-2 rounded-2xl md:p-3 p-2 bg-black bg-opacity-30 shadow-xl md:-mb-2">
              {" "}
              <img
                src="/personal-info.png"
                alt="Personal"
                className="md:w-12 md:h-12 w-auto h-8"
                style={{
                  filter: "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5))",
                }}
              />
              <p className="text-white font-fredoka md:text-xl text-sm">
                Tutor
              </p>
            </div>

            <div className="flex md:flex-row md:w-1/3 w-full items-center md:justify-start justify-center gap-2 rounded-2xl md:p-3 p-3 bg-secondary bg-opacity-30 shadow-xl">
              <img
                src="/maria.jpeg"
                alt="Maria"
                className="md:w-auto md:h-12 w-8 h-8 rounded-full"
                style={{
                  filter: "drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.5))",
                }}
              />
              <p className="text-white font-fredoka md:text-md text-sm md:ml-2">
                Maria Silvina Caamaño
              </p>
            </div>

            <div className="flex md:flex-row md:w-2/5 w-full items-center justify-center rounded-2xl bg-success bg-opacity-30 shadow-xl">
              <p className="text-white font-fredoka md:text-md text-sm text-center md:p-4 p-4">
                Lic. en Administración, Contadora Pública Nacional
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/mar%C3%ADa-silvina-caama%C3%B1o/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex md:w-auto md:h-16 w-12 h-12 rounded-3xl md:m-0 m-auto"
              style={{
                filter: "drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.5))",
              }}
            >
              <img
                src="/linkedin.png"
                alt="Linkedin"
                className="w-full h-full object-contain"
              />
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        id="auspiciantes"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={cardVariant}
        className="flex flex-col items-center md:w-3/6 w-5/6 md:p-4 p-2 m-auto md:mb-72 mb-72 rounded-3xl shadow-lg bg-secondary bg-opacity-5 border-2 border-white border-opacity-5"
      >
        <div
          className="flex justify-center md:w-3/6 w-5/6 rounded-full md:p-4 p-2 md:mb-6 shadow-lg mt-2 mb-4"
          style={{
            background:
              "linear-gradient(to left, rgba(75, 0, 130, 0.8), rgba(128, 0, 128, 0.8), rgba(251, 191, 36, 0.8))",
          }}
        >
          <h2 className="md:text-2xl text-l text-white font-fredoka">
            Auspician al programa Pilar Tecno:
          </h2>
        </div>
        <div className="relative w-full flex items-center justify-center">
          <button
            onClick={handlePrev}
            className="absolute left-0 p-2 text-white bg-secondary bg-opacity-40 rounded-full"
          >
            <Icon path={mdiChevronLeftCircle} size={1} />
          </button>

          <div className="md:w-64 md:h-64 w-36 h-36 flex items-center p-2 justify-center overflow-hidden bg-white bg-opacity-90 rounded-3xl mb-2">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={sponsors[currentIndex].src}
                alt={sponsors[currentIndex].alt}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-contain"
              />
            </AnimatePresence>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 p-2 text-white bg-secondary bg-opacity-40 rounded-full"
          >
            <Icon path={mdiChevronRightCircle} size={1} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Team;
