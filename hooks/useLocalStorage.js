'use client';
import { useState, useEffect } from 'react';

function getStorageValue(key, defaultValue) {
  
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(key);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse localStorage value", e);
        return defaultValue;
      }
    }
  }
  return defaultValue;
}

export function useLocalStorage(key, defaultValue) {

  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
         console.error("Failed to save to localStorage", e);
      }
    }
  }, [key, value]);

  return [value, setValue];
}