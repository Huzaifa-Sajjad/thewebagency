import { useEffect, useState } from "react";
import Prismic from "@prismicio/client";
import { Client } from "../prismic-config";

function useFeatureProjects() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const client = Client();
    const doc = await client.query(
      Prismic.predicates.at("document.type", "projects"),
      { orderings: "[document.first_publication_date desc]" }
    );
    const results = doc.results;
    const featuredProjects = results.filter(
      (item) => item.data.type === "featured"
    );
    setProjects(featuredProjects);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return {
    projects,
  };
}

export default useFeatureProjects;
