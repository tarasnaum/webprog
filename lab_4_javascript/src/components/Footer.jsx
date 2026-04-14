import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    localStorage.setItem("userAgent", navigator.userAgent);
    localStorage.setItem("platform", navigator.platform);
  }, []);

  const userAgent = localStorage.getItem("userAgent");
  const platform = localStorage.getItem("platform");

  return (
    <>
      <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
        Системна інформація
      </h2>

      <p className="text-gray-800 dark:text-gray-200 mb-2">
        <span className="font-semibold">Browser:</span> {userAgent}
      </p>

      <p className="text-gray-800 dark:text-gray-200 mb-6">
        <span className="font-semibold">Platform:</span> {platform}
      </p>

      <hr className="border-gray-300 dark:border-gray-600 mb-6" />
    </>
  );
}

export default Footer;
