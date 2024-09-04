"use client";

import store from "@/redux/store";
import { GlobalLoader } from "@/components";
import { Suspense } from "react";
import { Provider } from "react-redux";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <Suspense fallback={<GlobalLoader />}>{children}</Suspense>
    </Provider>
  );
};
