import { ThemeSwitch } from "@/components/ui/ThemeSwitch";

export default function Home() {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.18),_transparent_35%),linear-gradient(to_bottom,_rgba(255,255,255,0.04),_transparent)] px-6 py-10 text-foreground">
            <div className="mx-auto max-w-5xl">
                <header className="mb-8 flex items-center justify-between rounded-full border border-border/70 bg-card/80 px-4 py-3 shadow-sm backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                            P
                        </div>
                        <div>
                            <p className="text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                                PR Review
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">
                            Theme
                        </span>
                        <ThemeSwitch />
                    </div>
                </header>

                <section className="grid items-center gap-8 rounded-[2rem] border border-border/70 bg-card/90 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.12)] ring-1 ring-black/5 md:grid-cols-[1.35fr_0.65fr] md:p-12">
                    <div>
                        <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium tracking-[0.18em] text-primary uppercase">
                            Productive review
                        </span>

                        <h1 className="mt-6 text-4xl font-black tracking-tight text-balance md:text-6xl">
                            Welcome to your smarter PR workspace
                        </h1>

                        <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
                            Review pull requests faster, catch issues earlier,
                            and keep your team moving with a clean, focused
                            workflow.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <button className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-95">
                                Start reviewing
                            </button>
                            <button className="rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-accent">
                                View demo
                            </button>
                        </div>
                    </div>

                    <div className="rounded-[1.5rem] border border-border bg-gradient-to-br from-primary/15 via-card to-secondary/20 p-5 shadow-inner">
                        <div className="rounded-[1.25rem] border border-border bg-background/70 p-4 backdrop-blur-sm">
                            <div className="mb-4 flex items-center justify-between">
                                <p className="text-sm font-semibold">
                                    Review summary
                                </p>
                                <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                    Healthy
                                </span>
                            </div>

                            <div className="space-y-4">
                                <div className="rounded-xl bg-muted p-3">
                                    <p className="text-xs text-muted-foreground">
                                        Open PRs
                                    </p>
                                    <p className="mt-2 text-3xl font-bold">
                                        24
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-xl bg-muted p-3">
                                        <p className="text-xs text-muted-foreground">
                                            Approved
                                        </p>
                                        <p className="mt-2 text-2xl font-bold">
                                            18
                                        </p>
                                    </div>
                                    <div className="rounded-xl bg-muted p-3">
                                        <p className="text-xs text-muted-foreground">
                                            Pending
                                        </p>
                                        <p className="mt-2 text-2xl font-bold">
                                            6
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
