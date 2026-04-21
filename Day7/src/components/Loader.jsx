// Loader.jsx
import React from 'react'
function Loader() {
  return (
    <div className="loader">
      <svg class="w-8 h-8 text-orange-600 animate-spin" viewBox="0 0 24 24"><path fill="currentColor" d="M6 2v6h.01L12 12l5.99-4H18V2H6zm0 20h12v-6h-.01L12 12l-5.99 4H6v6z"/></svg>  
      <p>Loading...</p>
    </div>
  )
}
export default Loader