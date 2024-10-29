import { motion } from "framer-motion";
import { Avatar, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Icon from "@mdi/react";
import { mdiPencilPlusOutline, mdiSchoolOutline } from "@mdi/js";

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
          transition={{ delay: 2.3, duration: 1, ease: "easeInOut" }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
          className="mx-4 ml-2"
        >
          <Card
            isBlurred
            style={{
              backgroundImage: "url('/space1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="border-3xl py-8 px-4 rounded-3xl ml-8 border-2 border-white border-opacity-40 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-secondary opacity-10 rounded-3xl z-0"></div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.3, duration: 1, ease: "easeInOut" }}
              className="text-left flex md:flex-row items-center"
            >
              <div className="flex flex-col ml-8 border-2 border-white bg-white border-opacity-80 bg-opacity-10 rounded-3xl p-4">
                <h2
                  className="font-fredoka text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-400"
                  style={{
                    filter: "drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.6))",
                  }}
                >
                  DESPEGÁ TU CARRERA
                </h2>
                <h2 className="text-white font-fredoka text-4xl mt-2 mb-2">
                  y formá parte de la Industria IT!
                </h2>
              </div>
              <div className="mr-2">
                <motion.img
                  src="/girl-rocket.png"
                  alt="Web"
                  className="w-auto h-36 ml-4"
                  style={{
                    filter: "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5))",
                  }}
                  whileHover={{
                    rotate: [0, 30, -30, 0],
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                />
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
        className="flex justify-center m-auto space-x-8 mb-96 w-5/6"
      >
        <Card
          isBlurred
          className="w-2/5 p-4 shadow-xl rounded-3xl border-2 border-secondary mr-8"
          style={{
            background:
              "linear-gradient(to right, rgba(75, 0, 130, 0.2), rgba(128, 0, 128, 0.2), rgba(255, 192, 203, 0.2))",
          }}
        >
          <CardHeader className="flex-col  bg-white bg-opacity-5">
            <div className="flex flex-row justify-center items-center mb-2">
              <div className="items-center justify-center p-2 bg-secondary bg-opacity-60 rounded-full">
                <Icon path={mdiSchoolOutline} color="white" size={1.5} />
              </div>
              <h3 className="text-4xl text-white font-fredoka mb-2 ml-2">
                Cursos de Desarrollo Web
              </h3>
            </div>
            <Divider
              orientation="horizontal"
              className="h-1 rounded-full "
              style={{
                background:
                  "linear-gradient(to right, rgba(75, 0, 130, 0.8), rgba(128, 0, 128, 0.8), rgba(255, 192, 203, 0.8))",
              }}
            />
          </CardHeader>
          <CardBody className="flex flex-row items-center space-x-4 rounded-b-2xl bg-white bg-opacity-5">
            <div
              className="h-auto rounded-3xl border-2 border-secondary shadow-lg ml-4"
              style={{
                background:
                  "linear-gradient(to right, rgba(75, 0, 130, 0.4), rgba(128, 0, 128, 0.4), rgba(255, 192, 203, 0.4))",
              }}
            >
              <img
                src="/web.png"
                alt="Web"
                className="w-auto h-36 "
                style={{
                  filter: "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5))",
                }}
              />
            </div>

            <div className="space-y-2">
              <p className="text-xl text-white font-nunito font-light ml-2">
                Dictado a distancia (modalidad Virtual)
              </p>
              <p className="text-xl text-white font-nunito font-light ml-2">
                Mínimos conocimientos de programación
              </p>
              <p className="text-xl text-white font-nunito font-light ml-2">
                Clases en vivo y grabadas
              </p>
              <p className="text-xl text-white font-nunito font-light ml-2">
                Proyectos prácticos reales
              </p>
            </div>
          </CardBody>
        </Card>

        <Card
          isBlurred
          className="w-2/5 p-4 shadow-xl rounded-3xl border-2 border-secondary"
          style={{
            background:
              "linear-gradient(to right, rgba(75, 0, 130, 0.2), rgba(128, 0, 128, 0.2), rgba(255, 192, 203, 0.2))",
          }}
        >
          <CardHeader className="flex-col bg-white bg-opacity-5">
            <div className="flex flex-row justify-center items-center mb-2">
              <div className="items-center justify-center p-2 bg-secondary bg-opacity-60 rounded-full">
                <Icon path={mdiPencilPlusOutline} color="white" size={1.5} />
              </div>
              <h3 className="text-4xl text-white font-fredoka mb-2 ml-2">
                Inscríbete totalmente Gratis
              </h3>
            </div>
            <Divider
              orientation="horizontal"
              className="h-1 rounded-full "
              style={{
                background:
                  "linear-gradient(to right, rgba(75, 0, 130, 0.8), rgba(128, 0, 128, 0.8), rgba(255, 192, 203, 0.8))",
              }}
            />
          </CardHeader>
          <CardBody className="flex flex-row items-center space-x-4 rounded-b-2xl bg-white bg-opacity-5">
            <div
              className="h-auto rounded-3xl border-2 border-secondary shadow-lg ml-4"
              style={{
                background:
                  "linear-gradient(to right, rgba(75, 0, 130, 0.4), rgba(128, 0, 128, 0.4), rgba(255, 192, 203, 0.4))",
              }}
            >
              <img
                src="/boy-idea.png"
                alt="Boy Idea"
                className="w-auto h-36 "
                style={{
                  filter: "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5))",
                }}
              />
            </div>

            <div className="space-y-2">
              <p className="text-xl text-white font-nunito font-light ml-2">
                Mínimos requisitos
              </p>
              <p className="text-xl text-white font-nunito font-light ml-2">
                Formate como profesional
              </p>

              <p className="text-xl text-white font-nunito font-light ml-2">
                Certificado de finalización
              </p>

              <p className="text-xl text-white font-nunito font-light ml-2">
                Conexión con bolsas de trabajo
              </p>
            </div>
          </CardBody>
        </Card>
      </motion.div>

      <div className="text-center mb-96 ">
        <div className="flex mb-36 m-auto w-4/6 bg-secondary bg-opacity-5 relative rounded-3xl border-2 border-white border-opacity-5">
          <div className="w-2/3 p-6">
            <div className="flex flex-row items-center justify-center mb-4">
              <h2
                className="text-4xl font-semibold font-fredoka text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-400"
                style={{
                  filter: "drop-shadow(0px 0px 2px rgba(255, 255, 255, 0.2))",
                }}
              >
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
              className="h-1 rounded-full mb-4"
              style={{
                background:
                  "linear-gradient(to right, rgba(75, 0, 130, 0.8), rgba(128, 0, 128, 0.8), rgba(255, 192, 203, 0.8))",
              }}
            />
            <p className="text-2xl font-fredoka text-white mb-6">
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
        </div>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card
              isBlurred
              className="rounded-3xl border-2 border-white border-opacity-5"
              style={{
                background:
                  "linear-gradient(to right, rgba(75, 0, 130, 0.06), rgba(128, 0, 128, 0.06), rgba(255, 192, 203, 0.06))",
              }}
            >
              <CardHeader className="flex flex-col">
                <img
                  src="/teacher.png"
                  alt="Web"
                  className="w-auto h-36"
                  style={{
                    filter: "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5))",
                  }}
                />
                <h3 className="text-2xl font-fredoka text-center text-white font-semibold mb-2">
                  Instructores Expertos
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-xl text-center font-fredoka text-white">
                  Aprende de profesionales con experiencia en la industria.
                </p>
              </CardBody>
            </Card>

            <Card
              isBlurred
              className="rounded-3xl border-2 border-white border-opacity-5"
              style={{
                background:
                  "linear-gradient(to right, rgba(75, 0, 130, 0.06), rgba(128, 0, 128, 0.06), rgba(255, 192, 203, 0.06))",
              }}
            >
              <CardHeader className="flex flex-col">
                <img
                  src="/content.png"
                  alt="Web"
                  className="w-auto h-36"
                  style={{
                    filter: "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5))",
                  }}
                />
                <h3 className="text-2xl font-fredoka text-center text-white font-semibold mb-2">
                  Contenido Actualizado
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-xl text-center font-fredoka text-white">
                  Nuestro programa se adapta a las últimas tendencias del
                  mercado.
                </p>
              </CardBody>
            </Card>

            <Card
              isBlurred
              className="rounded-3xl border-2 border-white border-opacity-5"
              style={{
                background:
                  "linear-gradient(to right, rgba(75, 0, 130, 0.06), rgba(128, 0, 128, 0.06), rgba(255, 192, 203, 0.06))",
              }}
            >
              <CardHeader className="flex flex-col">
                <img
                  src="/connections.png"
                  alt="Web"
                  className="w-auto h-36"
                  style={{
                    filter: "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5))",
                  }}
                />
                <h3 className="text-2xl font-fredoka text-center text-white font-semibold mb-2">
                  Comunidad Activa
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-xl text-center font-fredoka text-white">
                  Conéctate con otros estudiantes y amplía tu red profesional.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
