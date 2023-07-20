import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { ProjectDataContext } from "../utils/ProjectDataContext";
import useStickyReducer from "../utils/StickyStateHook";
import projectDataReducer from "../utils/ProjectDataReducer";
import NoProjectGuard from "../components/NoProjectGuard";

/**
 * Core function of the application that wraps the layout 
 * and other components in a ProjectData Provider. 
 * It employs the useStickyReducer for state management.
 */
function MyApp({ Component, pageProps }) {
  const stickyReducer = useStickyReducer(
    projectDataReducer,
    { id: -1 },
    "workload_project_data"
  );

  return (
    <ProjectDataContext.Provider value={stickyReducer}>
      <NoProjectGuard>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NoProjectGuard>
    </ProjectDataContext.Provider>
  );
}

export default MyApp;
