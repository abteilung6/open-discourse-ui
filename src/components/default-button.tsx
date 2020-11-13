import { Button, ButtonProps, useBreakpointValue } from "@chakra-ui/core";
import { ArrowForwardIcon } from "@chakra-ui/icons";

interface DefaultButtonProps extends ButtonProps {
  colorScheme: string;
}
export const DefaultButton: React.FC<DefaultButtonProps> = ({
  children,
  colorScheme,
  ...props
}) => {
  const buttonSize = useBreakpointValue({ base: "md", md: "md", lg: "lg" });

  return (
    <Button
      colorScheme={colorScheme}
      size={buttonSize}
      textTransform="uppercase"
      rightIcon={<ArrowForwardIcon />}
      {...props}
    >
      {children}
    </Button>
  );
};