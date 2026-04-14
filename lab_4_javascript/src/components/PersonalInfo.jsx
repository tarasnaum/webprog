function PersonalInfo() {
  return (
    <>
      <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
        Особиста інформація
      </h2>

      <p className="text-gray-800 dark:text-gray-200 leading-7">
        <b className="text-gray-900 dark:text-white">Ім’я:</b> Наумчук Тарас
        Ігорович
      </p>

      <p className="text-gray-800 dark:text-gray-200 leading-7">
        <b className="text-gray-900 dark:text-white">Місто:</b> Львів, Україна
      </p>

      <p className="text-gray-800 dark:text-gray-200 leading-7">
        <b className="text-gray-900 dark:text-white">Email:</b>{" "}
        taras.naumchuk.kb.2023@lpnu.ua
      </p>

      <p className="text-gray-800 dark:text-gray-200 leading-7 mb-6">
        <b className="text-gray-900 dark:text-white">Телефон:</b> +380000000000
      </p>

      <hr className="border-gray-300 dark:border-gray-600 mb-6" />
    </>
  );
}

export default PersonalInfo;
