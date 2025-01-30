import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Avatar,
  Button as NextUIButton,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiAccountGroup, mdiLightbulbOn } from "@mdi/js";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <NextUINavbar
        shouldHideOnScroll
        isBlurred
        className="bg-background/10 w-full h-24"
        maxWidth="full"
      >
        <NavbarBrand>
          <div
            className="flex items-center md:ml-10 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Avatar
              src="/logo-pilar-listo.png"
              size="lg"
              className="shadow-[0_0_10px_rgba(255,255,255,0.9)] md:w-12 md:h-12 w-8 h-8 "
            />
            <div className="flex flex-col">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, staggerChildren: 0.1 }}
                className="md:ml-4 ml-2 text-inherit text-white md:text-2xl text-l font-semi-bold font-fredoka"
              >
                PILAR TECNO
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, staggerChildren: 0.1 }}
                className="md:ml-4 ml-2 text-inherit text-white md:text-sm text-xs font-semi-bold font-fredoka"
              >
                E-learning
              </motion.p>
            </div>
          </div>
        </NavbarBrand>
        <NavbarContent justify="end" className="md:mr-12">
          <NavbarItem>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <NextUIButton
                as={motion.button}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 2px 10px rgba(255, 255, 255, 0.3)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
                endContent={
                  <Icon path={mdiAccountGroup} color="white" size={0.9} />
                }
                href="#"
                variant="bordered"
                className="md:text-xl text-l rounded-2xl font-fredoka font-light py-6 md:px-4 px-2 text-white border-opacity-20 hover:border-opacity-70 bg-opacity-20 text-opacity-60 hover:text-white hover:bg-white hover:bg-opacity-5"
                onClick={() => navigate("/Team")}
              >
                Equipo
              </NextUIButton>
            </motion.div>
          </NavbarItem>
          <NavbarItem>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <NextUIButton
                as={motion.button}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 2px 10px rgba(255, 255, 255, 0.3)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
                endContent={
                  <Icon path={mdiLightbulbOn} color="white" size={0.8} />
                }
                href="#"
                variant="bordered"
                className="md:text-xl text-l rounded-2xl font-fredoka font-light py-6 md:px-4 px-2 text-white border-opacity-20 hover:border-opacity-70 bg-opacity-20 text-opacity-60 hover:text-white hover:bg-white hover:bg-opacity-5"
                onClick={() => navigate("/Info")}
              >
                + Info
              </NextUIButton>
            </motion.div>
          </NavbarItem>
        </NavbarContent>
      </NextUINavbar>
      {location.pathname !== "/registration" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
          className="flex flex-row items-center md:justify-end md:p-2 p-1 fixed md:top-32 top-24 md:right-24 right-6 -right-0 z-10 rounded-xl bg-white"
          style={{ zIndex: 50 }}
        >
          <p className="font-fredoka font-semibold md:text-md text-xs md:mr-4 mr-2 text-transparent bg-clip-text bg-gradient-to-l from-secondary to-yellow-400">
            Nueva Edición
            <br />
            Próximamente
          </p>
          <NextUIButton
            as={motion.button}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 2px 10px rgba(255, 255, 255, 0.3)",
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            href="#"
            variant="solid"
            color="secondary"
            className="md:text-sm text-xs text-bold md:rounded-2xl rounded-xl font-nunito md:py-6 py-4 md:px-4 px-1 text-white"
            onClick={() => navigate("/registration")}
          >
            Saber Más
          </NextUIButton>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
