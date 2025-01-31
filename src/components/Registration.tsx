import { Button as NextUIButton } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col md:w-4/5 w-5/6 md:mt-16 mt-0 m-auto p-8 space-y-8">
        <div className="flex md:flex-row flex-col w-4/6 p-8 items-center justify-center m-auto  ">
          <div>
            <img
              src="/girl-rocket.png"
              alt="Hat"
              className="flex md:w-auto md:h-36 w-36 h-auto"
              style={{
                filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.4))",
              }}
            />
          </div>
          <div className="flex flex-col md:space-y-4 md:text-left text-center">
            <h2 className="font-fredoka text-white md:text-5xl text-2xl">
              Una nueva edición está a
            </h2>

            <h2 className="font-fredoka md:text-6xl text-5xl text-transparent bg-clip-text bg-gradient-to-l from-secondary to-yellow-400">
              punto de DESPEGAR...
            </h2>
          </div>
        </div>

        <div
          className="flex md:flex-col flex-col md:w-4/6 w-6/6 md:p-12 p-4 items-center justify-center m-auto md:space-x-2 rounded-3xl"
          style={{
            background:
              "linear-gradient(to top, rgba(75, 0, 130, 0.1), rgba(128, 0, 128, 0.1), rgba(255, 192, 203, 0.1))",
          }}
        >
          <div
            className="md:mb-8 mb-4 text-center m-auto items-center md:p-8 p-4 rounded-3xl"
            style={{
              background:
                "linear-gradient(to top, rgba(75, 0, 130, 0.1), rgba(128, 0, 128, 0.1), rgba(255, 192, 203, 0.1))",
            }}
          >
            <p className="text-white font-fredoka font-light md:text-xl text-sm">
              En febrero arranca la 6ta Edición de Desarrollo Web de Pilar
              Tecno!
            </p>
            <p className="text-white font-fredoka font-light md:text-xl text-sm mb-12">
              Si estás interesado/a en participar, podés postularte a través del
              siguiente formulario:
            </p>

            <div
              className="flex md:flex-col flex-col md:w-3/6 items-center justify-center m-auto p-8 space-y-4 rounded-3xl border-2 border-warning border-opacity-40"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(75, 0, 130, 0.2), rgba(128, 0, 128, 0.2), rgba(255, 192, 203, 0.2))",
              }}
            >
              <img
                src="/form-1.png"
                alt="Hat"
                className="flex md:w-24 md:h-24 w-auto h-12"
                style={{
                  filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.4))",
                }}
              />

              <NextUIButton
                as={motion.button}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 2px 10px rgba(255, 255, 255, 0.3)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
                href="#"
                isDisabled
                variant="bordered"
                className="md:text-xl text-l rounded-2xl font-fredoka font-light py-6 md:px-4 px-2 text-white border-opacity-20 hover:border-opacity-70 bg-opacity-20 text-opacity-60 hover:text-white hover:bg-white hover:bg-opacity-5"
                onClick={() => navigate("/")}
              >
                Formulario de Inscripción
              </NextUIButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
