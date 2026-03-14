function PersonalInfo() {
  return (
    <>
      <h2 className="text-2xl font-bold text-blue-700 mb-3">
        Особиста інформація
      </h2>

      <p className="text-gray-800 leading-7">
        <b className="text-gray-900">Ім’я:</b> Наумчук Тарас Ігорович
      </p>

      <p className="text-gray-800 leading-7">
        <b className="text-gray-900">Місто:</b> Львів, Україна
      </p>

      <p className="text-gray-800 leading-7">
        <b className="text-gray-900">Email:</b> taras.naumchuk.kb.2023@lpnu.ua
      </p>

      <p className="text-gray-800 leading-7 mb-6">
        <b className="text-gray-900">Телефон:</b> +380000000000
      </p>

      <hr className="border-gray-300 mb-6" />
    </>
  );
}

export default PersonalInfo;
