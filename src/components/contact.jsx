'use client'

import Header from "./header";
import Footer from "./footer";
import LoginForm from "./loginform";

const Contact = () => {
    return (
        <>
            <Header />
            <section className="contact flex items-center justify-center min-h-screen bg-gray-50">
                <div className="contact__inner container p-6 bg-white shadow-lg rounded-lg max-w-md w-full">
                    <LoginForm />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact;