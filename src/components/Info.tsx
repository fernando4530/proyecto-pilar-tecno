import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col justify-center m-auto">
        <img
          src="/no-pass.png"
          alt="Connections"
          className="w-48 h-48 m-auto mt-48 mb-4"
          style={{
            filter: "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5))",
          }}
        />
        <h2 className="text-white text-2xl m-auto mt-4 mb-12">
          Sección en construcción
        </h2>

        <Button
          disableRipple
          className="text-white m-auto font-fredoka text-xl overflow-visible rounded-full hover:-translate-y-1 px-4 shadow-xl bg-secondary/60 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-secondary/90 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
          size="md"
          onClick={() => navigate("/")}
        >
          Volver
        </Button>
      </div>
    </div>
  );
};

export default Team;
