# 🌍 IP Address Tracker

This is a responsive web app that allows users to track the geographical location of any IP address or domain name. Built with **React**, **TypeScript**, **React Router**, **LeafletJS**, **TailwindCSS**, and powered by the **IPify Geolocation API**.

![Screenshot](./screenshot.png) <!-- Replace with actual path to your screenshot -->

---

## 🔗 Live Demo

[View Project](https://your-live-demo-url.com) <!-- Replace with your live site URL -->

---

## ✨ Features

- 🔍 Search for any IP address or domain
- 📍 View geolocation on an interactive map
- 🌐 Auto-load your current IP info on first visit
- 📱 Fully responsive design for mobile, tablet, and desktop
- 🧭 Displays IP address, location, timezone, and ISP
- 🎯 Built with a clean, component-based architecture using React + TypeScript

---

## 🛠 Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [LeafletJS](https://leafletjs.com/)
- [React Leaflet](https://react-leaflet.js.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [IPify API](https://geo.ipify.org/)
- [Vite](https://vitejs.dev/)

---

## 🚧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ip-address-tracker.git
   cd ip-address-tracker

2. **Install dependencies**

   ```bash
   npm install
   
3. **Add your IPify API Key**

   ```bash
   VITE_IPIFY_API_KEY=your_api_key_here

3. **Start the development server**

   ```bash
   npm run dev


## 🛠 Technologies Used


- How to work with LeafletJS in a React + Vite + SSR-sensitive environment

- Handling geolocation API data with dynamic rendering

- Managing and structuring a React + TypeScript project for scalability

- Styling responsive layouts quickly using TailwindCSS

- Avoiding window is not defined errors by conditionally rendering client-side code with useEffect


## 💡 Challenges Faced
I encountered an error when trying to render the Leaflet map:


```
window is not defined
```

This happened because Leaflet depends on the `window` object, which isn’t available during SSR or hydration. I solved it by wrapping the map rendering in a `useEffect` hook to ensure it only runs on the client after the component mounts.

## 📁 Folder Structure

```
app/
├── components/
│   ├── IpInfoCard.tsx
│   └── MapView.tsx
├── hooks/
│   └── useIpData.ts
├── ipTracker/
│   ├── ipTracker.tsx
│   └── IpTrackerPlayground.tsx
├── routes/
│   ├── home.tsx
│   └── playground.tsx
├── root.tsx
├── app.css
└── ...
```

## 📸 Screenshots

Desktop View:  
![Desktop Screenshot](/public/1750907968171.jpg)

Mobile View:  
![Mobile Screenshot](/public/1750907968176.jpg)

---

## 🧾 License

This project is open-source and free to use.  
Feel free to fork, improve, and build upon it!

---

## 🙌 Acknowledgements

- **Frontend Mentor** for the original challenge design inspiration  
- **IPify** for the awesome geolocation API  
- **React Leaflet** for making Leaflet easy in React

---

## 🔗 Let's Connect

If you found this project helpful or interesting, feel free to connect:

- [LinkedIn](#https://www.linkedin.com/in/joel-amaefula-10a030257/)
- [Portfolio](https://joel.com.ng)