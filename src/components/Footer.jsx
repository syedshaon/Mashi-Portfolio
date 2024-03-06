function Footer() {
  return (
    <footer className="footer footer-center p-10 rounded-md lg:mt-16">
      <div>
        <p className="font-bold">
          Portflow. <br />A simple portfolio web template
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-2">
          <a href className="btn btn-sm bg-transparent border-none hover:bg-indigo-700 hover:text-white">
            <i className="lni lni-linkedin" />
          </a>
          <a href className="btn btn-sm bg-transparent border-none hover:bg-indigo-700 hover:text-white">
            <i className="lni lni-github" />
          </a>
          <a href className="btn btn-sm bg-transparent border-none hover:bg-indigo-700 hover:text-white">
            <i className="lni lni-instagram" />
          </a>
          <a href className="btn btn-sm bg-transparent border-none hover:bg-indigo-700 hover:text-white">
            <i className="lni lni-twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
