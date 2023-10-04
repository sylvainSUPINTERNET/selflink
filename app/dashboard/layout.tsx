import React from "react"
import AuthGuard from "../guard/authguard"

export default function TestLayout({
    children, // will be a page or nested layout
    linkform,
    history
  }: {
    children: React.ReactNode,
    linkform: React.ReactNode,
    history: React.ReactNode
  }) {
    
    return (
      <AuthGuard>
      <div className="bg-white h-screen">
          <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav className="mb-0 md:mb-5 ">
              <div className="navbar bg-base-100 ">
                <div className="flex-1">
                  <a className="btn btn-ghost normal-case text-xl">Dashboard</a>
                </div>
                <div className="flex-none gap-2">
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 rounded-full">
                        <img src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg" />
                      </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                      <li>
                        <a className="justify-between">
                          Profile
                          <span className="badge">New</span>
                        </a>
                      </li>
                      <li><a>Settings</a></li>
                      <li><a>Logout</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </section>

          {/* <div className="flex flex-col md:flex-row justify-center container mx-auto mt-10 md:space-x-2 space-y-2 md:space-y-0"> */}
          <div className="lg:flex lg:flex-row lg:space-x-0 lg:p-0 h-4/4 ">
              <div className="bg-base-100 w-full p-6  lg:rounded-none flex-grow">
                {children}
              </div>
              <div className="bg-base-100 w-full p-6  lg:rounded-none  flex-grow">
                {linkform}
              </div>
          </div>

      </div>
      </AuthGuard>
    )
  }