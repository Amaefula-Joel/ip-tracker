import type { Route } from "./+types/home";
import { IpTracker } from "../IpTracker/IpTracker";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ip Address Tracker" },
    { name: "description", content: "A web application that allows users to track IP addresses, view their geolocation, and display relevant information on an interactive map." },
    { name: "author", content: "Amaefula Joel" },
    { name: "keywords", content: "IP address, tracker, geolocation, map, web application" },
  ];
}

export default function Home() {
  return <IpTracker />;
}
