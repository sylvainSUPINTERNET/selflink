import AuthGuard from "../guard/authguard"

export default function TestLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <AuthGuard>
          <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav>
                My layout stuff
            </nav>
            {children}
          </section>
      </AuthGuard>
    )
  }