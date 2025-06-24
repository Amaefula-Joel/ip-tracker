import type { Route } from "./+types/home";
import { IpTracker } from "../IpTracker/IpTracker";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <IpTracker />;
}
