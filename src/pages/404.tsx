import { useEffect, ReactNode } from "react";
import { useRouter } from "next/router";

const NotFound = (): ReactNode => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  });

  return null;
};

export default NotFound;
