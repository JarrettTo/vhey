import React from 'react';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 mt-14">
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Effective Date: Jan 10, 2025
                    </p>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            At EVA, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you interact with our services, particularly in relation to ingesting messages from Instagram.
                        </p>

                        <section className="mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Information We Collect
                            </h2>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                We collect information that you provide to us directly, such as when you create an account, authenticate your identity, or communicate with us. This may include:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                <li>Your name and contact information</li>
                                <li>Instagram account details</li>
                                <li>Messages and data shared through Instagram and Email</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Data Security
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                We implement robust security measures to protect your data. Access to your information is strictly limited to the talents we manage, who provide explicit permission via authentication and contractual agreements. We ensure that all data is stored securely and is only accessible to authorized personnel.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Data Access and Use
                            </h2>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                We only access data that is permitted by the talents we manage. This access is granted through explicit consent, ensuring that you have control over your information. Our organization members, who are all under Non-Disclosure Agreements (NDAs), are the only individuals who can access your data and messages. This internal use is strictly for organizational purposes, including:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                <li>Improving our services</li>
                                <li>Providing support to our talents</li>
                                <li>Ensuring compliance with legal obligations</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Data Sharing
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                We do not share your information with third parties without your explicit consent, except as required by law or to comply with legal processes. In the case of ingesting messages from Instagram, we ensure that all data handling complies with Meta's policies and guidelines.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Data Retention
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                We retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by law. When your data is no longer needed, we will securely delete or anonymize it.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Your Rights
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                You have the right to access, correct, or delete your personal information. You can also withdraw your consent for us to process your data at any time. To exercise these rights, please contact us using the information provided below.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Changes to This Privacy Policy
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account or by placing a prominent notice on our site.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Contact Us
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us at{' '}
                                <a href="mailto:hello@heyeva.me" className="text-blue-600 hover:text-blue-800 underline">
                                    hello@heyeva.me
                                </a>
                                .
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};


