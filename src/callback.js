import { useEffect } from "react";
import { magic } from "./magic";
import { useNavigate } from "react-router-dom";

export default function Callback() {
  const navigate = useNavigate();
  useEffect(() => {
    magic.auth.loginWithCredential().then(() => {
      navigate("/");
    });
  }, [navigate]);
}
