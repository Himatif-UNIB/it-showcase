import Navbar from "./Navbar"
import Footer from "./Footer"
import Head from "next/head"

export default function Layout({ children, pageMeta }) {
    const meta = {
        title: "HIMATIF Showcase",
        description: "Website yang menampung hasil karya Mahasiswa Informatika UNIB.",
        type: "website",
        ...pageMeta,
    }

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <link rel="icon" href="/favicon.ico" />
                {/* Open Graph */}
                <meta property="og:type" content={meta.type} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
            </Head>

            <div className="relative min-h-screen bg-dark font-outfit text-white">
                <div className="px-6 py-8">
                    <Navbar />
                </div>
                <div className="mt-12">
                    <main>{children}</main>
                </div>
                <Footer />
            </div>
        </>
    )
}
