import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const useGSAPAnimation = (ref, fromVars, toVars) => {
  useEffect(() => {
    const element = ref.current
    if (element) {
      gsap.fromTo(
        element,
        { ...fromVars },
        {
          ...toVars,
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=100",
            end: "bottom top+=100",
            scrub: 1,
          },
        },
      )
    }
  }, [ref, fromVars, toVars])
}

export default useGSAPAnimation

