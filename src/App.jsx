import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { MainProvider } from "./contexts/MainContext";
import "./App.css";
import Loading from "./components/Loading";
import BlogPage from "./components/BlogPage";
import BlogDetailPage from "./components/BlogDetailsPage";
import InteriorDesign from "./components/InteriorDesign/InteriorDesign";

// Lazy loaded components
const HomePage = lazy(() => import("./components/HomePage"));
const Navigation = lazy(() => import("./components/Navigation"));
const Studio = lazy(() => import("./components/Studio"));
const Projects = lazy(() => import("./components/Projects"));
const Login = lazy(() => import("./components/Login"));
const AdminDashboard = lazy(() => import("./components/AdminDashboard"));
const ProtectedRoute = lazy(() => import("./components/ProtectedRoute"));
const ProjectDetails = lazy(() => import("./components/ProjectDetails"));
const Footer = lazy(() => import("./components/Footer"));
const FrontendProjects = lazy(() => import("./components/FrontendProjects"));
const ContactPage = lazy(() => import("./components/ContactPage"));
const FloatingContact = lazy(() => import("./components/FloatingContact"));

const NavigationWrapper = () => {
  const location = useLocation();

  if (
    location.pathname === "/dashboard" ||
    location.pathname === "/login" ||
    location.pathname.startsWith("/project/") ||
    location.pathname === "/" ||
    location.pathname.startsWith("/projects/")
  ) {
    return null;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Navigation />
    </Suspense>
  );
};

const FooterWrapper = () => {
  const location = useLocation();

  if (
    location.pathname === "/dashboard" ||
    location.pathname === "/login" ||
    location.pathname.startsWith("/project/") ||
    location.pathname === "/"
  ) {
    return null;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Footer />
    </Suspense>
  );
};

function App() {
  return (
    <AuthProvider>
      <MainProvider>
        <Router>
          <div className="app">
            <NavigationWrapper />
            <main>
              <Suspense fallback={<Loading />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/studio" element={<Studio />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/projects/:id" element={<FrontendProjects />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:slug" element={<BlogDetailPage />} />
                  <Route
                    path="/interiordesign"
                    element={<InteriorDesign />}
                  />
                  <Route
                    path="/dashboard"
                    element={
                      <ProtectedRoute>
                        <AdminDashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/project/:id"
                    element={
                      <ProtectedRoute>
                        <ProjectDetails />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </Suspense>
            </main>
            <FooterWrapper />
            <Suspense fallback={<Loading />}>
              <FloatingContact />
            </Suspense>
          </div>
        </Router>
      </MainProvider>
    </AuthProvider>
  );
}

export default App;
