import {
  Accordion,
  AccordionItem,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
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
      <div
        className="flex flex-row justify-center items-center m-auto md:rounded-full rounded-3xl bg-warning md:w-2/6 w-4/6 md:mb-48 mb-24 md:py-2 md:mt-24 mt-20"
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

      <div className="flex md:flex-col items-center justify-center m-auto md:space-x-16 md:w-5/6 md:mb-24 mb-24">
        <div
          className="relative flex md:flex-col flex-col rounded-3xl bg-white md:w-3/6 w-5/6 md:p-8 p-4 md:mb-24"
          style={{
            background:
              "linear-gradient(to left, rgba(75, 0, 130, 0.1), rgba(128, 0, 128, 0.1), rgba(255, 192, 203, 0.1))",
          }}
        >
          <img
            src="/info-curso.png"
            alt="Info"
            className="absolute md:-top-8 md:-right-16 -top-8 -right-12 md:w-36 md:h-36 w-28 h-28 transform -scale-x-100"
            style={{ zIndex: 10, transform: "scaleX(-1)" }}
          />
          <div className="md:p-4 p-8 md:mb-8 mb-4 m-auto">
            <h2 className="text-white font-fredoka md:text-3xl text-2xl m-auto md:mb-4">
              Información del Curso
            </h2>
            <Divider
              orientation="horizontal"
              className="h-2 rounded-full w-full"
              style={{
                background:
                  "linear-gradient(to left, rgba(75, 0, 130, 0.8), rgba(128, 0, 128, 0.8), rgba(251, 191, 36, 0.8))",
              }}
            />
          </div>
          <div className="md:space-y-8 space-y-4 mb-4">
            <Accordion
              variant="shadow"
              className="rounded-3xl md:px-8 border-2 border-warning border-opacity-40"
              style={{
                background:
                  "linear-gradient(to right, rgba(75, 0, 130, 0.2), rgba(128, 0, 128, 0.2), rgba(255, 192, 203, 0.2))",
              }}
            >
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title={
                  <span className="text-transparent bg-clip-text bg-gradient-to-l from-secondary to-yellow-400 font-fredoka md:text-3xl text-xl font-bold">
                    Requisitos
                  </span>
                }
              >
                <p className="font-nunito md:text-md text-sm text-white font-light md:mt-4 mt-2 md:mb-8 mb-4">
                  Para que seas alumno, debes cumplir los siguientes requisitos:
                </p>
                <Table className="md:w-5/6 md:mb-8 mb-4">
                  <TableHeader>
                    <TableColumn className="text-secondary bg-secondary bg-opacity-40 font-fredoka text-md">
                      Requisitos
                    </TableColumn>
                  </TableHeader>
                  <TableBody>
                    <TableRow key="1">
                      <TableCell className="text-secondary font-fredoka text-sm">
                        Ser mayor de 18 años
                      </TableCell>
                    </TableRow>
                    <TableRow key="2">
                      <TableCell className="text-secondary font-fredoka text-sm">
                        Residir en La Rioja - Argentina
                      </TableCell>
                    </TableRow>
                    <TableRow key="3">
                      <TableCell className="text-secondary font-fredoka text-sm">
                        Tener conocimientos mínimos en programación (HTML, CSS,
                        JavaScript)
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </AccordionItem>
            </Accordion>

            <Accordion
              variant="shadow"
              className="rounded-3xl md:px-8 border-2 border-warning border-opacity-40"
              style={{
                background:
                  "linear-gradient(to right, rgba(75, 0, 130, 0.2), rgba(128, 0, 128, 0.2), rgba(255, 192, 203, 0.2))",
              }}
            >
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title={
                  <span className="text-transparent bg-clip-text bg-gradient-to-l from-secondary to-yellow-400 font-fredoka md:text-3xl text-xl font-bold">
                    Modalidad de Aprendizaje
                  </span>
                }
              >
                <p className="font-nunito md:text-md text-sm text-white font-light md:mt-4 mt-2 md:mb-8 mb-4">
                  El curso posee 2 módulos de aprendizaje, que son los
                  siguientes:
                </p>

                <div className="flex md:flex-row flex-col md:space-x-2 md:mb-4">
                  <Table className="md:w-3/6 md:mb-4 mb-4">
                    <TableHeader className="">
                      <TableColumn className="text-secondary bg-secondary bg-opacity-40 font-fredoka text-md">
                        Módulos Técnicos
                      </TableColumn>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="1">
                        <TableCell className="text-secondary font-fredoka text-sm">
                          Git - VS Code
                        </TableCell>
                      </TableRow>
                      <TableRow key="2">
                        <TableCell className="text-secondary font-fredoka text-sm">
                          React
                        </TableCell>
                      </TableRow>
                      <TableRow key="3">
                        <TableCell className="text-secondary font-fredoka text-sm">
                          Node
                        </TableCell>
                      </TableRow>
                      <TableRow key="4">
                        <TableCell className="text-secondary font-fredoka text-sm">
                          Integrador
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>

                  <Table className="md:w-3/6 md:mb-4 mb-4">
                    <TableHeader className="">
                      <TableColumn className="text-secondary bg-secondary bg-opacity-40 font-fredoka text-md">
                        Módulos No Técnicos
                      </TableColumn>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="1">
                        <TableCell className="text-secondary font-fredoka text-sm">
                          Inglés
                        </TableCell>
                      </TableRow>
                      <TableRow key="2">
                        <TableCell className="text-secondary font-fredoka text-sm">
                          Introd. a la Oferta Laboral Informática
                        </TableCell>
                      </TableRow>
                      <TableRow key="3">
                        <TableCell className="text-secondary font-fredoka text-sm">
                          Proceso de Selección
                        </TableCell>
                      </TableRow>
                      <TableRow key="4">
                        <TableCell className="text-secondary font-fredoka text-sm">
                          Emprender e innovar en el Sector IT
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </AccordionItem>
            </Accordion>

            <Accordion
              variant="shadow"
              className="rounded-3xl md:px-8 border-2 border-warning border-opacity-40"
              style={{
                background:
                  "linear-gradient(to right, rgba(75, 0, 130, 0.2), rgba(128, 0, 128, 0.2), rgba(255, 192, 203, 0.2))",
              }}
            >
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title={
                  <span className="text-transparent bg-clip-text bg-gradient-to-l from-secondary to-yellow-400 font-fredoka md:text-3xl text-xl font-bold">
                    Cursado
                  </span>
                }
              >
                <p className="font-nunito md:text-md text-sm text-white font-light md:mt-4 mt-2 md:mb-8 mb-4">
                  Pilar Tecno ha estructurado el curso de Desarrollo Web, a lo
                  largo de un plazo de 6 meses. El diagrama de cursado es
                  semanal (Lunes a Viernes), en un horario a convenir. <br />
                  Se evaluarán a los alumnos, al finalizar cada módulo.
                </p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <div className="flex md:flex-col flex-col items-center justify-center m-auto md:space-x-16 md:w-5/6 md:mb-24 mb-16">
        <div
          className="relative flex md:flex-col flex-col rounded-3xl bg-white md:w-3/6 w-5/6 md:p-8 md:mb-24"
          style={{
            background:
              "linear-gradient(to left, rgba(75, 0, 130, 0.1), rgba(128, 0, 128, 0.1), rgba(255, 192, 203, 0.1))",
          }}
        >
          <img
            src="/calendar.png"
            alt="Calendario"
            className="absolute md:-top-8 md:-right-16 -top-8 -right-10 md:w-36 md:h-36 w-24 h-24 transform -scale-x-100"
            style={{ zIndex: 10, transform: "scaleX(-1)" }}
          />
          <div className="md:p-4 p-8 md:mb-8 mb-4 m-auto">
            <h2 className="text-white font-fredoka md:text-3xl text-2xl m-auto md:mb-4">
              Ediciones de Pilar Tecno
            </h2>
            <Divider
              orientation="horizontal"
              className="h-2 rounded-full w-full"
              style={{
                background:
                  "linear-gradient(to left, rgba(75, 0, 130, 0.8), rgba(128, 0, 128, 0.8), rgba(251, 191, 36, 0.8))",
              }}
            />
          </div>
          <div
            className="flex flex-col md:space-y-8 space-y-4 w-5/6 m-auto mb-8 rounded-3xl md:py-8 py-8 p-2 border-2 border-warning border-opacity-40"
            style={{
              background:
                "linear-gradient(to right, rgba(75, 0, 130, 0.2), rgba(128, 0, 128, 0.2), rgba(255, 192, 203, 0.2))",
            }}
          >
            <div className="flex md:flex-row flex-row items-center md:justify-center justify-evenly">
              <div className="md:w-1/3 rounded-2xl md:p-4 p-2 bg-black bg-opacity-30 md:mr-8 shadow-xl">
                <p className="text-white font-fredoka md:text-xl text-sm">
                  Primera Edición
                </p>
              </div>

              <div className="md:w-1/3 rounded-2xl md:p-4 p-2 bg-secondary bg-opacity-40 shadow-xl">
                <p className="text-white font-fredoka md:text-xl text-sm">
                  Finalizada
                </p>
              </div>
            </div>

            <div className="flex md:flex-row flex-row items-center md:justify-center justify-evenly">
              <div className="md:w-1/3 rounded-2xl md:p-4 p-2 bg-black bg-opacity-30 md:mr-8 shadow-xl">
                <p className="text-white font-fredoka md:text-xl text-sm">
                  Segunda Edición
                </p>
              </div>

              <div className="md:w-1/3 rounded-2xl md:p-4 p-2 bg-secondary bg-opacity-40 shadow-xl">
                <p className="text-white font-fredoka md:text-xl text-sm">
                  Finalizada
                </p>
              </div>
            </div>

            <div className="flex md:flex-row flex-row items-center md:justify-center justify-evenly">
              <div className="md:w-1/3 rounded-2xl md:p-4 p-2 bg-black bg-opacity-30 md:mr-8 shadow-xl">
                <p className="text-white font-fredoka md:text-xl text-sm">
                  Tercera Edición
                </p>
              </div>

              <div className="md:w-1/3 rounded-2xl md:p-4 p-2 bg-secondary bg-opacity-40 shadow-xl">
                <p className="text-white font-fredoka md:text-xl text-sm">
                  Finalizada
                </p>
              </div>
            </div>

            <div className="flex md:flex-row flex-row items-center md:justify-center justify-evenly">
              <div className="md:w-1/3 rounded-2xl md:p-4 p-2 bg-black bg-opacity-30 md:mr-8 shadow-xl">
                <p className="text-white font-fredoka md:text-xl text-sm">
                  Cuarta Edición
                </p>
              </div>

              <div className="md:w-1/3 rounded-2xl md:p-4 p-2 bg-secondary bg-opacity-40 shadow-xl">
                <p className="text-white font-fredoka md:text-xl text-sm">
                  Finalizada
                </p>
              </div>
            </div>

            <div className="flex md:flex-row flex-row items-center md:justify-center justify-evenly">
              <div className="md:w-1/3 rounded-2xl md:p-4 p-2 bg-black bg-opacity-30 md:mr-8 shadow-xl">
                <p className="text-white font-fredoka md:text-xl text-sm">
                  Quinta Edición
                </p>
              </div>

              <div className="md:w-1/3 rounded-2xl md:p-4 p-2 bg-warning bg-opacity-40 shadow-xl">
                <p className="text-white font-fredoka md:text-xl text-sm">
                  En Curso
                </p>
              </div>
            </div>

            <div className="flex md:flex-row flex-row items-center md:justify-center justify-evenly">
              <div className="md:w-1/3 rounded-2xl md:p-4 p-2 bg-black bg-opacity-30 md:mr-8 shadow-xl">
                <p className="text-white font-fredoka md:text-xl text-sm">
                  Sexta Edición
                </p>
              </div>

              <div className="md:w-1/3 rounded-2xl md:p-4 p-2 bg-success bg-opacity-40 shadow-xl">
                <p className="text-white font-fredoka md:text-xl text-sm">
                  Próximamente
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={cardVariant}
      >
        <h2 className="text-white md:text-2xl text-md text-center font-fredoka mb-4 p-8">
          Te invitamos a formar parte del programa de Pilar Tecno. <br />
          Puedes comunicarte por alguna de nuestras vías de contacto:
        </h2>
      </motion.div>

      <div className="flex w-4/6 rounded-3xl bg-secondary m-auto bg-opacity-5 md:p-12 md:px-24 border-1 border-white border-opacity-5 md:mb-72 mb-24">
        <div className="flex md:flex-row flex-col">
          <div className="flex md:flex-col items-center justify-center md:p-4 mb-4 rounded-3xl bg-secondary bg-opacity-10">
            <img
              src="/more-info.png"
              alt="Moreinfo"
              className=" md:w-24 md:h-24 w-32 h-32 transform"
              style={{ zIndex: 10, transform: "scaleX(-1)" }}
            />
            <p className="text-white font-fredoka md:text-2xl text-xl text-center">
              Vías de Contacto <br /> Oficiales
            </p>
          </div>

          <div className="flex md:flex-row flex-col md:items-center justify-center items-start md:space-x-24">
            <div className="flex md:flex-col items-center md:p-8 md:ml-24">
              <img
                src="/linkedin.png"
                alt="Linkedin"
                className=" md:w-14 md:h-14 w-14 h-14 md:mb-2 ml-1"
                style={{ zIndex: 10 }}
              />
              <p className="text-white font-nunito text-l text-center ml-1">
                Pilar Tecno
              </p>
            </div>

            <div className="flex md:flex-col items-center md:p-8">
              <img
                src="/gmail.png"
                alt="Gmail"
                className=" md:w-16 md:h-16 w-16 h-16"
                style={{ zIndex: 10 }}
              />
              <p className="text-white font-nunito text-l text-center">
                fagonzalez.nt@gmail.com
              </p>
            </div>

            <div className="flex md:flex-col items-center md:p-8">
              <img
                src="/whatsapp.png"
                alt="Whatsapp"
                className=" md:w-16 md:h-16 w-16 h-16"
                style={{ zIndex: 10 }}
              />
              <p className="text-white font-nunito text-l text-center">
                261-2517917
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
