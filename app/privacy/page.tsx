import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function PRivacy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col gap-2 p-4 max-w-2xl mx-auto w-full">
        <h1 className="text-2xl font-bold">
          Privacy Policy for JLPT Vocabulary
        </h1>
        <h2>Last Updated: June 13th, 2024</h2>
        <p>
          Thank you for using JLPT Vocabulary, a Japanese Language Proficiency
          Test (JLPT) vocabulary study app. This Privacy Policy outlines our
          minimal data practices.
        </p>

        <p>
          By using JLPT Vocabulary N1, N2, N3, or N4, you agree to the terms of
          this policy. If you do not agree, please do not use our app.
        </p>

        <h3>1. Data Collection</h3>
        <p>
          We do not collect any personal information, device information, or
          information about how you use the app. All data is stored locally on
          your device.
        </p>

        <h3>2. Local Storage</h3>
        <p>
          All app data, including your study progress and quiz results, is
          stored locally on your phone. We do not have access to this
          information.
        </p>
        <h3>3. Data Sharing and Disclosure</h3>
        <p>
          We do not share or disclose any data stored on your device with third
          parties.
        </p>
        <h3>4. Your Choices</h3>
        <p>
          As we do not collect personal information or usage data, there are no
          user settings to manage.
        </p>

        <h3>5. Changes to This Privacy Policy</h3>
        <p>
          We may update our Privacy Policy, and the latest version will be
          reflected in the app. Please review it periodically.
        </p>

        <h3>6. Contact Us</h3>
        <p>
          If you have any questions or concerns about our Privacy Policy, please
          contact us at chadmurodev@gmail.com.
        </p>
      </main>
      <Footer />
    </div>
  );
}
