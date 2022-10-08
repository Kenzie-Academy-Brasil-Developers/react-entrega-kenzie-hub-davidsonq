import { useEffect, useState } from "react";
import { Header } from "../Header";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../servers/Api";
import Lottie from "react-lottie";
import * as animationData from "../../lotties/loading.json";
export const DashBord = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [useProfile, setUseProfile] = useState({});

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { id } = useParams();
  const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
  useEffect(() => {
    api
      .get("/profile", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (id !== res.data.id) {
          navigate("/no-page");
        }
        setUseProfile(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        navigate("/no-page");
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <>
          <h1>Aguarde...</h1>
          <Lottie options={defaultOptions} height={400} width={400} />
        </>
      ) : (
        <>
          <Header />
          <main>
            <section>
              <h2>{`Olá,${useProfile.name}`}</h2>
              <p>{useProfile.course_module}</p>
            </section>
            <section>
              <h3>Que pena!Estamos em desenvolvimento :(</h3>
              <p>
                Nossa aplicação está em desenvolvimento, em breve teremos
                novidades
              </p>
            </section>
          </main>
        </>
      )}
    </>
  );
};
