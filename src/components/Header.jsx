/* eslint-disable @next/next/no-img-element */

export function Header() {
  return (
    <section>
        <div className="mx-auto max-w-7xl px-8 py-12 lg:pt-24">
          <div className="mx-auto max-w-xl">
            <div>
              <div className="md:flex md:items-center md:justify-between md:space-x-5">
                <div className="flex items-center space-x-5">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img
                        className="h-16 w-16 lg:h-24 lg:w-24 rounded-full border border-white/10"
                        src="/masked.jpeg"
                        alt="image"
                      />
                      <span
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></span>
                    </div>
                  </div>

                  <div className="pt-1.5">
                    <h1 className="lg:text-xl text-black dark:text-white">
                      ✺ Giancarlo Ramirez
                    </h1>
                    <p className="text-sm font-light text-neutral-500">
                      Software Developer
                    </p>
                    <p>
                      <a
                        className="text-xs underline hover:no-underline duration-200 dark:text-white"
                        href="https://www.linkedin.com/in/gian-ramirez/"
                      >
                        LinkedIn
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-24 text-sm font-light">
                <p className="text-black dark:text-white">About</p>
                <div className="text-neutral-500 dark:text-neutral-400 space-y-3 mt-3">
                  <p>
                    Over the last 7 years, I{`'`}ve been an adaptable and hands-on problem solver, actively
                    collaborating with start-ups and agencies across diverse industries. My involvement
                    spans various sectors including <span className="font-bold">education, entertainment, social networks, and web3 technologies.</span>
                  </p>
                  <p>
                    I specialize in front-end development while also boasting
                    considerable experience in back-end development and managing cloud infrastructure.
                  </p>
                  <p>
                    I possess a proven track record of showcasing both hard and
                    soft skills in effectively leading software projects, even outside
                    my designated role. I am passionate about contributing to the growth
                    of my coworkers by providing mentorship and guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}