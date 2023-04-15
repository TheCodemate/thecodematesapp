import styles from './TermsOfService.module.scss';

export const TermsOfService = () => {
  return (
    <div className={styles.container}>
      <main aria-labelledby="terms-of-service-heading">
        <h1 className={styles.mainHeading} id="terms-of-service-heading">
          Terms Of Service
        </h1>
        <p className={styles.welcomeMessage}>
          Welcome to our Pet Adoption Application! These Terms of Service ("Terms") govern your use
          of our application and any related services (collectively, the "Service"). By using the
          Service, you agree to be bound by these Terms. If you do not agree to these Terms, do not
          use the Service.
        </p>
        <section className={styles.section} aria-labelledby="use-of-services-heading">
          <h2 className={styles.h2} id="use-of-services-heading">
            1. Use of the Service
          </h2>
          <h3 className={styles.h3}>a. Eligibility: </h3>
          <p className={styles.paragraph}>
            You must be at least 18 years old to use the Service. By using the Service, you
            represent and warrant that you are at least 18 years old.{' '}
          </p>
          <h3 className={styles.h3}>b. User Account:</h3>
          <p className={styles.paragraph}>
            To use certain features of the Service, you may be required to create a user account.
            You agree to provide accurate and complete information when creating your account and to
            update your information as necessary.
          </p>
          <h3 className={styles.h3}>c. Pet Adoption:</h3>
          <p className={styles.paragraph}>
            Our Service allows users to browse and adopt pets. We do not guarantee the accuracy of
            the information provided by pet owners, and we are not responsible for any harm or
            damage that may result from the adoption of a pet through our Service. d. Prohibited
            Conduct: You agree not to engage in any conduct that violates these Terms or our
            community guidelines, which may be updated from time to time. Prohibited conduct
            includes, but is not limited to, the following:
          </p>
        </section>
        <section className={styles.section} aria-labelledby="use-of-services-heading">
          <h2 className={styles.h2} id="use-of-services-heading">
            1. Use of the Service
          </h2>
          <h3 className={styles.h3}>a. Eligibility: </h3>
          <p className={styles.paragraph}>
            You must be at least 18 years old to use the Service. By using the Service, you
            represent and warrant that you are at least 18 years old.{' '}
          </p>
          <h3 className={styles.h3}>b. User Account:</h3>
          <p className={styles.paragraph}>
            To use certain features of the Service, you may be required to create a user account.
            You agree to provide accurate and complete information when creating your account and to
            update your information as necessary.
          </p>
          <h3 className={styles.h3}>c. Pet Adoption:</h3>
          <p className={styles.paragraph}>
            Our Service allows users to browse and adopt pets. We do not guarantee the accuracy of
            the information provided by pet owners, and we are not responsible for any harm or
            damage that may result from the adoption of a pet through our Service. d. Prohibited
            Conduct: You agree not to engage in any conduct that violates these Terms or our
            community guidelines, which may be updated from time to time. Prohibited conduct
            includes, but is not limited to, the following:
          </p>

          <ul className={styles.list}>
            <li className={styles.listItem}>Using the Service for any illegal purpose;</li>
            <li className={styles.listItem}>
              Using the Service to harass, threaten, or intimidate others
            </li>
            <li className={styles.listItem}>
              Impersonating any person or entity, or falsely representing your affiliation with any
              person or entity;
            </li>
            <li className={styles.listItem}>
              Interfering with or disrupting the Service or any servers or networks connected to the
              Service
            </li>
            <li className={styles.listItem}>
              Using any automated means to access the Service or collect any information from the
              Service
            </li>
            <li className={styles.listItem}>
              Posting or transmitting any content that is defamatory, obscene, or otherwise
              objectionable
            </li>
            <li className={styles.listItem}>
              Attempting to gain unauthorized access to any portion of the Service, or any systems
              or networks connected to the Service.
            </li>
          </ul>
        </section>
        <section className={styles.section} aria-labelledby="intellectual-property-heading">
          <h2 className={styles.h2} id="intellectual-property-heading">
            2. Intellectual Property
          </h2>
          <h3 className={styles.h3}>a. Ownership: </h3>
          <p className={styles.paragraph}>
            The Service and its contents, including all intellectual property rights, are the
            property of the Company or its licensors. You are not granted any right or license to
            use any of the Company's intellectual property, except as expressly provided in these
            Terms.
          </p>
          <h3>b. User Content: </h3>
          <p className={styles.paragraph}>
            TYou retain ownership of any content that you post or submit to the Service, subject to
            the license grant described in these Terms.
          </p>
          <h3>c. License Grant: </h3>
          <p className={styles.paragraph}>
            By posting or submitting content to the Service, you grant the Company a non-exclusive,
            royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce,
            modify, adapt, publish, translate, create derivative works from, distribute, and display
            such content throughout the world in any media.
          </p>
        </section>
        <section className={styles.section} aria-labelledby="privacy-heading">
          <h2 className={styles.h2} id="privacy-heading">
            3. Privacy
          </h2>
          <h3 className={styles.h3}>a. Information Collection: </h3>
          <p className={styles.paragraph}>
            We may collect information about you in connection with your use of the Service. By
            using the Service, you consent to the collection and use of your information as
            described in our Privacy Policy, which is incorporated by reference into these Terms.
          </p>
          <h3 className={styles.h3}>b. Security:</h3>
          <p className={styles.paragraph}>
            We take reasonable measures to protect the security of your information, but we cannot
            guarantee the security of any information transmitted through the Service.
          </p>
        </section>
        <section className={styles.section} aria-labelledby="disclaimer-warrant-heading">
          <h2 className={styles.h2} id="disclaimer-warrant-heading">
            4. Disclaimer of Warranties
          </h2>
          <p className={styles.paragraph}>
            THE SERVICE IS PROVIDED "AS IS" AND WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR
            IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, THE COMPANY
            DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            THE COMPANY DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT
            DEFECTS WILL BE CORRECTED, OR THAT THE SERVICE OR THE SERVERS THAT MAKE THE SERVICE
            AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. THE COMPANY DOES NOT WARRANT
            OR MAKE ANY REPRESENTATIONS REGARDING THE USE
          </p>
        </section>
      </main>
    </div>
  );
};
