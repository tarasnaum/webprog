import { useEffect, useState } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/12/comments")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <>
      <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">
        Відгуки
      </h2>

      <div className="space-y-4 mb-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 shadow-sm"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {review.name}
            </h3>

            <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
              {review.email}
            </p>

            <p className="text-gray-700 dark:text-gray-200 leading-6">
              {review.body}
            </p>
          </div>
        ))}
      </div>

      <hr className="border-gray-300 dark:border-gray-600 mb-6" />
    </>
  );
}

export default Reviews;
