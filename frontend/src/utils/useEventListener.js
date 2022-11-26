import { useRef, useEffect } from "react";

export default function useEventListener(eventType, callback, element) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    element = window;
  }, []);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (e) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}