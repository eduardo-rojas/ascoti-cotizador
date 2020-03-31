/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        {/* Seccion izquierda del footer opcional:  */}
        {/* <nav>
          <ul>
            <li>
              <a
                href=""
                target="_blank"
              >
                Lorem
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
              >
                Ipsum
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav> */}
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Developed by{" "}
          <a href="http://www.allsoft.mx/" target="_blank">
            Allsoft.
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
