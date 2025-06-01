import { SxProp } from "dripsy";

type VariantDefinitions = Record<string, Record<string, SxProp>>;

type CompoundVariant = {
  sx: SxProp;
  [key: string]: string[] | SxProp;
};

type Config<Variants extends VariantDefinitions = VariantDefinitions> = {
  base?: SxProp;
  variants?: Variants;
  compoundVariants?: CompoundVariant[];
  defaultVariants?: {
    [K in keyof Variants]?: keyof Variants[K];
  };
};

type VariantProps<V extends VariantDefinitions> = {
  [K in keyof V]?: keyof V[K];
};

export function createDripsyVariants<
  V extends VariantDefinitions = VariantDefinitions,
>(config: Config<V>) {
  return (props: VariantProps<V> = {}) => {
    const {
      base = {},
      variants = {} as V,
      compoundVariants = [],
      defaultVariants = {} as {
        [K in keyof V]?: keyof V[K];
      },
    } = config;

    const resolved: SxProp[] = [base];

    (Object.keys(variants) as (keyof V)[]).forEach((key) => {
      const selected = props[key] ?? defaultVariants[key];
      if (selected && variants[key]?.[selected]) {
        resolved.push(variants[key][selected]);
      }
    });

    for (const cv of compoundVariants) {
      const match = Object.entries(cv).every(([key, value]) => {
        if (key === "sx") return true;

        const propKey = key as keyof V;
        const propValue = props[propKey] ?? defaultVariants[propKey];

        return Array.isArray(value)
          ? value.includes(propValue as string)
          : propValue === value;
      });

      if (match) {
        resolved.push(cv.sx);
      }
    }

    return Object.assign({}, ...resolved);
  };
}
