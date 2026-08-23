import Link from "next/link"

export default function Terms() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
      <p className="text-muted-foreground mb-6">The Rules for Using Our Service</p>

      <div className="prose max-w-none">
        <p>
          <strong>Last Updated:</strong> June 5, 2025
        </p>

        <h2>Welcome to Consult & Build CA!</h2>
        <p>
          These Terms of Service ("Terms") are an agreement between you and Consult & Build CA ("we," "us," or "our").
          By using our website and services (the "Service"), you agree to these Terms. Our Service helps connect
          homeowners like you with independent construction companies ("Construction Companies") for consultations.
        </p>
        <p>If you don't agree with these Terms, please don't use our Service.</p>

        <h2>1. What Our Service Does (and Doesn't Do)</h2>
        <p>
          Consult & Build CA is a platform that makes it easier for you to find and schedule consultations with
          Construction Companies.
        </p>
        <p>
          <strong>Important:</strong> We are NOT a construction company. We don't do any construction work ourselves.
          Our job is to help you connect with professionals who do.
        </p>

        <h2>2. About Our Free Consultations</h2>
        <ul>
          <li>
            <strong>How it Works:</strong> If you meet our requirements, we match you with a licensed Construction
            Company in your area and arrange a consultation at no cost to you.
          </li>
          <li>
            <strong>No Payment From Us:</strong> We do not offer, promise, or pay any cash, gift cards, rewards, or
            other compensation for attending a consultation.
          </li>
          <li>
            <strong>No Obligation:</strong> You are never required to hire the Construction Company or purchase
            anything. Quotes are provided in writing for you to review on your own timeline.
          </li>
          <li>
            <strong>Project Costs:</strong> Any amounts you pay for actual work are agreed directly between you and the
            Construction Company you choose, under the terms of the quote you approve.
          </li>
        </ul>

        <h2>3. Who Can Use Our Service?</h2>
        <p>To use our Service, you need to:</p>
        <ul>
          <li>Be 18 years old or older.</li>
          <li>Own the home where the consultation will happen.</li>
          <li>Be able to make decisions about home improvements for that property.</li>
          <li>Live in an area we (and our partner Construction Companies) serve.</li>
          <li>Give us accurate and complete information.</li>
        </ul>

        <h2>4. The Consultation Process</h2>
        <p>
          Our Service helps you set up a consultation, usually an in-home visit from a Construction Company
          representative. The Construction Company decides the exact details, length, and topics of the consultation.
        </p>
        <p>
          While we hope all Construction Companies provide a great experience, Consult & Build CA is not responsible for
          what happens during the consultation or the advice given by the Construction Company.
        </p>

        <h2>5. Your Responsibilities</h2>
        <p>When you use our Service, you agree to:</p>
        <ul>
          <li>Provide true and up-to-date information.</li>
          <li>Be respectful to our team and any Construction Company representatives.</li>
          <li>
            Understand that if you decide to hire a Construction Company, that's a separate agreement between you and
            them. Do your own research before hiring anyone.
          </li>
        </ul>

        <h2>6. We Don't Endorse Construction Companies</h2>
        <p>
          Think of us as a matchmaker. We introduce you to Construction Companies, but we don't guarantee their work,
          their prices, or how they operate. Any agreement you make with a Construction Company is strictly between you
          and them. We are not part of that deal.
        </p>

        <h2>7. Our Limits of Responsibility (Limitation of Liability)</h2>
        <p>
          This is important: To the fullest extent the law allows, Consult & Build CA is not responsible for any
          problems, damages, or losses that might happen from your use of our Service or your dealings with a
          Construction Company. This includes things like project delays, costs, or unsatisfactory work.
        </p>
        <p>
          If you have a claim related to our Service, our total responsibility to you will be limited to the amount of
          the cash offer you were eligible for (if any).
        </p>
        <p>
          Any disputes you have with a Construction Company are between you and that company. We won't get involved.
        </p>

        <h2>8. Our Website Content</h2>
        <p>
          The text, images, logos, and everything else on our website belong to Consult & Build CA or the people who
          licensed it to us. Please don't use our content without permission.
        </p>

        <h2>9. Which Laws Apply?</h2>
        <p>
          These Terms are based on the laws of the State of California.
          {/* Confirming California based on project context */}
        </p>

        <h2>10. Changes to These Terms</h2>
        <p>
          We might change these Terms sometimes. If we make important changes, we'll post the new Terms on this page and
          update the "Last Updated" date. If you keep using our Service after we make changes, it means you agree to the
          new Terms.
        </p>

        <h2>11. How to Contact Us</h2>
        <p>If you have questions about these Terms, you can reach us at:</p>
        <p>
          <strong>Email:</strong> info@consultbuildca.com
          <br />
          {/* Consider adding a placeholder for your business name/address if applicable */}
          {/* Example: Consult & Build CA, [Your Address Here] */}
        </p>
        <p className="mt-4 text-sm">
          <em>
            Please remember, these terms are for informational purposes. For legal advice, consult a qualified
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
