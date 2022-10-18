import { api } from "../../servers/Api";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useProvider } from "../../contexts/UserContext";

export const ProtectRoutes = () => {
  const { navigate, setUser, isToken, rend, setRend, setRendModal, rendModal } =
    useProvider();

  useEffect(() => {
    const requestProfile = async () => {
      try {
        const response = await api.get("/profile", {
          headers: {
            "Context-Type": "Application/json",
            Authorization: `Bearer ${JSON.parse(isToken)}`,
          },
        });
        setRend(true);
        setRendModal(true);
        setUser({ ...response.data });
      } catch (error) {
        navigate("/");
      }
    };
    requestProfile();
  }, [rendModal]);
  return <>{rend && <Outlet />}</>;
};