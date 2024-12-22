import { motion } from "framer-motion";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Link,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

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

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex md:flex-row flex-col justify-center items-center md:mt-36 mt-20 md:mb-64 mb-24">
        <div className="flex justify-center items-center">
          <div className="relative md:mr-4">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
              src="/bg-yellow2.png"
              alt="bgyellow"
              className="w-32 h-32 md:w-48 md:h-auto opacity-40 object-contain blur scale-110"
              style={{ opacity: 0.5 }}
            />

            <motion.img
              initial={{ opacity: 0, x: -200, y: 200 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8, ease: "easeInOut" }}
              src="/rocket2.png"
              alt="rocket"
              className="w-32 h-32 md:w-48 md:h-auto object-contain absolute top-0 left-0"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
          className="p-8"
        >
          <div className="flex m-auto md:w-6/6 ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
              className="text-left flex md:flex-row items-center"
            >
              <div className="text-center">
                <h2 className="font-fredoka md:text-6xl text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-l from-secondary to-yellow-400">
                  DESPEGÁ TU CARRERA
                </h2>
                <h2 className="text-white font-fredoka md:text-5xl text-2xl px-6 mt-2 mb-2">
                  y formá parte de la Industria IT!
                </h2>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="flex md:flex-row flex-col justify-center items-center m-auto md:space-x-16 md:mb-80 md:w-5/6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
          }}
          transition={{
            delay: 2.4,
            duration: 0.8,
            ease: "easeInOut",
            scale: { duration: 0.2 },
            boxShadow: { duration: 0.2 },
          }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 18px rgba(232, 20, 184, 0.5)",
            transition: { duration: 0.2 },
          }}
          className="relative md:w-2/5 w-5/6 p-4 shadow-xl rounded-3xl border-4 border-secondary border-opacity-60"
        >
          <img
            src="/stamp.png"
            alt="Stamp"
            className="absolute md:-top-12 md:-right-20 -top-8 -right-16 md:w-52 md:h-52 w-36 h-36 transform -scale-x-100"
            style={{ zIndex: 10, transform: "scaleX(-1)" }}
          />
          <Card
            isBlurred
            className="relative md:p-4 p-2"
            style={{
              background:
                "linear-gradient(to left, rgba(75, 0, 130, 0.2), rgba(128, 0, 128, 0.2), rgba(255, 192, 203, 0.2))",
            }}
          >
            <CardHeader className="flex flex-col bg-white bg-opacity-5 p-4">
              <div
                className="flex flex-row justify-center items-center md:rounded-full rounded-3xl bg-warning md:w-3/4 w-full md:mb-8 mb-4 md:py-1"
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
              <Divider
                orientation="horizontal"
                className="h-2 rounded-full w-3/4"
                style={{
                  background:
                    "linear-gradient(to left, rgba(75, 0, 130, 0.8), rgba(128, 0, 128, 0.8), rgba(251, 191, 36, 0.8))",
                }}
              />
            </CardHeader>
            <CardBody className="flex md:flex-row flex-col items-center justify-center md:space-x-4 space-x-0 rounded-b-2xl bg-white bg-opacity-5">
              <div
                className="rounded-3xl border-2 border-warning border-opacity-40 shadow-lg md:mb-0 mb-2"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(75, 0, 130, 0.4), rgba(128, 0, 128, 0.4), rgba(251, 191, 36, 0.3))",
                }}
              >
                <img
                  src="/web.png"
                  alt="Web"
                  className="md:w-auto md:h-44 w-auto h-24"
                  style={{
                    filter: "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.6))",
                  }}
                />
              </div>

              <div
                className="space-y-1 md:p-6 p-4 rounded-3xl border-2 border-warning border-opacity-40 shadow-lg ml-4"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(75, 0, 130, 0.4), rgba(128, 0, 128, 0.4), rgba(251, 191, 36, 0.3))",
                }}
              >
                <p className="md:text-xl text-l text-white font-fredoka md:ml-2">
                  Dictado a distancia (Virtual)
                </p>
                <p className="md:text-xl text-l text-white font-fredoka md:ml-2">
                  Mínimos conocimientos
                </p>
                <p className="md:text-xl text-l text-white font-fredoka md:ml-2">
                  Clases en vivo y grabadas
                </p>
                <p className="md:text-xl text-l text-white font-fredoka md:ml-2">
                  Proyectos prácticos reales
                </p>
              </div>
            </CardBody>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
          }}
          transition={{
            delay: 2.4,
            duration: 0.8,
            ease: "easeInOut",
            scale: { duration: 0.2 },
            boxShadow: { duration: 0.2 },
          }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 18px rgba(232, 20, 184, 0.5)",
            transition: { duration: 0.2 },
          }}
          className="relative md:w-2/5 w-5/6 p-4 shadow-xl rounded-3xl border-4 border-secondary border-opacity-60 md:mt-0 mt-8"
        >
          <img
            src="/stamp.png"
            alt="Stamp"
            className="absolute md:-top-12 md:-right-20 -top-8 -right-16 md:w-52 md:h-52 w-36 h-36 transform -scale-x-100"
            style={{ zIndex: 10, transform: "scaleX(-1)" }}
          />
          <Card
            isBlurred
            className="relative md:p-4 p-2"
            style={{
              background:
                "linear-gradient(to left, rgba(75, 0, 130, 0.2), rgba(128, 0, 128, 0.2), rgba(255, 192, 203, 0.2))",
            }}
          >
            <CardHeader className="flex flex-col bg-white bg-opacity-5 p-4">
              <div
                className="flex flex-row justify-center items-center md:rounded-full rounded-3xl bg-warning md:w-3/4 w-full md:mb-8 mb-4 md:py-1"
                style={{
                  background:
                    "linear-gradient(to left, rgba(75, 0, 130, 0.8), rgba(128, 0, 128, 0.8), rgba(251, 191, 36, 0.8))",
                }}
              >
                <img
                  src="/contract.png"
                  alt="Hat"
                  className="md:w-auto md:h-16 w-auto h-12"
                  style={{
                    filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.8))",
                  }}
                />
                <h3 className="md:text-4xl text-2xl text-white font-fredoka mb-2 md:ml-2">
                  Estudiá <br /> 100% Gratis
                </h3>
              </div>
              <Divider
                orientation="horizontal"
                className="h-2 rounded-full w-3/4"
                style={{
                  background:
                    "linear-gradient(to left, rgba(75, 0, 130, 0.8), rgba(128, 0, 128, 0.8), rgba(251, 191, 36, 0.8))",
                }}
              />
            </CardHeader>
            <CardBody className="flex md:flex-row flex-col items-center justify-center md:space-x-4 space-x-0 rounded-b-2xl bg-white bg-opacity-5">
              <div
                className="rounded-3xl border-2 border-warning border-opacity-40 shadow-lg md:mb-0 mb-2"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(75, 0, 130, 0.4), rgba(128, 0, 128, 0.4), rgba(251, 191, 36, 0.3))",
                }}
              >
                <img
                  src="/boy-idea.png"
                  alt="Boy Idea"
                  className="md:w-auto md:h-44 w-auto h-24"
                  style={{
                    filter: "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.6))",
                  }}
                />
              </div>

              <div
                className="space-y-1 md:p-6 p-4 rounded-3xl border-2 border-warning border-opacity-40 shadow-lg ml-4"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(75, 0, 130, 0.4), rgba(128, 0, 128, 0.4), rgba(251, 191, 36, 0.3))",
                }}
              >
                <p className="md:text-xl text-l text-white font-fredoka md:ml-2">
                  Mínimos requisitos
                </p>
                <p className="md:text-xl text-l text-white font-fredoka md:ml-2">
                  Formate como profesional
                </p>
                <p className="md:text-xl text-l text-white font-fredoka md:ml-2">
                  Certificado de finalización
                </p>
                <p className="md:text-xl text-l text-white font-fredoka md:ml-2">
                  Conexión con bolsas de trabajo
                </p>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>

      <div className="md:mt-0 mt-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={cardVariant}
          className="flex md:flex-row flex-col md:mb-80 mb-24 m-auto md:w-4/6 w-5/6 bg-secondary bg-opacity-5 relative rounded-3xl border-2 border-white border-opacity-5"
        >
          <div className="md:w-2/3 md:p-6 p-4 items-center justify-center">
            <div className="flex flex-row items-center justify-center mb-4">
              <h2 className="md:text-4xl text-2xl w-4/6 font-fredoka text-white text-center">
                ¿Por qué elegir PILAR TECNO?
              </h2>
              <div className="flex items-center md:ml-4">
                <Avatar
                  src="/logo-pilar-listo.png"
                  size="lg"
                  className="shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                />
              </div>
            </div>
            <Divider
              orientation="horizontal"
              className="h-2 rounded-full mb-4 w-5/6 m-auto"
              style={{
                background:
                  "linear-gradient(to left, rgba(75, 0, 130, 0.8), rgba(128, 0, 128, 0.8), rgba(251, 191, 36, 0.8))",
              }}
            />
            <p className="md:text-2xl text-l font-fredoka m-auto text-white mt-4 mb-6 w-5/6 text-center">
              Somos tu puerta de entrada al mundo IT con educación de calidad y
              gratuita. Acompañamos tu crecimiento y nos aseguramos que
              adquieras el perfil requerido en el sector.
            </p>
          </div>
          <div className="flex md:w-1/3 w-full relative">
            <img
              src="/student.jpg"
              alt="Student"
              className="md:absolute md:top-0 md:left-0 h-full w-full md:object-cover md:rounded-r-3xl md:rounded-l-sm md:rounded-b-3xl rounded-b-3xl"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={cardVariant}
        >
          <h2 className="text-white md:text-3xl text-xl text-center font-fredoka mb-12">
            En nuestro programa encontrarás:
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center m-auto md:space-x-16 md:mb-64 mb-32 md:w-4/6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={cardVariant}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 18px rgba(232, 20, 184, 0.5)",
              transition: { duration: 0.2 },
            }}
            className="relative md:w-2/5 w-5/6 m-auto p-4 shadow-xl rounded-3xl border-4 border-secondary border-opacity-60 mb-4"
          >
            <Card
              isBlurred
              className="relative p-2"
              style={{
                background:
                  "linear-gradient(to left, rgba(75, 0, 130, 0.1), rgba(128, 0, 128, 0.1), rgba(255, 192, 203, 0.1))",
              }}
            >
              <CardHeader className="flex flex-col mb-2">
                <div
                  className="rounded-3xl border-2 border-warning border-opacity-40 shadow-lg mb-4"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(75, 0, 130, 0.4), rgba(128, 0, 128, 0.4), rgba(251, 191, 36, 0.3))",
                  }}
                >
                  <img
                    src="/teacher.png"
                    alt="Teacher"
                    className="md:w-auto md:h-36 w-auto h-24"
                    style={{
                      filter:
                        "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5))",
                    }}
                  />
                </div>
                <h3 className="md:text-3xl text-xl font-fredoka text-center font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-l from-secondary to-yellow-400">
                  Instructores Expertos
                </h3>
                <Divider
                  orientation="horizontal"
                  className="h-2 rounded-full w-2/4 mb-2"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(75, 0, 130, 0.8), rgba(128, 0, 128, 0.8), rgba(251, 191, 36, 0.8))",
                  }}
                />
              </CardHeader>
              <CardBody
                className="bg-opacity 5 rounded-2xl border-2 border-warning border-opacity-40 shadow-lg p-4 mb-2"
                style={{
                  background:
                    "linear-gradient(to left, rgba(75, 0, 130, 0.15), rgba(128, 0, 128, 0.15), rgba(251, 191, 36, 0.15))",
                }}
              >
                <p className="md:text-xl text-l text-center font-fredoka text-white">
                  Aprenderás de profesionales calificados y con experiencia en
                  la industria.
                </p>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={cardVariant}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 18px rgba(232, 20, 184, 0.5)",
              transition: { duration: 0.2 },
            }}
            className="relative md:w-2/5 w-5/6 m-auto p-4 shadow-xl rounded-3xl border-4 border-secondary border-opacity-60 mb-4"
          >
            <Card
              isBlurred
              className="relative p-2"
              style={{
                background:
                  "linear-gradient(to left, rgba(75, 0, 130, 0.1), rgba(128, 0, 128, 0.1), rgba(255, 192, 203, 0.1))",
              }}
            >
              <CardHeader className="flex flex-col mb-2 px-0">
                <div
                  className="rounded-3xl border-2 border-warning border-opacity-40 shadow-lg p-2 mb-4"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(75, 0, 130, 0.4), rgba(128, 0, 128, 0.4), rgba(251, 191, 36, 0.3))",
                  }}
                >
                  <img
                    src="/content.png"
                    alt="Content"
                    className="md:w-auto md:h-32 w-auto h-20"
                    style={{
                      filter:
                        "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5))",
                    }}
                  />
                </div>
                <h3 className="md:text-3xl text-xl font-fredoka text-center font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-l from-secondary to-yellow-400">
                  Contenido Actualizado
                </h3>
                <Divider
                  orientation="horizontal"
                  className="h-2 rounded-full w-2/4 mb-2"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(75, 0, 130, 0.8), rgba(128, 0, 128, 0.8), rgba(251, 191, 36, 0.8))",
                  }}
                />
              </CardHeader>
              <CardBody
                className="bg-opacity 5 rounded-2xl border-2 border-warning border-opacity-40 shadow-lg p-4 mb-2"
                style={{
                  background:
                    "linear-gradient(to left, rgba(75, 0, 130, 0.15), rgba(128, 0, 128, 0.15), rgba(251, 191, 36, 0.15))",
                }}
              >
                <p className="md:text-xl text-l text-center font-fredoka text-white">
                  Nuestro programa se adapta a <br /> las últimas tendencias del
                  mercado.
                </p>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={cardVariant}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 18px rgba(232, 20, 184, 0.5)",
              transition: { duration: 0.2 },
            }}
            className="relative md:w-2/5 w-5/6 m-auto p-4 shadow-xl rounded-3xl border-4 border-secondary border-opacity-60 mb-4"
          >
            <Card
              isBlurred
              className="relative p-2"
              style={{
                background:
                  "linear-gradient(to left, rgba(75, 0, 130, 0.1), rgba(128, 0, 128, 0.1), rgba(255, 192, 203, 0.1))",
              }}
            >
              <CardHeader className="flex flex-col mb-2">
                <div
                  className="rounded-3xl border-2 border-warning border-opacity-40 shadow-lg p-2 mb-4"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(75, 0, 130, 0.4), rgba(128, 0, 128, 0.4), rgba(251, 191, 36, 0.3))",
                  }}
                >
                  <img
                    src="/connections.png"
                    alt="Connections"
                    className="md:w-auto md:h-32 w-auto h-20"
                    style={{
                      filter:
                        "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5))",
                    }}
                  />
                </div>
                <h3 className="md:text-3xl text-xl font-fredoka text-center font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-l from-secondary to-yellow-400">
                  Comunidad Activa
                </h3>
                <Divider
                  orientation="horizontal"
                  className="h-2 rounded-full w-2/4 mb-2"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(75, 0, 130, 0.8), rgba(128, 0, 128, 0.8), rgba(251, 191, 36, 0.8))",
                  }}
                />
              </CardHeader>
              <CardBody
                className="bg-opacity 5 rounded-2xl border-2 border-warning border-opacity-40 shadow-lg p-4 mb-2"
                style={{
                  background:
                    "linear-gradient(to left, rgba(75, 0, 130, 0.15), rgba(128, 0, 128, 0.15), rgba(251, 191, 36, 0.15))",
                }}
              >
                <p className="md:text-xl text-l text-center font-fredoka text-white">
                  Podrás conectar con otros estudiantes y amplíar tu red
                  profesional.
                </p>
              </CardBody>
            </Card>
          </motion.div>
        </div>

        <div className="flex flex-col m-auto mb-48 text-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={cardVariant}
            className="flex items-center md:w-3/6 m-auto mb-4 p-2 rounded-full bg-secondary bg-opacity-10 relative rounded-3xl border-2 border-secondary border-opacity-5"
          >
            <div className="flex md:flex-row md:space-x-4 space-x-2">
              <div
                className="rounded-full"
                style={{
                  background:
                    "linear-gradient(to top, rgba(75, 0, 130, 0.2), rgba(128, 0, 128, 0.2), rgba(251, 191, 36, 0.2))",
                }}
              >
                <img
                  src="/megaphone1.png"
                  alt="Megaphone"
                  className="md:w-auto md:h-24 w-20 h-12"
                  style={{
                    filter: "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5))",
                  }}
                />
              </div>
              <h2 className="md:text-2xl text-l m-auto text-left font-fredoka">
                Te invitamos a que conozcas el equipo de profesionales:
              </h2>
            </div>

            <Button
              disableRipple
              className="m-auto font-fredoka md:text-xl text-l overflow-visible rounded-full hover:-translate-y-1 px-4 shadow-xl bg-secondary/60 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-secondary/90 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0 md:mr-8"
              size="md"
              onClick={() => navigate("/team")}
            >
              Let´s go!
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={cardVariant}
            className="flex items-center md:w-3/6 m-auto mb-4 p-2 rounded-full bg-secondary bg-opacity-10 relative rounded-3xl border-2 border-secondary border-opacity-5"
          >
            <div className="flex md:flex-row md:space-x-4 space-x-2">
              <div
                className="rounded-full"
                style={{
                  background:
                    "linear-gradient(to top, rgba(75, 0, 130, 0.2), rgba(128, 0, 128, 0.2), rgba(251, 191, 36, 0.2))",
                }}
              >
                <img
                  src="/light.png"
                  alt="Light"
                  className="md:w-auto md:h-24 w-20 h-12"
                  style={{
                    filter: "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5))",
                  }}
                />
              </div>
              <h2 className="md:text-2xl text-l m-auto text-left font-fredoka">
                También te invitamos a que conozcas las últimas novedades:
              </h2>
            </div>

            <Button
              disableRipple
              className="m-auto font-fredoka md:text-xl text-l overflow-visible rounded-full hover:-translate-y-1 px-4 shadow-xl bg-secondary/60 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-secondary/90 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
              size="md"
              onClick={() => navigate("/team")}
            >
              Let´s go!
            </Button>
          </motion.div>
        </div>

        <div
          className="w-full py-8"
          style={{
            background:
              "linear-gradient(to right, rgba(255, 192, 203, 0.1), rgba(75, 0, 130, 0.1), rgba(128, 0, 128, 0.1))",
          }}
        >
          <div className="max-w-6xl md:mx-auto px-4 md:mb-20 mb-12">
            <div className="flex flex-wrap justify-between">
              <div className="w-full flex items-center justify-center mb-8 md:mb-0 md:w-1/5">
                <span className=" text-white">Pilar Tecno 2024</span>
              </div>

              <div className="w-1/2 md:w-1/5 mb-8 md:mb-0 text-center">
                <h5 className="text-secondary-600 font-bold mb-4">LEGAL</h5>
                <ul className="list-none pl-0 space-y-2">
                  <li>
                    <Link
                      isBlock
                      showAnchorIcon
                      href="#"
                      color="secondary"
                      className="text-white"
                    >
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link
                      isBlock
                      showAnchorIcon
                      href="#"
                      color="secondary"
                      className="text-white"
                    >
                      Privacy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 md:w-1/5 mb-8 md:mb-0 text-center">
                <h5 className="text-secondary-600 font-bold mb-4">LINKS</h5>
                <ul className="list-none pl-0 space-y-2">
                  <li>
                    <Link
                      isBlock
                      showAnchorIcon
                      href="#"
                      color="secondary"
                      className="text-white"
                    >
                      Faq
                    </Link>
                  </li>
                  <li>
                    <Link
                      isBlock
                      showAnchorIcon
                      href="#"
                      color="secondary"
                      className="text-white"
                    >
                      Help
                    </Link>
                  </li>
                  <li>
                    <Link
                      isBlock
                      showAnchorIcon
                      href="#"
                      color="secondary"
                      className="text-white"
                    >
                      Support
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-1/2 md:w-1/5 mb-8 md:mb-0 text-center">
                <h5 className="text-secondary-600 font-bold mb-4">SOCIAL</h5>
                <ul className="list-none pl-0 space-y-2">
                  <li>
                    <Link
                      isBlock
                      showAnchorIcon
                      href="#"
                      color="secondary"
                      className="text-white"
                    >
                      LikedIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      isBlock
                      showAnchorIcon
                      href="#"
                      color="secondary"
                      className="text-white"
                    >
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      isBlock
                      showAnchorIcon
                      href="#"
                      color="secondary"
                      className="text-white"
                    >
                      Twitter
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-1/2 md:w-1/5 text-center">
                <h5 className="text-secondary-600 font-bold mb-4">COMPANY</h5>
                <ul className="list-none pl-0 space-y-2">
                  <li>
                    <Link
                      isBlock
                      showAnchorIcon
                      href="#"
                      color="secondary"
                      className="text-white"
                    >
                      Official Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      isBlock
                      showAnchorIcon
                      href="#"
                      color="secondary"
                      className="text-white"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      isBlock
                      showAnchorIcon
                      href="#"
                      color="secondary"
                      className="text-white"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
