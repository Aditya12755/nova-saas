export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-10">
        Automation – Selenium
      </h1>

      <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16">
        Hands-on experience with Selenium WebDriver, TestNG, XPath,
        Page Object Model, Web, Game & API Testing.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="font-semibold mb-2">🎮 Game Testing</h3>
          <p className="text-sm text-gray-400">
            Functional, regression & gameplay testing.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="font-semibold mb-2">🌐 Web Testing</h3>
          <p className="text-sm text-gray-400">
            UI/UX, form validation, cross-browser testing.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="font-semibold mb-2">🔗 API Testing</h3>
          <p className="text-sm text-gray-400">
            API testing using Postman (status, response, headers).
          </p>
        </div>
      </div>
    </main>
  );
}
