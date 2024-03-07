// Design from https://github.com/mshuber1981/github-react-portfolio-template

function Contact2() {
  return (
    <div name="Contact" id="contact">
      <section className="sc-iBYPxa lczwqh d-flex flex-column justify-content-center">
        <div className="d-flex container">
          <div className="sc-gswONk ernqOe">
            <h2>Contact Me</h2>
            <div className="underline" />
          </div>
        </div>
        <div className="container">
          <form noValidate className>
            <div className="mx-auto mb-3 form-group">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input required placeholder="Your name" type="text" id="name" className="form-control" />
              <div className="invalid-feedback">
                <h5>Name must be at least one character.</h5>
              </div>
            </div>
            <div className="mx-auto mb-3 form-group">
              <label className="form-label" htmlFor="email">
                Email address
              </label>
              <input required pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$" placeholder="someone@something.com" id="email" className="form-control" />
              <div className="invalid-feedback">
                <h5>Please enter a valid email.</h5>
              </div>
            </div>
            <div className="mx-auto mb-3 form-group">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea required placeholder="Your message..." id="message" className="form-control" defaultValue={""} />
              <div className="invalid-feedback">
                <h5>Please provide a valid message.</h5>
              </div>
            </div>
            <div className="mx-auto text-center form-group">
              <button type="submit" className="my-4 btn btn-outline-dark btn-lg">
                Submit{" "}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact2;
