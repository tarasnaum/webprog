import { useEffect, useState } from "react";

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 max-w-md w-full relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-500 dark:text-gray-300 hover:text-red-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">
          Форма зворотного зв'язку
        </h2>

        <form
          action="https://formspree.io/f/mwvrqdja"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Ім’я"
            required
            className="w-full border border-gray-300 dark:border-gray-600 
            rounded-lg p-3 bg-white dark:bg-gray-700 
            text-gray-900 dark:text-gray-200
            focus:outline-none focus:border-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full border border-gray-300 dark:border-gray-600 
            rounded-lg p-3 bg-white dark:bg-gray-700 
            text-gray-900 dark:text-gray-200
            focus:outline-none focus:border-blue-500"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            required
            className="w-full border border-gray-300 dark:border-gray-600 
            rounded-lg p-3 bg-white dark:bg-gray-700 
            text-gray-900 dark:text-gray-200
            focus:outline-none focus:border-blue-500"
          />

          <textarea
            name="message"
            placeholder="Ваше повідомлення"
            rows="4"
            required
            className="w-full border border-gray-300 dark:border-gray-600 
            rounded-lg p-3 bg-white dark:bg-gray-700 
            text-gray-900 dark:text-gray-200
            focus:outline-none focus:border-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition"
          >
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
