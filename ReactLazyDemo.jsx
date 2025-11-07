import React, { Suspense } from "react";

 //Lazy load Profile component
const Profile = React.lazy(() => import("./Profile"));

function ReactLazyDemo() {
  return (
    <div>
      <h1>Home Page</h1>
      <Suspense fallback={<p>Loading Profile...</p>}>
        <Profile />
      </Suspense>
    </div>
  );
}
export default ReactLazyDemo