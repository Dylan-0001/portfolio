"use client";
import ReactModal from "react-modal";
import {useEffect, useState} from "react";

export const ProjectModal = ({ project, isOpen, onClose }) => {

    const [isHovered, setHovered] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
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
                    padding: "20px",
                    borderRadius: "12px",
                    maxWidth: "600px",
                    width: "90%",
                },
                overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                },
            }}
        >
        <div className="modal-container" style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "20px"}}>
            <h2 style={{textDecoration: "underline"}}>{project.title}</h2>
            <img src={project.image} alt={project.title} style={{maxWidth: "500px", borderRadius: "8px"}} />
            <p>Description du projet à venir...</p>
            <button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    transition: "all 0.2s ease",
                    backgroundColor: isHovered ? "#666" : "#000",
                    color: "white",
                    padding:"0.75rem 2rem",
                    border: "none",
                    borderRadius: "50px",
                    fontSize: "14px"}}
                onClick={onClose}>Fermer</button>
        </div>
        </ReactModal>
    );
};
