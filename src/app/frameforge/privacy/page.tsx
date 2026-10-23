import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FrameForge Privacy Policy - Barış Özdemirci",
  description: "How FrameForge, a personal video production tool, uses YouTube API Services.",
};

const linkClass = "underline underline-offset-2 text-gray-true-200 hover:text-white transition-colors duration-200";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-2">
      <h2 className="text-lg font-sans font-medium tracking-tight text-white">{title}</h2>
      <p className="text-base font-sans leading-relaxed tracking-tight text-gray-true-300">{children}</p>
    </section>
  );
}

export default function FrameForgePrivacy() {
  return (
    <main className="min-h-screen px-8 py-16">
      <article className="mx-auto max-w-2xl space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-sans font-medium tracking-tight text-white">FrameForge Privacy Policy</h1>
          <p className="text-sm font-sans text-gray-true-400">Last updated: 23 October 2026</p>
        </header>

        <p className="text-base font-sans leading-relaxed tracking-tight text-gray-true-300">
          FrameForge is a personal video production tool. I, Barış Özdemirci, run it on my own computer for my own
          YouTube channels; it isn’t offered to anyone else.
        </p>

        <Section title="What it accesses">
          When I connect one of my YouTube channels, FrameForge uses YouTube API Services to upload videos I have approved
          to that channel; to set their title, description, thumbnail, captions, playlist and publishing time; and to read
          the channel’s name and the public statistics of its videos.
        </Section>

        <Section title="What it stores">
          The access keys Google issues are stored only on my computer, encrypted. Channel names and video statistics are
          kept in a database on the same computer. Nothing is sent to anyone but Google and YouTube, and nothing is sold or
          shared.
        </Section>

        <Section title="Removing access">
          Access can be removed at any time on{" "}
          <a href="https://security.google.com/settings/security/permissions" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Google’s security settings page
          </a>
          . Disconnecting a channel in FrameForge deletes its keys at once and withdraws its access. Data obtained through a
          connection is deleted within 7 days after its access is removed.
        </Section>

        <Section title="YouTube and Google">
          FrameForge uses YouTube API Services. Using it means agreeing to the{" "}
          <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer" className={linkClass}>
            YouTube Terms of Service
          </a>
          .{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Google’s Privacy Policy
          </a>{" "}
          covers the data Google handles.
        </Section>

        <Section title="Contact">
          <a href="mailto:ozdemircibaris@gmail.com" className={linkClass}>
            ozdemircibaris@gmail.com
          </a>
        </Section>
      </article>
    </main>
  );
}
