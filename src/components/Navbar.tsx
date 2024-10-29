import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Avatar,
  Button as NextUIButton,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiAccountGroup, mdiLightbulbOn } from "@mdi/js";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NextUINavbar
      shouldHideOnScroll
      isBlurred
      className="bg-background/10 w-full h-24"
      maxWidth="full"
    >
      <NavbarBrand>
        <div
          className="flex items-center md:ml-10  cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Avatar
            src="/logo-pilar1.png"
            size="md"
            className="shadow-[0_0_10px_rgba(255,255,255,0.9)]  "
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, staggerChildren: 0.1 }}
            className="md:ml-4 ml-2 text-inherit text-white md:text-2xl text-xl font-semi-bold font-fredoka"
          >
            PILAR TECNO
          </motion.p>
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
              className="text-xl rounded-2xl font-fredoka font-light py-6 text-white border-opacity-20 hover:border-opacity-70 bg-opacity-20 text-opacity-60 hover:text-white hover:bg-white hover:bg-opacity-5"
            >
              The Team
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
              className="text-xl rounded-2xl font-fredoka font-light py-6 text-white border-opacity-20 hover:border-opacity-70 bg-opacity-20 text-opacity-60 hover:text-white hover:bg-white hover:bg-opacity-5"            >
              + Info
            </NextUIButton>
          </motion.div>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};

export default Navbar;
