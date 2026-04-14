function Skills() {
  return (
    <>
      <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
        Професійні навички
      </h2>

      <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 leading-7 mb-6">
        <li>Основи кібербезпеки</li>
        <li>Розуміння мережевих протоколів TCP/IP</li>
        <li>Аналіз логів та подій безпеки</li>
        <li>Основи роботи з SIEM системами</li>
        <li>Базові знання Linux та Windows</li>
        <li>Основи роботи з Wireshark та Nmap</li>
        <li>Базові знання Python</li>
        <li>Розуміння принципів Incident Response</li>
      </ul>

      <hr className="border-gray-300 dark:border-gray-600 mb-6" />
    </>
  );
}

export default Skills;
