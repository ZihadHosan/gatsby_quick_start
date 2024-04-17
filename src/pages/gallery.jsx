import React from "react";
import Layout from "../components/layout";

export default function GalleryPage() {
  return (
    <>
      <Layout>
        <main>
          <div className="container">
            <div className="h-[50vh] flex items-center justify-center">
              <h1 className="text-cyan-400 text-4xl">Gallery Page</h1>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
