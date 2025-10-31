"use client";
import ReactModal from "react-modal";
import { useEffect, useState } from "react";

export const ProjectModal = ({ project, isOpen, onClose }) => {
    const [hoveredButton, setHoveredButton] = useState(null);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel={project.title}
            appElement={typeof document !== "undefined" ? document.body : undefined}
            style={{
                content: {
                    top: "50%",
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    transform: "translate(-50%, -50%)",
                    padding: "30px",
                    borderRadius: "16px",
                    maxWidth: "700px",
                    width: "95%",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                    background: "#fff",
                    transition: "all 0.3s ease",
                },
                overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    backdropFilter: "blur(4px)",
                },
            }}
        >
            <div style={{ display: "flex", flexDirection: "column", gap: "25px", alignItems: "center" }}>
                <h2 style={{ textDecoration: "underline", fontSize: "1.8rem", fontWeight: "600" }}>{project.title}</h2>

                <img
                    src={project.image}
                    alt={project.title}
                    style={{  maxHeight: "400px", maxWidth: "600px" , borderRadius: "12px", objectFit: "cover" }}
                />

                <div style={{ display: "flex", flexDirection: window.innerWidth < 600 ? "column" : "row", gap: "25px", width: "100%" }}>
                    <p style={{ flex: 1, lineHeight: "1.6", fontSize: "1rem", color: "#333" }}>
                        {project.description}
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <span style={{ fontWeight: "500" }}>Tech Stack: {project.tech}</span>
                        <a href={project.project_url} target="_blank" style={{ color: "#1a73e8", textDecoration: "underline" }}>{project.project_url}</a>

                        <a
                            href={project.project_github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-block",
                                backgroundColor: "#000",
                                color: "#fff",
                                padding: "0.75rem 2rem",
                                borderRadius: "50px",
                                textDecoration: "none",
                                textAlign: "center",
                            }}
                        >
                            GitHub
                        </a>
                    </div>
                </div>

                <button
                    onMouseEnter={() => setHoveredButton("close")}
                    onMouseLeave={() => setHoveredButton(null)}
                    onClick={onClose}
                    style={{
                        cursor: "pointer",
                        backgroundColor: hoveredButton === "close" ? "#555" : "#000",
                        color: "#fff",
                        padding: "0.75rem 2rem",
                        border: "none",
                        borderRadius: "50px",
                        fontSize: "14px",
                        transition: "all 0.2s ease",
                        marginTop: "15px",
                    }}
                >
                    Fermer
                </button>
            </div>
        </ReactModal>
    );
};
