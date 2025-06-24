import type { Route } from "./+types/home";
import { IpTracker } from "../IpTracker/IpTracker";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ip Tracker" },
    { name: "description", content: "A web application that allows users to track IP addresses, view their geolocation, and display relevant information on an interactive map." },
  ];
}

export default function Home() {
  return <IpTracker />;
}
