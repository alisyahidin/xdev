import { useEffect, useState } from "react"

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640)
  }, [])

  return isMobile
}

export default useIsMobile