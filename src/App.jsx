import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import AppRoutes from "./routes";
import './index.css'; // or './tailwind.css'


export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-background">
          
          <main className="container mx-auto px-4 py-8">
            <AppRoutes />
          </main>
        </div>
        
      </Router>
    </Provider>
  );
}
