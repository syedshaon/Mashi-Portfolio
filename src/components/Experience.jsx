// Design from https://github.com/devmahmud/react-frontend-dev-portfolio

function Experience() {
  return (
    <section className="bg-yellow px-3 py-10 pb-20 dark:bg-[#494949] md:px-0">
      <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest text-white">Experience</h2>
      <div className="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
        <div id className="dark:brightness-80 dark:filter vertical-timeline-element">
          <span className="bg-[#AE944F] text-white dark:bg-[#919191] vertical-timeline-element-icon bounce-in">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--mdi" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor" d="m12 2.5l8.84 3.15l-1.34 11.7L12 21.5l-7.5-4.15l-1.34-11.7zm0 2.1L6.47 17h2.06l1.11-2.78h4.7L15.45 17h2.05zm1.62 7.9h-3.23L12 8.63z" />
            </svg>
          </span>
          <div className="vertical-timeline-element-content bounce-in">
            <div className="vertical-timeline-element-content-arrow" />
            <span className="rounded-xl bg-yellow px-[5px] py-[2px] text-sm dark:bg-[#919191] dark:text-white">Angular 8/9/10</span>
            <h3 className="text-lg font-bold">Front-End Developer</h3>
            <h4 className="text-md font-bold">DefOpenSource</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="rounded-xl bg-yellow px-[5px] py-[2px] text-sm dark:bg-[#919191] dark:text-white">REST API</span>
              <span className="rounded-xl bg-yellow px-[5px] py-[2px] text-sm dark:bg-[#919191] dark:text-white">RxJS</span>
              <span className="rounded-xl bg-yellow px-[5px] py-[2px] text-sm dark:bg-[#919191] dark:text-white">JavaScript</span>
              <span className="rounded-xl bg-yellow px-[5px] py-[2px] text-sm dark:bg-[#919191] dark:text-white">Bootstrap</span>
              <span className="rounded-xl bg-yellow px-[5px] py-[2px] text-sm dark:bg-[#919191] dark:text-white">MDBootstrap</span>
              <span className="rounded-xl bg-yellow px-[5px] py-[2px] text-sm dark:bg-[#919191] dark:text-white">EF Core</span>
              <span className="rounded-xl bg-yellow px-[5px] py-[2px] text-sm dark:bg-[#919191] dark:text-white">.NET Core</span>
              <span className="rounded-xl bg-yellow px-[5px] py-[2px] text-sm dark:bg-[#919191] dark:text-white">SignalR</span>
              <span className="rounded-xl bg-yellow px-[5px] py-[2px] text-sm dark:bg-[#919191] dark:text-white">Angular Material</span>
            </div>
            <span className="dark:text-white vertical-timeline-element-date">10.2019 - present</span>
          </div>
        </div>
        <div id className="dark:brightness-80 dark:filter vertical-timeline-element">
          <span className="bg-[#AE944F] text-white dark:bg-[#919191] vertical-timeline-element-icon bounce-in">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--mdi" width="1em" height="1em" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85c-1.03 0-1.87-.85-1.87-1.85c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16zm6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03c.6 0 1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16zm1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68c0 1.69-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68c0-1.69 1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26c0-.73-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26c0 .73 1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86zm-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86zm2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9"
              />
            </svg>
          </span>
          <div className="vertical-timeline-element-content bounce-in">
            <div className="vertical-timeline-element-content-arrow" />
            <span className="rounded-xl bg-yellow px-[5px] py-[2px] text-sm dark:bg-[#919191] dark:text-white">React</span>
            <h3 className="text-lg font-bold">Intern</h3>
            <h4 className="text-md font-bold">Serros Solutions</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="rounded-xl bg-yellow px-[5px] py-[2px] text-sm dark:bg-[#919191] dark:text-white">RxJS</span>
              <span className="rounded-xl bg-yellow px-[5px] py-[2px] text-sm dark:bg-[#919191] dark:text-white">Django</span>
              <span className="rounded-xl bg-yellow px-[5px] py-[2px] text-sm dark:bg-[#919191] dark:text-white">PHP</span>
              <span className="rounded-xl bg-yellow px-[5px] py-[2px] text-sm dark:bg-[#919191] dark:text-white">JavaScript</span>
              <span className="rounded-xl bg-yellow px-[5px] py-[2px] text-sm dark:bg-[#919191] dark:text-white">DHTMLX Gantt</span>
            </div>
            <span className="dark:text-white vertical-timeline-element-date">01.2018 - 09.2019</span>
          </div>
        </div>
        <div id className="vertical-timeline-element vertical-timeline-element--no-children">
          <span className="bg-[#AE944F] text-white dark:bg-[#919191] vertical-timeline-element-icon bounce-in">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--eos-icons" width="1em" height="1em" viewBox="0 0 24 24">
              <g>
                <path fill="currentColor" d="M7 3H17V7.2L12 12L7 7.2V3Z">
                  <animate id="iconifyReact0" fill="freeze" attributeName="opacity" begin="0;iconifyReact1.end" dur="2s" from={1} to={0} />
                </path>
                <path fill="currentColor" d="M17 21H7V16.8L12 12L17 16.8V21Z">
                  <animate fill="freeze" attributeName="opacity" begin="0;iconifyReact1.end" dur="2s" from={0} to={1} />
                </path>
                <path fill="currentColor" d="M6 2V8H6.01L6 8.01L10 12L6 16L6.01 16.01H6V22H18V16.01H17.99L18 16L14 12L18 8.01L17.99 8H18V2H6ZM16 16.5V20H8V16.5L12 12.5L16 16.5ZM12 11.5L8 7.5V4H16V7.5L12 11.5Z" />
                <animateTransform id="iconifyReact1" attributeName="transform" attributeType="XML" begin="iconifyReact0.end" dur="0.5s" from="0 12 12" to="180 12 12" type="rotate" />
              </g>
            </svg>
          </span>
          <div className="vertical-timeline-element-content bounce-in">
            <div className="vertical-timeline-element-content-arrow" />
            <span className="vertical-timeline-element-date" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
