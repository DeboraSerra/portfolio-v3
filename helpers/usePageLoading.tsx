import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export const usePageLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const routeEventStart = () => {
      setIsLoading(true);
    };
    const routeEventEnd = () => {
      setIsLoading(false);
    };
    router.events.on("routeChangeStart", routeEventStart);
    router.events.on("routeChangeComplete", routeEventEnd);
    router.events.on("routeChangeError", routeEventEnd);
    return () => {
      router.events.off("routeChangeStart", routeEventStart);
      router.events.off("routeChangeComplete", routeEventEnd);
      router.events.off("routeChangeError", routeEventEnd);
    };
  }, []);
  return { isLoading };
};
