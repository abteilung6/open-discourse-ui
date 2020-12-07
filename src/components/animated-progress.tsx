import { Progress, Text, useBreakpointValue, Box } from "@chakra-ui/react";
import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

import { useInView } from "react-intersection-observer";

interface AnimatedProgressProps {
  to: number;
}
export const AnimatedProgress: React.FC<AnimatedProgressProps> = ({ to }) => {
  const nodeRef = useRef<HTMLParagraphElement>(null);

  return (
    <Box
      borderRadius={"0.5em"}
      backgroundColor="rgb(233, 233, 233)"
      height="10px"
    >
      <Box
        backgroundColor="rgb(62, 122, 235)"
        height="10px"
        borderRadius="1rem"
        transition="1s ease"
        transitionDelay="0.5s"
      ></Box>
    </Box>
  );
};
