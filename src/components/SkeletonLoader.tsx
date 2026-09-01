import React from 'react';

export default function SkeletonLoader() {
  return (
    <div className="w-full flex-1 flex flex-col p-4 md:p-6 gap-6 animate-pulse">
      {/* Hero Skeleton */}
      <div className="h-[500px] w-full bg-gray-200 dark:bg-gray-800 rounded-3xl mb-4 max-w-7xl mx-auto"></div>
      
      {/* Portals Skeleton */}
      <div className="max-w-7xl mx-auto w-full h-[300px] bg-gray-200 dark:bg-gray-800 rounded-3xl mb-6"></div>
      
      {/* Cards Skeleton */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>
        <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>
        <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>
      </div>
    </div>
  );
}
