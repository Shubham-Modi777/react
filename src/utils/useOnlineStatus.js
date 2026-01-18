import { useEffect, useState } from "react";

//custumise hook
const useOnlineStatus = () => {
  const [OnlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  //boolean value
  return OnlineStatus;
};

export default useOnlineStatus;
