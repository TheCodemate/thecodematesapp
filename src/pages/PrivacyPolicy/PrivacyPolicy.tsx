import styles from './PrivacyPolicy.module.scss';

export const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <main aria-labelledby="terms-of-service-heading">
        <h1 className={styles.mainHeading} id="terms-of-service-heading">
          Privacy Policy
        </h1>
        <p className={styles.welcomeMessage}>
          We take your privacy seriously and want you to feel comfortable using our Pet Adoption
          Application (the "Service"). This Privacy Policy ("Policy") explains how we collect, use,
          and disclose information about you when you use the Service.
        </p>
        <section className={styles.section} aria-labelledby="information-we-collect-heading">
          <h2 className={styles.h2} id="information-we-collect-heading">
            1. Information We Collect
          </h2>
          <h3 className={styles.h3}>a. Information You Provide: </h3>
          <p className={styles.paragraph}>
            We collect information that you provide when you use the Service, including when you
            create an account, complete a pet adoption application, or communicate with us. This may
            include your name, email address, phone number, and other contact information, as well
            as information about your pet ownership and adoption preferences.
          </p>
          <h3 className={styles.h3}>b. Information We Collect Automatically: </h3>
          <p className={styles.paragraph}>
            We automatically collect certain information about your use of the Service, such as your
            IP address, device type, and browser type. We may also collect information about the
            pages you view, the links you click, and other actions you take on the Service.
          </p>
        </section>
        <section className={styles.section} aria-labelledby="use-of-information-heading">
          <h2 className={styles.h2} id="use-of-information-heading">
            2. Use of Information
          </h2>
          <h3 className={styles.h3}>a. Provide the Service: </h3>
          <p className={styles.paragraph}>
            We use the information we collect to provide and improve the Service, to communicate
            with you about your account or the Service, and to respond to your inquiries and
            requests.
          </p>
          <h3 className={styles.h3}>b. Personalization: </h3>
          <p className={styles.paragraph}>
            We may use the information we collect to personalize your experience on the Service,
            such as by recommending pets for adoption that match your preferences. c. Analytics: We
            may use the information we collect to analyze trends and usage patterns on the Service,
            to understand how users interact with the Service, and to improve the Service.
          </p>
          <h3 className={styles.h3}>c. Analytics: </h3>
          <p className={styles.paragraph}>
            We may use the information we collect to analyze trends and usage patterns on the
            Service, to understand how users interact with the Service, and to improve the Service.
          </p>
          <h3 className={styles.h3}>d. Legal Compliance: </h3>
          <p className={styles.paragraph}>
            We may use the information we collect to comply with applicable laws and regulations,
            and to enforce our legal rights.
          </p>
        </section>
        <section className={styles.section} aria-labelledby="sharing-of-information-heading">
          <h2 className={styles.h2} id="sharing-of-information-heading">
            3. Sharing of Information
          </h2>
          <h3 className={styles.h3}>a. Service Providers: </h3>
          <p className={styles.paragraph}>
            The Service and its contents, including all intellectual property rights, are the
            property of the Company or its licensors. You are not granted any right or license to
            use any of the Company's intellectual property, except as expressly provided in these
            Terms.
          </p>
          <h3>b. Pet Owners: </h3>
          <p className={styles.paragraph}>
            TYou retain ownership of any content that you post or submit to the Service, subject to
            the license grant described in these Terms.
          </p>
          <h3>c. Legal Compliance: </h3>
          <p className={styles.paragraph}>
            By posting or submitting content to the Service, you grant the Company a non-exclusive,
            royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce,
            modify, adapt, publish, translate, create derivative works from, distribute, and display
            such content throughout the world in any media.
          </p>
          <h3>d. Business Transactions: </h3>
          <p className={styles.paragraph}>
            If we are involved in a merger, acquisition, financing, or sale of all or a portion of
            our business, we may share information as part of that transaction.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="security-heading">
          <h2 className={styles.h2} id="security-heading">
            4. Security
          </h2>

          <p className={styles.paragraph}>
            We take reasonable measures to protect the security of your information, but we cannot
            guarantee that your information will be completely secure from unauthorized access or
            use.
          </p>
        </section>
        <section className={styles.section} aria-labelledby="children-privacy-heading">
          <h2 className={styles.h2} id="children-privacy-heading">
            5. Children's Privacy
          </h2>

          <p className={styles.paragraph}>
            The Service is not directed to children under the age of 13, and we do not knowingly
            collect personal information from children under the age of 13.
          </p>
        </section>
        <section className={styles.section} aria-labelledby="changes-to-policy-heading">
          <h2 className={styles.h2} id="changes-to-policy-heading">
            6. Changes to this Policy
          </h2>

          <p className={styles.paragraph}>
            We may update this Policy from time to time. If we make material changes to the Policy,
            we will notify you by email or by posting a notice on the Service.
          </p>
        </section>
        <section className={styles.section} aria-labelledby="contact-heading">
          <h2 className={styles.h2} id="contact-heading">
            7. Contact Us
          </h2>

          <p className={styles.paragraph}>
            If you have any questions or concerns about this Policy, please contact us at
            gmail@gmail.com
          </p>
        </section>
      </main>
    </div>
  );
};
