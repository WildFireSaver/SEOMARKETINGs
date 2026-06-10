import Link from "next/link"

export default function CookiePolicy() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Cookie Policy</h1>
      <p className="text-muted-foreground mb-6">How Consult&Build™ Uses Cookies</p>

      <div className="prose max-w-none">
        <p>
          <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small text files that are stored on your device when you visit our website. They help us provide
          you with a better experience by remembering your preferences and improving our services.
        </p>

        <h2>How Consult&Build™ Uses Cookies</h2>
        <p>We use cookies for several important purposes:</p>

        <h3>Essential Cookies</h3>
        <p>These cookies are necessary for our website to function properly:</p>
        <ul>
          <li>
            <strong>Session Management:</strong> Keep you logged in and remember your survey progress
          </li>
          <li>
            <strong>Security:</strong> Protect against fraud and ensure secure connections
          </li>
          <li>
            <strong>Form Data:</strong> Remember your ZIP code and consultation preferences
          </li>
        </ul>

        <h3>Analytics Cookies</h3>
        <p>These help us understand how visitors use our website:</p>
        <ul>
          <li>
            <strong>Usage Statistics:</strong> Track which pages are most popular
          </li>
          <li>
            <strong>Performance Monitoring:</strong> Identify and fix technical issues
          </li>
          <li>
            <strong>Conversion Tracking:</strong> Measure how well our service works for users
          </li>
        </ul>

        <h3>Marketing Cookies</h3>
        <p>These cookies help us show you relevant information:</p>
        <ul>
          <li>
            <strong>Personalization:</strong> Show contractors in your area
          </li>
          <li>
            <strong>Advertising:</strong> Display relevant home improvement content
          </li>
          <li>
            <strong>Social Media:</strong> Enable sharing and social features
          </li>
        </ul>

        <h2>Third-Party Cookies</h2>
        <p>We work with trusted partners who may also set cookies:</p>
        <ul>
          <li>
            <strong>Google Analytics:</strong> Website performance and user behavior
          </li>
          <li>
            <strong>Facebook Pixel:</strong> Advertising and conversion tracking
          </li>
          <li>
            <strong>Payment Processors:</strong> Secure payment processing for consultation fees
          </li>
        </ul>

        <h2>Managing Your Cookie Preferences</h2>
        <p>You have control over cookies:</p>
        <ul>
          <li>
            <strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies
          </li>
          <li>
            <strong>Opt-Out Tools:</strong> Use industry opt-out tools for advertising cookies
          </li>
          <li>
            <strong>Contact Us:</strong> Email us if you need help managing your preferences
          </li>
        </ul>

        <h2>Cookie Retention</h2>
        <p>Different cookies are stored for different periods:</p>
        <ul>
          <li>
            <strong>Session Cookies:</strong> Deleted when you close your browser
          </li>
          <li>
            <strong>Persistent Cookies:</strong> Stored for up to 2 years
          </li>
          <li>
            <strong>Analytics Cookies:</strong> Typically stored for 2 years
          </li>
        </ul>

        <h2>Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time. When we do, we'll post the updated version on this page
          and update the "Last Updated" date.
        </p>

        <h2>Contact Us</h2>
        <p>If you have questions about our use of cookies, please contact us:</p>
        <p>
          <strong>Email:</strong> privacy@consultbuild.com
          <br />
          <strong>Subject:</strong> Cookie Policy Question
        </p>
      </div>

      <div className="mt-8 flex gap-4">
        <Link href="/" className="text-orange-600 hover:underline">
          ← Back to Home
        </Link>
        <Link href="/privacy-policy" className="text-orange-600 hover:underline">
          Privacy Policy
        </Link>
        <Link href="/terms" className="text-orange-600 hover:underline">
          Terms of Service
        </Link>
      </div>
    </div>
  )
}
