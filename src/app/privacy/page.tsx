import Link from "next/link";

export const metadata = { title: "Privacy Policy | Kodani Tech Solutions" };

export default function Page() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        Our privacy policy is being finalised and will be published here soon.
      </p>
      <p className="mt-2 text-muted-foreground">
        Questions in the meantime? Email{" "}
        <a href="mailto:enquiry.kodani@gmail.com" className="text-accent hover:underline">
          enquiry.kodani@gmail.com
        </a>
        .
      </p>
      <Link href="/" className="mt-8 text-sm text-muted-foreground hover:text-foreground">
        ← Back to home
      </Link>
    </section>
  );
}
