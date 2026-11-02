
import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    // const features = [
    //     {
    //         icon: '📝',
    //         title: 'Create Notes',
    //         description: 'Create your notes easily and save your important information in one place.'
    //     },
    //     {
    //         icon: '✏️',
    //         title: 'Update Notes',
    //         description: 'Edit and update your existing notes whenever you need.'
    //     },
    //     {
    //         icon: '🗑️',
    //         title: 'Delete Notes',
    //         description: 'Remove unnecessary notes and keep your notebook organized.'
    //     },
    //     {
    //         icon: '🔒',
    //         title: 'Secure Account',
    //         description: 'Your notes are associated with your account and protected through authentication.'
    //     },
    //     {
    //         icon: '☁️',
    //         title: 'Cloud Storage',
    //         description: 'Access your saved notes through your account whenever you need them.'
    //     },
    //     {
    //         icon: '📱',
    //         title: 'Responsive Design',
    //         description: 'Use iNotebook on desktop, tablet, and mobile devices.'
    //     }
    // ];

    return (
        // <div className="about-page">

        //     {/* Hero Section */}
        //     <section className="about-hero text-center">
        //         <div className="container">
                   

        //             <h1>
        //                 Welcome to <span>iNotebook</span>
        //             </h1>

        //             <p>
        //                 Your personal digital notebook. Create, manage, and organize
        //                 your important notes anytime, anywhere.
        //             </p>

        //             <Link to="/" className="btn btn-primary mt-3">
        //                 Explore Your Notes
        //             </Link>
        //         </div>
        //     </section>

        //     {/* About Section */}
        //     <section className="container py-5">
        //         <div className="row align-items-center g-4">

        //             <div className="col-md-6">
        //                 <div className="about-image">
        //                     <div className="about-image-icon">📒</div>
        //                     <h3>iNotebook</h3>
        //                     <p>Your Ideas, Your Space.</p>
        //                 </div>
        //             </div>

        //             <div className="col-md-6">
        //                 <h2 className="section-heading">
        //                     What is <span>iNotebook?</span>
        //                 </h2>

        //                 <p className="about-description">
        //                     iNotebook is a simple and user-friendly digital notebook
        //                     designed to help you manage your daily notes and important
        //                     information.
        //                 </p>

        //                 <p className="about-description">
        //                     Whether you are a student, developer, or professional,
        //                     iNotebook helps you create, edit, delete, and organize
        //                     your notes in one convenient place.
        //                 </p>

        //                 <p className="about-description">
        //                     Our goal is to make note-taking simple, accessible,
        //                     and convenient for everyone.
        //                 </p>
        //             </div>

        //         </div>
        //     </section>

        //     {/* Mission Section */}
        //     <section className="mission-section py-5">
        //         <div className="container text-center">
        //             <h2 className="section-heading">
        //                 Our <span>Mission</span>
        //             </h2>

        //             <p className="mission-text">
        //                 Our mission is to provide a simple digital space where
        //                 everyone can save their ideas, organize information,
        //                 and manage important notes without complications.
        //             </p>
        //         </div>
        //     </section>

        //     {/* Features Section */}
        //     <section className="container py-5">
        //         <div className="text-center mb-5">
        //             <h2 className="section-heading">
        //                 What We <span>Offer</span>
        //             </h2>

        //             <p className="text-muted">
        //                 Everything you need to manage your notes efficiently.
        //             </p>
        //         </div>

        //         <div className="row g-4">
        //             {features.map((feature, index) => (
        //                 <div className="col-md-6 col-lg-4" key={index}>
        //                     <div className="feature-card h-100">
        //                         <div className="feature-icon">
        //                             {feature.icon}
        //                         </div>

        //                         <h4>{feature.title}</h4>

        //                         <p>{feature.description}</p>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //     </section>

            {/* Why Choose Us */}
            <section className="why-section py-5">
                <div className="container text-center">
                    <h2 className="section-heading">
                        Why Choose <span>iNotebook?</span>
                    </h2>

                    <div className="row g-4 mt-3">
                        <div className="col-md-4">
                            <h3>Simple</h3>
                            <p>Easy-to-use interface for everyone.</p>
                        </div>

                        <div className="col-md-4">
                            <h3>Organized</h3>
                            <p>Keep your important information organized.</p>
                        </div>

                        <div className="col-md-4">
                            <h3>Convenient</h3>
                            <p>Manage your notes whenever you need them.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container text-center py-5">
                <h2 className="section-heading">
                    Ready to Get <span>Started?</span>
                </h2>

                <p className="text-muted">
                    Start organizing your thoughts and ideas with iNotebook today.
                </p>

                <Link to="/" className="btn btn-primary mt-2">
                    Go to Homepage
                </Link>
            </section>

        </div>
    );
}

export default About;
