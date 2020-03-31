/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a href="" target="_blank">
              ABITALIA | Sistema de Cotizaciones V1.0.0
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Developed by{" "}
          <a href="http://www.allsoft.mx/" target="_blank">
            Allsoft
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
