'use client' // Error boundaries must be Client Components

// https://nextjs.org/docs/app/api-reference/file-conventions/error

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        // global-error must include html and body tags
        <html>
        <body>
            <h2>Global Error!</h2>
            <button onClick={() => reset()}>Try again</button>
        </body>
        </html>
    )
}