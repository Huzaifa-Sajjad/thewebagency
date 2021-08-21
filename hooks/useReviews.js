import { useEffect, useState } from "react";
import Prismic from "@prismicio/client";
import { Client } from "../prismic-config";

function useReviews() {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    const client = Client();
    const doc = await client.query(
      Prismic.predicates.at("document.type", "reviews"),
      { orderings: "[document.first_publication_date desc]" }
    );
    setReviews(doc.results);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return {
    reviews,
  };
}

export default useReviews;
