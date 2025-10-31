import Link from "next/link";

export default function notFound () {
    return (
        <div style={{ padding: "2rem", textAlign: "center", marginTop: "2rem" }}>
            <p style={{ fontSize: "20px" }}>Une erreur est survenue...</p>
            <Link href="/">Retour à l'accueil</Link>
        </div>
    )
}