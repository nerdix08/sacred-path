import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function useOnboarding() {
  const [isOnboarded, setIsOnboarded] = useState<boolean | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onboarded = localStorage.getItem("vidya_onboarded") === "true";
    setIsOnboarded(onboarded);

    // Redirect to onboarding if not completed and not already on onboarding page
    if (!onboarded && location.pathname !== "/onboarding") {
      navigate("/onboarding");
    }
  }, [navigate, location.pathname]);

  const getLanguage = () => {
    return localStorage.getItem("vidya_language") || "en";
  };

  const setLanguage = (code: string) => {
    localStorage.setItem("vidya_language", code);
  };

  const completeOnboarding = () => {
    localStorage.setItem("vidya_onboarded", "true");
    setIsOnboarded(true);
  };

  const resetOnboarding = () => {
    localStorage.removeItem("vidya_onboarded");
    localStorage.removeItem("vidya_language");
    setIsOnboarded(false);
    navigate("/onboarding");
  };

  return {
    isOnboarded,
    getLanguage,
    setLanguage,
    completeOnboarding,
    resetOnboarding,
  };
}
