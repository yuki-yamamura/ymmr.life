"use client";

import { useRouter } from "next/navigation";
import { RouterProvider as ReactAriaRouterProvider } from "react-aria";

declare module "react-aria-components" {
  type Test = Parameters<NonNullable<ReturnType<typeof useRouter>["push"]>>[1];
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

type Props = React.PropsWithChildren;

export const RouterProvider = ({ children }: Props) => {
  const router = useRouter();

  return (
    <ReactAriaRouterProvider navigate={router.push}>
      {children}
    </ReactAriaRouterProvider>
  );
};
