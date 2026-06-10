import Link from "next/link"

export default function Disclaimer() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Disclaimer</h1>
      <p className="text-muted-foreground mb-6">Important Information About Consult&Build™ Services</p>

      <div className="prose max-w-none">
        <p>
          <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <h2>Service Disclaimer</h2>
        <p>
          <strong>Consult&Build™</strong> is a contractor matching service that connects homeowners with independent,
          licensed contractors in California. We are <strong>NOT</strong> a construction company and do not perform any
          construction, renovation, or home improvement work ourselves.
        </p>

        <h2>Contractor Independence</h2>
        <p>Important facts about our contractor network:</p>
        <ul>
          <li>
            All contractors in our network are <strong>independent businesses</strong>
          </li>
          <li>We do not employ, control, or supervise contractors</li>
          <li>Each contractor sets their own prices, schedules, and work standards</li>
          <li>Contracts for work are directly between you and the contractor</li>
          <li>We are not responsible for the quality, timeliness, or cost of contractor work</li>
        </ul>

        <h2>Consultation Compensation</h2>
        <p>Regarding our consultation compensation program:</p>
        <ul>
          <li>Compensation ranges from $50-$100 based on consultation scope and duration</li>
          <li>Payment is made after verified completion of qualifying consultation</li>
          <li>Consultations must meet minimum duration and quality requirements</li>
          <li>We reserve the right to verify consultation details with contractors</li>
          <li>Compensation is our way of valuing your time, not a guarantee of contractor quality</li>
        </ul>

        <h2>No Warranties or Guarantees</h2>
        <p>Consult&Build™ makes no warranties regarding:</p>
        <ul>
          <li>The quality, reliability, or performance of contractors</li>
          <li>The accuracy of contractor licensing or insurance information</li>
          <li>The completion, cost, or timeline of any home improvement project</li>
          <li>The availability of contractors in your area</li>
          <li>The outcome of any consultation or project</li>
        </ul>

        <h2>Your Responsibilities</h2>
        <p>As a homeowner using our service, you should:</p>
        <ul>
          <li>
            <strong>Verify contractor credentials</strong> independently before hiring
          </li>
          <li>
            <strong>Get multiple quotes</strong> for any significant project
          </li>
          <li>
            <strong>Check references</strong> and previous work examples
          </li>
          <li>
            <strong>Ensure proper permits</strong> are obtained for your project
          </li>
          <li>
            <strong>Review contracts carefully</strong> before signing
          </li>
          <li>
            <strong>Maintain appropriate insurance</strong> during construction
          </li>
        </ul>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Consult&Build™ shall not be liable for any direct, indirect,
          incidental, special, or consequential damages arising from:
        </p>
        <ul>
          <li>Use of our matching service</li>
          <li>Interactions with contractors</li>
          <li>Quality of contractor work</li>
          <li>Project delays, cost overruns, or disputes</li>
          <li>Property damage or personal injury</li>
        </ul>

        <h2>California Licensing Information</h2>
        <p>While we strive to work only with licensed contractors, homeowners should independently verify:</p>
        <ul>
          <li>Contractor license status with the California Contractors State License Board</li>
          <li>Current insurance coverage</li>
          <li>Bond status where required</li>
          <li>Any complaints or disciplinary actions</li>
        </ul>

        <h2>Dispute Resolution</h2>
        <p>Any disputes between you and contractors are separate from our service. We encourage:</p>
        <ul>
          <li>Direct communication with contractors first</li>
          <li>Mediation through industry organizations</li>
          <li>Consultation with legal professionals when necessary</li>
          <li>Filing complaints with appropriate licensing boards</li>
        </ul>

        <h2>Changes to This Disclaimer</h2>
        <p>
          We may update this disclaimer periodically. Continued use of our service after changes constitutes acceptance
          of the updated terms.
        </p>

        <h2>Contact Information</h2>
        <p>
          For questions about this disclaimer:
          <br />
          <strong>Email:</strong> legal@consultbuild.com
          <br />
          <strong>Subject:</strong> Disclaimer Question
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
