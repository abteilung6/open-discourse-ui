import { Text, useBreakpointValue } from "@chakra-ui/react";
import styles from "./styles.module.css";

interface ColoredSublineProps {
  backgroundColor: string;
}

export const ColoredSubline: React.FC<ColoredSublineProps> = ({
  backgroundColor,
  children,
}) => {
  const textSize = useBreakpointValue({
    base: "sm",
    sm: "xl",
    md: "2xl",
    lg: "3xl",
    xl: "4xl",
  });
  const marginBottom = useBreakpointValue({
    base: "4",
    sm: "10",
    md: "10",
    lg: "14",
    xl: "14",
  });
  const borderWidth = useBreakpointValue({
    base: "8px",
    sm: "12px",
    md: "12px",
    lg: "16px",
    xl: "16px",
  });
  return (
    <Text
      marginBottom={marginBottom}
      fontFamily="Source Code Pro"
      textTransform="uppercase"
      fontWeight="bold"
      color="white"
      fontStyle="italic"
      fontSize={textSize}
    >
      <Text
        as="span"
        background={backgroundColor}
        borderColor={backgroundColor}
        borderLeftWidth={borderWidth}
        borderRightWidth={borderWidth}
        className={styles.insertWhitespace}
      >
        {children}
      </Text>
    </Text>
  );
};
