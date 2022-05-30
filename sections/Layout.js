import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

export default function Layouts({ children, pageMeta }) {
    const meta = {
        title: "Showcase HIMATIF",
        description: "Website yang menampung hasil karya Mahasiswa Informatika UNIB.",
        type: "website",
        ...pageMeta,
    };

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

            <div className="min-h-screen bg-dark-900 text-white font-rubik">
                <div className="px-12 py-6">
                    <Header />
                </div>
                <main>{children}</main>
                <Footer />
            </div>
        </>
    );
}
