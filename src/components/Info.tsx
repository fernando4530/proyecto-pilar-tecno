import { motion } from "framer-motion";

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

const Team = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={cardVariant}
        className="md:w-4/6 w-5/6 m-auto md:mb-48 mb-24 md:mt-36 mt-12"
      >
        <div
          className="flex md:mt-2 rounded-3xl p-8"
          style={{
            background:
              "linear-gradient(to right, rgba(75, 0, 130, 0.1), rgba(128, 0, 128, 0.1), rgba(255, 192, 203, 0.1))",
          }}
        >
          <p className="md:text-lg text-sm text-white font-nunito font-light">
            En esta sección encontrarás toda la información detallada del curso
            de Desarrollo Web brindado por Pilar Tecno, como los requisitos, los
            conocimientos Técnicos y No Técnicos que brinda el programa, plazos,
            etc.
          </p>
        </div>
      </motion.div>

      <div
        className="flex flex-row justify-center items-center m-auto md:rounded-full rounded-3xl bg-warning md:w-2/6 w-full md:mb-8 mb-4 md:py-2"
        style={{
          background:
            "linear-gradient(to left, rgba(75, 0, 130, 0.8), rgba(128, 0, 128, 0.8), rgba(251, 191, 36, 0.8))",
        }}
      >
        <img
          src="/hat.png"
          alt="Hat"
          className="md:w-auto md:h-16 w-auto h-12"
          style={{
            filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.8))",
          }}
        />
        <h3 className="md:text-4xl text-2xl text-white font-fredoka mb-2 md:ml-2">
          Curso de <br /> Desarrollo Web
        </h3>
      </div>
    </div>
  );
};

export default Team;
