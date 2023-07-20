import { useRouter } from "next/router";
import useProjectData from "../utils/ProjectDataContext";
import { useEffect } from "react";

/**
 * NoProjectGuard component
 * --- 
 * Ensures that the user gets redirected to the root page ("/") 
 * if no project data has been loaded yet,preventing access to other 
 * parts of the application without valid project data.
 */
export default function NoProjectGuard({ children }) {
  const router = useRouter();
  const [projectData, dispatch, loading] = useProjectData();

  useEffect(() => {
    if (!loading && projectData.id === -1 && router.pathname !== "/") {
      router.push("/");
    }
  });

  if (loading) {
    return null;
  }

  return (projectData.id !== -1 || router.pathname === "/") && children;
}
