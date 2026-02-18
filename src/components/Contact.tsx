export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          I&apos;m currently open to new opportunities. Whether you have a question
          or just want to say hi, feel free to reach out!
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:imnirmalkumar@gmail.com"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Say Hello
          </a>
          <a
            href="https://github.com/nirmal232"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/nirmal23"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
