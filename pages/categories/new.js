import useProjectData from "../../utils/ProjectDataContext";
import { useRouter } from "next/router";
import { CategoryCreator } from "../../components/categories/CategoryCreateEdit";

/**
 * create new categories page under /task-allocation/categories/new
 * 
 * @returns category creator component  
 */
export default function NewCategoryPage() {
  const [projectData, dispatch, loading] = useProjectData();
  const router = useRouter();

  const handleSubmit = (name) => {
    // dispatches an "ADD_CATEGORY" action with the name of the new category
    dispatch({
      type: "ADD_CATEGORY",
      name: name,
    });
    // and then uses the router to navigate the user back to the "/categories" page
    router.push("/categories");
  };

  // renders null if project data is loading
  if (loading) {
    return null;
  }

  // otherwise, renders the category creator component  
  // for displaying the form to create a new category
  return (
    <div>
      <div>
        <h1 className={"text-2xl font-semibold"}>New Category</h1>
        <p className={"text-slate-300"}>
          Some description about how categories data is used or whatever.
        </p>
      </div>
      <CategoryCreator onSubmit={handleSubmit} />
    </div>
  );
}
