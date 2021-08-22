import { useEffect, useState } from "react";
import Prismic from "@prismicio/client";
import { Client } from "../prismic-config";

function useProjects() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const client = Client();
    const doc = await client.query(
      Prismic.predicates.at("document.type", "projects"),
      { orderings: "[document.first_publication_date desc]" }
    );
    setProjects(doc.results);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return {
    projects,
  };
}

export const getProjects = async () => {
  const client = Client();
  const doc = await client.query(
    Prismic.predicates.at("document.type", "projects"),
    { orderings: "[document.first_publication_date desc]" }
  );
  return doc.results;
};

export default useProjects;
