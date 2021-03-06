import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import { SetStateAction } from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import {
  DataProps,
  SelectInput,
} from "@bit/limebit.chakra-ui-recipes.select-input";

export interface FormParams {
  contentQuery?: string | null;
  factionIdQuery?: string | null;
  politicianIdQuery?: string | null;
  positionShortQuery?: string | null;
  fromDate?: string | null;
  toDate?: string | null;
}

export interface DefaultDateInputProps {
  formParams: FormParams;
  setFormParams: (value: SetStateAction<FormParams>) => void;
  value: string;
  prefix: string;
}

export const DefaultDateInput = ({
  formParams,
  setFormParams,
  value,
  prefix,
}: DefaultDateInputProps) => {
  const inputSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  return (
    <InputGroup>
      <InputLeftAddon
        height="inherit"
        width={{ base: "20%", lg: "15%" }}
        children={<Text fontSize={inputSize}>{prefix}</Text>}
      />
      <Input
        size={inputSize}
        value={value}
        placeholder="YYYY-MM-DD"
        type="text"
        focusBorderColor="pink.500"
        onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
          setFormParams({
            ...formParams,
            toDate: event.target.value,
          })
        }
      />
      <InputRightElement children={<CalendarIcon color="pink.500" />} />
    </InputGroup>
  );
};

export interface DefaultSelectInputProps {
  rawData: DataProps[];
  onSelect: (element: DataProps | undefined) => void;
  placeholder: string;
  initialValue?: DataProps;
}

export const DefaultSelectInput = ({
  rawData,
  onSelect,
  placeholder,
  initialValue,
}: DefaultSelectInputProps) => {
  const inputSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  return (
    <SelectInput
      width="100%"
      placeholder={placeholder}
      rawData={rawData}
      onSelect={onSelect}
      InputProps={{
        size: inputSize,
        focusBorderColor: "pink.500",
        type: "text",
      }}
      BoxProps={{
        backgroundColor: "white",
        borderWidth: "1px",
        borderColor: "gray.200",
      }}
      ButtonProps={{
        textColor: "black",
        rounded: "0px",
        _hover: { backgroundColor: "gray.200" },
        paddingX: "1",
      }}
      iconColor="pink.500"
      iconHoverColor="pink.100"
      initialValue={initialValue}
    />
  );
};
