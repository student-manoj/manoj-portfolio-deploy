import { atomWithStorage } from "jotai/utils";

const ThemeAtom = atomWithStorage("enabled", false);
export default ThemeAtom;
