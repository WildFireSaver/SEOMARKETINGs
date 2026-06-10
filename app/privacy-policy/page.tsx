import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-muted-foreground mb-6">Understanding How We Handle Your Information</p>

      <div className="prose max-w-none">
        <p>
          <strong>Last Updated:</strong> June 5, 2025
        </p>

        <h2>Our Commitment to Your Privacy</h2>
        <p>
          Welcome to Consult & Build CA! We ("Consult & Build CA," "we," "our," or "us") take your privacy seriously.
          This policy explains what information we collect, how we use it, and how we protect it when you use our
          website and services to connect with construction companies and participate in our cash offer program.
        </p>

        <h2>1. What Information We Collect</h2>
        <p>To help you connect with construction specialists, we may collect:</p>
        <ul>
          <li>
            <strong>Your Contact Details:</strong> This includes your name, email address, phone number, and home
            address.
          </li>
          <li>
            <strong>Your Home & Project Details:</strong> Information about your home (like its age and condition) and
            what kind of construction project you're interested in.
          </li>
          <li>
            <strong>How You Use Our Website:</strong> We may note how you navigate our site, like your IP address,
            browser type, and which pages you visit. This helps us improve our service.
          </li>
          <li>
            <strong>Our Communications:</strong> If you contact us, we may keep a record of that conversation.
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>
            <strong>Connect You with Specialists:</strong> Our main goal is to help you find and schedule consultations
            with construction companies.
          </li>
          <li>
            <strong>Manage the Cash Offer:</strong> To see if you qualify for our cash offer (which we pay after your
            confirmed meeting with a construction company) and to process it.
          </li>
          <li>
            <strong>Keep You Informed:</strong> To send you updates about your requests, our services, or your scheduled
            consultations.
          </li>
          <li>
            <strong>Improve Our Service:</strong> To make our website and services better for you.
          </li>
          <li>
            <strong>Meet Legal Needs:</strong> To comply with any laws or legal requests.
          </li>
        </ul>

        <h2>3. Sharing Your Information</h2>
        <p>We don't sell your personal information. We only share it in specific situations:</p>
        <ul>
          <li>
            <strong>With Construction Companies:</strong> If you agree, we'll share your relevant details with
            construction companies so they can prepare for and schedule your consultation.
          </li>
          <li>
            <strong>With Our Service Partners:</strong> We work with other companies that help us run our website and
            services (like website hosting). They are required to protect your information.
          </li>
          <li>
            <strong>For Legal Reasons:</strong> If the law requires it, or if we receive a valid request from a court or
            government agency.
          </li>
          <li>
            <strong>If Our Business Changes Hands:</strong> If we sell our business or merge with another company, your
            information might be part of that transfer.
          </li>
        </ul>

        <h2>4. Your Privacy Rights</h2>
        <p>You have rights regarding your information. Depending on where you live, you can:</p>
        <ul>
          <li>Ask to see the personal information we have about you.</li>
          <li>Ask us to correct any mistakes in your information.</li>
          <li>Ask us to delete your information.</li>
          <li>Tell us you don't want us to share or use your information in certain ways.</li>
          <li>Change your mind if you previously gave us permission to use your information.</li>
        </ul>
        <p>To use these rights, please contact us (see section 9).</p>

        <h2>5. Keeping Your Information Safe</h2>
        <p>
          We use various security measures to try and protect your information. However, no online service can be 100%
          secure, so we can't guarantee it will always be safe.
        </p>

        <h2>6. How Long We Keep Your Information</h2>
        <p>
          We only keep your information for as long as we need it for the reasons we've described, or as long as the law
          requires.
        </p>

        <h2>7. Children's Privacy</h2>
        <p>
          Our services are for adults (18 and older). We don't knowingly collect information from children. If you think
          a child has given us information, please let us know so we can remove it.
        </p>

        <h2>8. Changes to This Policy</h2>
        <p>
          We might update this Privacy Policy sometimes. If we do, we'll post the new version on this page and change
          the "Last Updated" date. Please check back here to stay informed.
        </p>

        <h2>9. How to Contact Us</h2>
        <p>If you have questions about this Privacy Policy, you can reach us at:</p>
        <p>
          <strong>Email:</strong> info@consultbuildca.com
          <br />
          {/* Consider adding a placeholder for your business name/address if applicable */}
          {/* Example: Consult & Build CA, [Your Address Here] */}
        </p>
        <p className="mt-4 text-sm">
          <em>
            Please remember, this policy is for informational purposes. For legal advice, consult a qualified
            professional.
          </em>
        </p>
      </div>

      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
