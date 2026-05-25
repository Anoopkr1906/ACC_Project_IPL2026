const REGISTRATION_FORM_URL = 'https://forms.gle/your-form-id'

function Registration() {
  return (
    <div className="bg-surface min-h-screen flex items-center justify-center font-sans antialiased px-6">
      <div className="max-w-xl text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Event Registration</h1>
        <p className="text-white/40 text-lg mb-8">Register for our upcoming event by clicking the button below.</p>

        <a
          href={REGISTRATION_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-shadow shadow-md"
        >
          Register Now
        </a>

        <p className="text-white/30 text-sm mt-6">You will be redirected to a Google Form to complete the registration.</p>
      </div>
    </div>
  )
}

export default Registration
