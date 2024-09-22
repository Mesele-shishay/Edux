import { usePathname } from "next/navigation";

// returns the public url for @path
export const asset = (path: string): string => {
  return `/${path}`;
};

// // returns current route
// export const currentRoute = () => {
//   const pathName = usePathname();
//   return pathName;
// };

// // checkes if current rout is same as @route var
// export const isRoute = (route: string): boolean => {
//   const pathName = currentRoute().split("/").reverse()[0];
//   return route === pathName;
// };
