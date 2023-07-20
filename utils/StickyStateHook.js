import { useEffect, useReducer, useState } from "react";

/**
 * Custom Hook to persist reducer state in localStorage.
 *
 * @param {function} reducerFunction   - The reducer function to use.
 * @param {any}      defaultValue      - The default value of the variable.
 * @param {string}   key               - Name for the variable in localstorage
 * @returns {[any, function, boolean]} - Returns the state, dispatch function, and a loading boolean.
 */
export default function useStickyReducer(reducerFunction, defaultValue, key) {

  // Constant for the special action type to override the state
  const REDUCER_OVERRIDE_TYPE = "STICKY_REDUCER_OVERRIDE";
   // set loading state to false for running the second hook
  const [loading, setLoading] = useState(true);

  const [data, dispatch] = useReducer((state, action) => {
    // returns the action's payload as the new state.
    if (action.type === REDUCER_OVERRIDE_TYPE) {
      return action.data;
    } else {
      // Otherwise, it uses the provided reducerFunction to calculate the new state
      return reducerFunction(state, action);
    }
  }, defaultValue);
  // Effect to fetch data from localStorage and overwrite state with it on first render
  useEffect(() => {
    // make sure is in the browser environment
    if (typeof window === "undefined") {
      return;
    }
    // retrieve value by specifying the variable's key in localStorage
    const retrieved = JSON.parse(window.localStorage.getItem(key));
    // dispatch the action with retrieved value
    dispatch({
      type: REDUCER_OVERRIDE_TYPE,
      data: retrieved !== null ? retrieved : defaultValue,
    });
    // enable second hook
    setLoading(false);
  }, []);

  // Save the current state to localStorage whenever it changes
  useEffect(() => {
    // Skip if server-side rendering and first retrieving
    if (typeof window === "undefined" || loading) {
      return;
    }

    window.localStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  return [data, dispatch, loading];
}

// adapted from https://www.joshwcomeau.com/react/persisting-react-state-in-localstorage/
// this allows persisting state in local storage for SSR

/**
 * Custom Hook to persist state in localStorage.
 *
 * @param {any}    defaultValue        - The default value of the variable.
 * @param {string} key                 - Name for the variable in localstorage
 * @returns {[any, function, boolean]} - Returns the state, setState function, and a loading boolean.
 */
export function useStickyState(defaultValue, key) {

  // set loading state to false for running the second hook
  const [loading, setLoading] = useState(true);
   // Create state with the default value
  const [value, setValue] = useState(defaultValue);
  // Retrieve data from localStorage and overwrite state with it on first render
  useEffect(() => {
    // make sure is in the browser environment
    if (typeof window === "undefined") {
      return;
    }
    // retrieve value by specifying the variable's key in localStorage
    const retrieved = JSON.parse(window.localStorage.getItem(key));
    // update to the retrieved value if stored before, otherwise remain as default value
    setValue(retrieved !== null ? retrieved : defaultValue);
    // enable second hook
    setLoading(false);
  }, []);
  // Only after the first retrieve, save the current state to localStorage whenever it changes
  useEffect(() => {
    // make sure is in the browser environment and is after the first retrieve
    if (typeof window === "undefined" || loading) {
      return;
    }
    // update the variable value in localstorage
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue, loading];
}
