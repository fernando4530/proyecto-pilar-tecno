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
  return (
    <div>
      <div className="flex justify-center items-center mt-36 mb-64">
        <div className="flex justify-center items-center">
          <div className="relative mr-4">
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
          <div className="flex m-auto w-6/6 ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
              className="text-left flex md:flex-row items-center"
            >
              <div className="">
                <h2 className="font-fredoka text-6xl mb-4 text-transparent bg-clip-text bg-gradient-to-l from-secondary to-yellow-400">
                  DESPEGÁ TU CARRERA
                </h2>
                <h2 className="text-white font-fredoka text-5xl mt-2 mb-2">
                  y formá parte de la Industria IT!
                </h2>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center m-auto space-x-16 mb-80 w-5/6">
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
          className="relative w-2/5 p-4 shadow-xl rounded-3xl border-2 border-secondary border-opacity-80"
        >
          <img
            src="/stamp.png"
            alt="Stamp"
            className="absolute -top-12 -right-20 w-52 h-52 transform -scale-x-100"
            style={{ zIndex: 10, transform: "scaleX(-1)" }}
          />
          <Card
            isBlurred
            className="relative p-4"
            style={{
              background:
                "linear-gradient(to left, rgba(75, 0, 130, 0.2), rgba(128, 0, 128, 0.2), rgba(255, 192, 203, 0.2))",
            }}
          >
            <CardHeader className="flex flex-col bg-white bg-opacity-5 p-4">
              <div
                className="flex flex-row justify-center items-center rounded-full bg-warning w-3/4 mb-8 py-1"
                style={{
                  background:
                    "linear-gradient(to left, rgba(75, 0, 130, 0.8), rgba(128, 0, 128, 0.8), rgba(251, 191, 36, 0.8))",
                }}
              >
                <img
                  src="/hat.png"
                  alt="Hat"
                  className="w-auto h-16"
                  style={{
                    filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.8))",
                  }}
                />
                <h3 className="text-4xl text-white font-fredoka mb-2 ml-2">
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
            <CardBody className="flex flex-row items-center justify-center space-x-4 rounded-b-2xl bg-white bg-opacity-5">
              <div
                className="rounded-3xl border-2 border-warning border-opacity-40 shadow-lg"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(75, 0, 130, 0.4), rgba(128, 0, 128, 0.4), rgba(251, 191, 36, 0.3))",
                }}
              >
                <img
                  src="/web.png"
                  alt="Web"
                  className="w-auto h-44"
                  style={{
                    filter: "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.6))",
                  }}
                />
              </div>

              <div
                className="space-y-1 p-6 rounded-3xl border-2 border-warning border-opacity-40 shadow-lg ml-4"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(75, 0, 130, 0.4), rgba(128, 0, 128, 0.4), rgba(251, 191, 36, 0.3))",
                }}
              >
                <p className="text-xl text-white font-nunito font-semibold ml-2">
                  Dictado a distancia (Virtual)
                </p>
                <p className="text-xl text-white font-nunito font-semibold ml-2">
                  Mínimos conocimientos
                </p>
                <p className="text-xl text-white font-nunito font-semibold ml-2">
                  Clases en vivo y grabadas
                </p>
                <p className="text-xl text-white font-nunito font-semibold ml-2">
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
          className="relative w-2/5 p-4 shadow-xl rounded-3xl border-2 border-secondary border-opacity-80"
        >
          <img
            src="/stamp.png"
            alt="Stamp"
            className="absolute -top-12 -right-20 w-52 h-52 transform -scale-x-100"
            style={{ zIndex: 10, transform: "scaleX(-1)" }}
          />
          <Card
            isBlurred
            className="relative p-4"
            style={{
              background:
                "linear-gradient(to left, rgba(75, 0, 130, 0.2), rgba(128, 0, 128, 0.2), rgba(255, 192, 203, 0.2))",
            }}
          >
            <CardHeader className="flex flex-col bg-white bg-opacity-5 p-4">
              <div
                className="flex flex-row justify-center items-center rounded-full bg-warning mx-2 w-3/5 mb-8 py-1"
                style={{
                  background:
                    "linear-gradient(to left, rgba(75, 0, 130, 0.8), rgba(128, 0, 128, 0.8), rgba(251, 191, 36, 0.8))",
                }}
              >
                <img
                  src="/contract.png"
                  alt="Contract"
                  className="w-auto h-16"
                  style={{
                    filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.8))",
                  }}
                />
                <h3 className="text-4xl text-white font-fredoka mb-2 ml-2">
                  Estudiá <br /> 100% Gratis
                </h3>
              </div>
              <Divider
                orientation="horizontal"
                className="h-2 rounded-full w-3/5"
                style={{
                  background:
                    "linear-gradient(to left, rgba(75, 0, 130, 0.8), rgba(128, 0, 128, 0.8), rgba(251, 191, 36, 0.8))",
                }}
              />
            </CardHeader>

            <CardBody className="flex flex-row items-center justify-center space-x-4 rounded-b-2xl bg-white bg-opacity-5">
              <div
                className="rounded-3xl border-2 border-warning border-opacity-40 shadow-lg"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(75, 0, 130, 0.4), rgba(128, 0, 128, 0.4), rgba(251, 191, 36, 0.3))",
                }}
              >
                <img
                  src="/boy-idea.png"
                  alt="Boy Idea"
                  className="w-auto h-44"
                  style={{
                    filter: "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.4))",
                  }}
                />
              </div>

              <div
                className="space-y-1 p-6 rounded-3xl border-2 border-warning border-opacity-40 shadow-lg ml-4"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(75, 0, 130, 0.4), rgba(128, 0, 128, 0.4), rgba(251, 191, 36, 0.3))",
                }}
              >
                <p className="text-xl text-white font-nunito font-semibold ml-2">
                  Mínimos requisitos
                </p>
                <p className="text-xl text-white font-nunito font-semibold ml-2">
                  Formate como profesional
                </p>

                <p className="text-xl text-white font-nunito font-semibold ml-2">
                  Certificado de finalización
                </p>

                <p className="text-xl text-white font-nunito font-semibold ml-2">
                  Conexión con bolsas de trabajo
                </p>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>

      <div className="text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={cardVariant}
          className="flex mb-80 m-auto w-4/6 bg-secondary bg-opacity-5 relative rounded-3xl border-2 border-white border-opacity-5"
        >
          <div className="w-2/3 p-6 items-center justify-center">
            <div className="flex flex-row items-center justify-center mb-4">
              <h2 className="text-4xl font-fredoka text-white">
                ¿Por qué elegir PILAR TECNO?
              </h2>
              <div className="flex items-center ml-4">
                <Avatar
                  src="/logo-pilar1.png"
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
            <p className="text-2xl font-fredoka m-auto text-white mt-4 mb-6 w-5/6">
              Somos tu puerta de entrada al mundo IT con educación de calidad y
              gratuita. Acompañamos tu crecimiento y nos aseguramos que
              adquieras el perfil requerido en el sector.
            </p>
          </div>
          <div className="w-1/3 relative">
            <img
              src="/student.jpg"
              alt="Student"
              className="absolute top-0 left-0 h-full w-full object-cover rounded-r-3xl"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
            />
            <div
              className="absolute top-0 left-0 h-full w-full"
              style={{
                background:
                  "linear-gradient(to right, rgba(255,255,255,0.7), rgba(255,255,255,0))",
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
          <h2 className="text-white text-3xl text-center font-fredoka mb-12">
            En nuestro programa encontrarás:
          </h2>
        </motion.div>

        <div className="flex justify-center">
          <div className="flex justify-center m-auto space-x-16 mb-80 w-4/6">
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
              className="relative w-2/5 p-4 shadow-xl rounded-3xl border-2 border-secondary border-opacity-80"
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
                      className="w-auto h-36"
                      style={{
                        filter:
                          "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5))",
                      }}
                    />
                  </div>
                  <h3 className="text-3xl font-fredoka text-center font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-l from-secondary to-yellow-400">
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
                  <p className="text-xl text-center font-fredoka text-white">
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
              className="relative w-2/5 p-4 shadow-xl rounded-3xl border-2 border-secondary border-opacity-80"
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
                      className="w-auto h-32"
                      style={{
                        filter:
                          "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5))",
                      }}
                    />
                  </div>
                  <h3 className="w-full text-3xl font-fredoka text-center font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-l from-secondary to-yellow-400">
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
                  <p className="text-xl text-center font-fredoka text-white">
                    Nuestro programa se adapta a las últimas tendencias del
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
              className="relative w-2/5 p-4 shadow-xl rounded-3xl border-2 border-secondary border-opacity-80"
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
                      className="w-auto h-32"
                      style={{
                        filter:
                          "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5))",
                      }}
                    />
                  </div>
                  <h3 className="text-3xl font-fredoka text-center font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-l from-secondary to-yellow-400">
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
                  <p className="text-xl text-center font-fredoka text-white">
                    Podrás conectar con otros estudiantes y amplíar tu red
                    profesional.
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col m-auto space-y-16 mb-48">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={cardVariant}
            className="flex items-center m-auto mb-4"
          >
            <h2 className="text-white text-2xl font-fredoka mr-4">
              Te invitamos a que conozcas el equipo de profesionales:
            </h2>

            <Button
              disableRipple
              className="text-white font-fredoka text-xl overflow-visible rounded-full hover:-translate-y-1 px-4 shadow-xl bg-secondary/60 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-secondary/90 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
              size="md"
            >
              Let´s go!
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={cardVariant}
            className="flex items-center m-auto"
          >
            <h2 className="text-white text-2xl font-fredoka mr-4">
              También te invitamos a que conozcas las últimas novedades:
            </h2>

            <Button
              disableRipple
              className="text-white font-fredoka text-xl overflow-visible rounded-full hover:-translate-y-1 px-4 shadow-xl bg-secondary/60 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-secondary/90 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
              size="md"
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
