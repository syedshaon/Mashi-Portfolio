import React from "react";

function Portfolio() {
  return (
    <div className="pt-10 sm:pt-20 md:pt-24" data-v-c3c2d138 data-v-6fbaf86c>
      <div className="text-center" data-v-c3c2d138>
        <p className="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light" data-v-c3c2d138>
          Projects Portfolio
        </p>
      </div>{" "}
      <div className="mt-8 sm:mt-10" data-v-c3c2d138>
        <h3 className="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4" data-v-c3c2d138>
          Search projects by title or filter by category
        </h3>{" "}
        <div className="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2" data-v-c3c2d138>
          <div className="flex justify-between gap-2" data-v-c3c2d138>
            <span className="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer" data-v-c3c2d138>
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search text-ternary-dark dark:text-ternary-light" data-v-c3c2d138>
                <circle cx={11} cy={11} r={8} />
                <line x1={21} y1={21} x2="16.65" y2="16.65" />
              </svg>
            </span>{" "}
            <input
              id="name"
              name="name"
              type="search"
              required="required"
              placeholder="Search Projects"
              aria-label="Name"
              className="
      font-general-medium
      pl-3
      pr-1
      sm:px-4
      py-2
      border-1 border-gray-200
      dark:border-secondary-dark
      rounded-lg
      text-sm
      sm:text-md
      bg-secondary-light
      dark:bg-ternary-dark
      text-primary-dark
      dark:text-ternary-light
    "
              data-v-c3c2d138
            />
          </div>{" "}
          <select
            name="projects"
            id="projects"
            className="
    font-general-medium
    px-4
    py-2
    border-1 border-gray-200
    dark:border-secondary-dark
    rounded-lg
    text-sm
    sm:text-md
    bg-secondary-light
    dark:bg-ternary-dark
    text-primary-dark
    dark:text-ternary-light
  "
            data-v-6352abca
            data-v-c3c2d138
          >
            <option value className="text-sm sm:text-md" data-v-6352abca>
              All Projects
            </option>{" "}
            <option value="Web Application" className="sm:text-md" data-v-6352abca>
              Web Application
            </option>
            <option value="Mobile Application" className="sm:text-md" data-v-6352abca>
              Mobile Application
            </option>
            <option value="UI/UX Design" className="sm:text-md" data-v-6352abca>
              UI/UX Design
            </option>
            <option value="Branding & Anim" className="sm:text-md" data-v-6352abca>
              Branding &amp; Anim
            </option>
          </select>
        </div>
      </div>{" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10" data-v-c3c2d138>
        <div aria-label="Single Project" className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark" data-v-c3c2d138>
          <a href="/projects/260d1271-f1f2-4bc9-a5eb-05a89c8cccdb" data-v-c3c2d138 className>
            <div data-v-c3c2d138>
              <img src="https://nuxtjs-tailwindcss-portfolio.netlify.app/images/web-project-2.jpg" alt="Google Health Platform" className="rounded-t-xl border-none" data-v-c3c2d138 />
            </div>{" "}
            <div className="text-center px-4 py-6" data-v-c3c2d138>
              <p className="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2" data-v-c3c2d138>
                Google Health Platform
              </p>{" "}
              <span className="font-general-medium text-lg text-ternary-dark dark:text-ternary-light" data-v-c3c2d138>
                Web Application
              </span>
            </div>
          </a>
        </div>
        <div aria-label="Single Project" className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark" data-v-c3c2d138>
          <a href="/projects/260d1271-f1f2-4bc9-a5eb-05a89c8cccdc" data-v-c3c2d138 className>
            <div data-v-c3c2d138>
              <img src="https://nuxtjs-tailwindcss-portfolio.netlify.app/images/mobile-project-2.jpg" alt="Phoenix Digital Agency" className="rounded-t-xl border-none" data-v-c3c2d138 />
            </div>{" "}
            <div className="text-center px-4 py-6" data-v-c3c2d138>
              <p className="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2" data-v-c3c2d138>
                Phoenix Digital Agency
              </p>{" "}
              <span className="font-general-medium text-lg text-ternary-dark dark:text-ternary-light" data-v-c3c2d138>
                Mobile Application
              </span>
            </div>
          </a>
        </div>
        <div aria-label="Single Project" className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark" data-v-c3c2d138>
          <a href="/projects/260d1271-f1f2-4bc9-a5eb-05a89c8cccdy" data-v-c3c2d138 className>
            <div data-v-c3c2d138>
              <img src="https://nuxtjs-tailwindcss-portfolio.netlify.app/images/ui-project-1.jpg" alt="Project Management UI" className="rounded-t-xl border-none" data-v-c3c2d138 />
            </div>{" "}
            <div className="text-center px-4 py-6" data-v-c3c2d138>
              <p className="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2" data-v-c3c2d138>
                Project Management UI
              </p>{" "}
              <span className="font-general-medium text-lg text-ternary-dark dark:text-ternary-light" data-v-c3c2d138>
                UI/UX Design
              </span>
            </div>
          </a>
        </div>
        <div aria-label="Single Project" className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark" data-v-c3c2d138>
          <a href="/projects/260d1271-f1f2-4bc9-a5eb-05a89c8ccc99" data-v-c3c2d138 className>
            <div data-v-c3c2d138>
              <img src="https://nuxtjs-tailwindcss-portfolio.netlify.app/images/ui-project-2.jpg" alt="Cloud Storage Platform" className="rounded-t-xl border-none" data-v-c3c2d138 />
            </div>{" "}
            <div className="text-center px-4 py-6" data-v-c3c2d138>
              <p className="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2" data-v-c3c2d138>
                Cloud Storage Platform
              </p>{" "}
              <span className="font-general-medium text-lg text-ternary-dark dark:text-ternary-light" data-v-c3c2d138>
                UI/UX Design
              </span>
            </div>
          </a>
        </div>
        <div aria-label="Single Project" className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark" data-v-c3c2d138>
          <a href="/projects/260d1271-f1f2-4bc9-a5eb-05a89c8cccdm" data-v-c3c2d138 className>
            <div data-v-c3c2d138>
              <img src="https://nuxtjs-tailwindcss-portfolio.netlify.app/images/mobile-project-1.jpg" alt="Uber Social App" className="rounded-t-xl border-none" data-v-c3c2d138 />
            </div>{" "}
            <div className="text-center px-4 py-6" data-v-c3c2d138>
              <p className="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2" data-v-c3c2d138>
                Uber Social App
              </p>{" "}
              <span className="font-general-medium text-lg text-ternary-dark dark:text-ternary-light" data-v-c3c2d138>
                Mobile Application
              </span>
            </div>
          </a>
        </div>
        <div aria-label="Single Project" className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark" data-v-c3c2d138>
          <a href="/projects/260d1271-f1f2-4bc9-a5eb-05a89c8cccbb" data-v-c3c2d138 className>
            <div data-v-c3c2d138>
              <img src="https://nuxtjs-tailwindcss-portfolio.netlify.app/images/web-project-1.jpg" alt="Apple Design System" className="rounded-t-xl border-none" data-v-c3c2d138 />
            </div>{" "}
            <div className="text-center px-4 py-6" data-v-c3c2d138>
              <p className="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2" data-v-c3c2d138>
                Apple Design System
              </p>{" "}
              <span className="font-general-medium text-lg text-ternary-dark dark:text-ternary-light" data-v-c3c2d138>
                Web Application
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
