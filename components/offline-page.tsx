"use client"

import { ExclamationTriangleIcon } from "@heroicons/react/24/outline"

export default function OfflinePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="rounded-full p-6 bg-amber-100">
        <ExclamationTriangleIcon className="h-12 w-12 text-amber-600" aria-hidden="true" />
      </div>
      <h1 className="mt-4 text-2xl font-semibold text-gray-800">No Internet Connection</h1>
      <p className="mt-2 text-gray-600">Please check your internet connection and try again.</p>

      <div className="mt-6 border border-amber-200 bg-amber-50 rounded-md p-4">
        <p className="text-gray-700">You are currently viewing an offline version of this page.</p>
      </div>

      <button
        onClick={() => window.location.reload()}
        className="mt-6 px-4 py-2 rounded-md text-white bg-primary hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
      >
        Try Again
      </button>
    </div>
  )
}
