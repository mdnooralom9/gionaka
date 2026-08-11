export default function HelpPage() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Gionaka Help Centre
      </h1>

      <p className="text-gray-600 mb-10">
        Find answers to common questions and get support.
      </p>

      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold">
            I can't log in
          </h2>
          <p className="mt-2 text-gray-600">
            Make sure you are using the correct mobile number and OTP.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            My account is suspended
          </h2>
          <p className="mt-2 text-gray-600">
            Contact Gionaka Support for account verification.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            Contact Support
          </h2>

          <p className="mt-2">
            Email: support@gionaka.com
          </p>
        </div>
      </section>
    </main>
  )
}