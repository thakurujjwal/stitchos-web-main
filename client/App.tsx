import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Quality from "./pages/Quality";
import Production from "./pages/Production";
import Compliance from "./pages/Compliance";
import QRTraceability from "./pages/QRTraceability";
import QMSConsultancy from "./pages/QMSConsultancy";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/solutions/quality" element={<Quality />} />
              <Route path="/solutions/analytics" element={<Production />} />
              <Route
                path="/solutions/qr-traceability"
                element={<QRTraceability />}
              />
              <Route path="/solutions/compliance" element={<Compliance />} />
              <Route
                path="/solutions/qms-consultancy"
                element={<QMSConsultancy />}
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/docs" element={<Resources />} />
              <Route path="/case-studies" element={<Resources />} />
              <Route path="/support" element={<Resources />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
