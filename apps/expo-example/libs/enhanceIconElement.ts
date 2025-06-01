import { cloneElement, isValidElement, ReactElement, ReactNode } from "react";

interface IconProps {
  color?: string;
  size?: number;
}

export function enhanceIconElement(
  element: ReactNode,
  props: Partial<IconProps>
): ReactNode {
  if (!isValidElement(element)) return null;

  const el = element as ReactElement<any>;

  // Si tiene children válidos, asumimos que es un contenedor (como Pressable)
  if (el.props.children && isValidElement(el.props.children)) {
    const inner = el.props.children as ReactElement<any>;

    // Clonamos el hijo (ícono) con props y luego clonamos el contenedor
    const clonedChild = cloneElement(inner, {
      ...props,
      ...inner.props, // evita sobrescribir props ya definidos por el usuario
    });

    return cloneElement(el, {
      children: clonedChild,
    });
  }

  // Si no tiene children, lo tratamos como ícono directo
  return cloneElement(el, {
    ...props,
    ...el.props,
  });
}
