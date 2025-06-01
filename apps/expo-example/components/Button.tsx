import { Pressable, SxProp, Text, useSx } from "dripsy";
import { createDripsyVariants } from "dripsy-variants";

type Variant = "primary" | "secondary" | "link";
type Size = "md" | "sm";

const getButtonStyles = createDripsyVariants({
  base: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  variants: {
    variant: {
      primary: { backgroundColor: "#0F0F0F" },
      secondary: { backgroundColor: "#E8E8E8" },
      link: { backgroundColor: "transparent" },
    },
    size: {
      md: { py: "$1_5", px: "$2", borderRadius: 16 },
      sm: { py: "$1", px: "$2", borderRadius: 12 },
    },
    disabled: {
      true: {},
      false: {},
    },
    pressed: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      pressed: ["true"],
      variant: ["primary"],
      sx: { backgroundColor: "#454545" },
    },
    {
      pressed: ["true"],
      variant: ["secondary"],
      sx: { backgroundColor: "#D3D3D3" },
    },
    {
      disabled: ["true"],
      variant: ["primary"],
      sx: { backgroundColor: "#F3F3F3" },
    },
    {
      disabled: ["true"],
      variant: ["secondary"],
      sx: { backgroundColor: "#F3F3F3" },
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

const getTextStyles = createDripsyVariants({
  base: {
    textAlign: "center",
    flex: 1,
  },
  variants: {
    variant: {
      primary: { color: "$white" },
      secondary: { color: "#2A2E2F" },
      link: { color: "#2A2E2F" },
    },
    size: {
      md: { variant: "text.$buttonMd" },
      sm: { variant: "text.$buttonSm" },
    },
    // Estado deshabilitado sirve para los compoundVariants
    // no hay necesidad de poner estilos directamente
    disabled: {
      true: {},
      false: {},
    },
    // Estado presionado sirve para los compoundVariants
    // no hay necesidad de poner estilos directamente
    pressed: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      disabled: ["true"],
      variant: ["primary"],
      sx: { color: "#A8A8A8" },
    },
    {
      disabled: ["true"],
      variant: ["secondary"],
      sx: { color: "#D3D3D3" },
    },
    {
      disabled: ["true"],
      variant: ["link"],
      sx: { color: "#A8A8A8" },
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface ButtonProps {
  title: string;
  onPress?: () => void;
  sx?: SxProp;
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
}

export const Button = ({
  title,
  onPress = () => {},
  disabled = false,
  sx = {},
  variant = "primary",
  size = "md",
}: ButtonProps) => {
  const sxConverter = useSx();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
        sxConverter({
          ...getButtonStyles({
            variant,
            size,
            pressed: pressed ? "true" : "false",
            disabled: disabled ? "true" : "false",
          }),
          ...sx,
        })
      }
    >
      {({ pressed }) => {
        const textStyles = getTextStyles({
          variant,
          size,
          disabled: disabled ? "true" : "false",
          pressed: pressed ? "true" : "false",
        });

        return <Text sx={textStyles}>{title}</Text>;
      }}
    </Pressable>
  );
};
