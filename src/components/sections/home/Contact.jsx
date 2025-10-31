"use client"

import React, {useRef, useState} from "react";
import * as emailjs from "@emailjs/browser";

export const  Contact = () =>
{
    const [form, setForm] = useState({ name: "", email: "",sujet: "", message: "" });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle");
    const formulaire = useRef();

    function validate()
    {
        const e = {};
        if (!form.name.trim()) e.name = "Le nom est requis.";
        if (!form.sujet.trim()) e.sujet = "Le sujet est requis.";
        if (!form.email.trim()) e.email = "L'email est requis.";
        else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Merci d'entrer un email valide.";
        if (!form.message.trim()) e.message = "Le message est requis.";
        return e;
    }

    async function handleSubmit(e)
    {
        e.preventDefault();
        const v = validate();
        setErrors(v);
        if (Object.keys(v).length) return;

        try {
            setStatus("sending");
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                {
                    name: form.name,
                    email: form.email,
                    sujet: form.sujet,
                    message: form.message
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );
            setStatus("sent");
            setForm({ name: "", email: "", sujet: "", message: "" });
            setTimeout(() => setStatus("idle"), 3000);
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    }

    function handleChange(e)
    {
        setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
        setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }

    return (
        <>
            <img className="contact-line" src="/lines/about-line.png" alt="contact line" />
            <section id="contact" className="contact">
                <h2 className="contact__title">Rentrons en Contact</h2>
                <p className="contact__intro">Vous avez une question ? Un projet ? Envoyez-moi un message — je vous répondrai rapidement.</p>

                <form ref={formulaire} onSubmit={handleSubmit} noValidate className="contact__form">
                    <div className="contact__field">
                        <label htmlFor="name">Nom</label>
                        <input
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Votre nom"
                        />
                        {errors.name && <p className="contact__error">{errors.name}</p>}
                    </div>

                    <div className="contact__field">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                        />
                        {errors.email && <p className="contact__error">{errors.email}</p>}
                    </div>

                    <div className="contact__field">
                        <label htmlFor="sujet">Sujet</label>
                        <input
                            id="sujet"
                            name="sujet"
                            value={form.sujet}
                            onChange={handleChange}
                            placeholder="Sujet du mail"
                        />
                        {errors.sujet && <p className="contact__error">{errors.sujet}</p>}
                    </div>

                    <div className="contact__field">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Écrivez votre message ici..."
                        />
                        {errors.message && <p className="contact__error">{errors.message}</p>}
                    </div>


                    <div className="contact__actions">
                        <button type="submit" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Envoi...' : 'Envoyer'}
                        </button>


                        {status === 'sent' && <p className="contact__success">Message envoyé — merci !</p>}
                        {status === 'error' && <p className="contact__error">Une erreur est survenue. Réessayez.</p>}
                    </div>
                </form>
            </section>
        </>
    );
}
