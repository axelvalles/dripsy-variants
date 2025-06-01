# dripsy-variants

**Variant utility for Dripsy** – A lightweight helper to build style variants and compound variants using `sx` props.

> Inspired by Tailwind Variants and styled-system patterns.

## ✨ Features

- ✅ Define `base` styles
- ✅ Support for multiple `variants`
- ✅ Support for `compoundVariants`
- ✅ `defaultVariants` handling
- ✅ Type-safe with full TypeScript support

## 📦 Installation

```bash
npm install dripsy-variants
# or
yarn add dripsy-variants
```

> Make sure you also have `dripsy` installed.

## 🚀 Usage

```typescript
import { createDripsyVariant } from "dripsy-variants";

const getButtonStyles = createDripsyVariant({
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

const getTextStyles = createSxVariant({
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

// Usage
export const Button = ({
  title,
  onPress = () => {},
  icon,
  isLoading = false,
  disabled = false,
  sx = {},
  variant = "primary",
  size = "md",
}: ButtonProps) => {
  const sxConverter = useSx();
  const { theme } = useDripsyTheme();

  return (
    <Pressable
      disabled={isLoading || disabled}
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

        const colorToken = textStyles.color as keyof typeof theme.colors;
        const resolvedColor = theme.colors?.[colorToken] ?? colorToken;

        const renderedIcon = enhanceIconElement(icon, {
          color: resolvedColor,
          size: 16,
        });

        return (
          <>
            <View sx={{ width: 20 }}>{isLoading && <Spinner />}</View>
            <Text sx={textStyles}>{title}</Text>
            <View sx={{ width: 20 }}>{icon && renderedIcon}</View>
          </>
        );
      }}
    </Pressable>
  );
};
```

## 🧠 API Reference

### `createDripsyVariant(config)`

#### `config.base?: SxProp`

Base styles applied to all variants.

#### `config.variants?: Record<string, Record<string, SxProp>>`

Object containing named variants (like `variant`, `size`, etc.).

#### `config.defaultVariants?: { [K in keyof Variants]?: keyof Variants[K] }`

Default values used when no variant prop is passed.

#### `config.compoundVariants?: CompoundVariant[]`

List of compound variant conditions to apply extra styles based on a combination of variant values.

Each `CompoundVariant` is:

{
sx: SxProp;
[key: string]: string[]; // matches variant keys and values
}

## 🪪 License

MIT License © 2025 Axel Valles
