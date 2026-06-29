"use client";

import { useContext } from "react";
import { LocaleContext } from "./context";

export function useTranslation() {
  return useContext(LocaleContext);
}
