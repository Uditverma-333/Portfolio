import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../assets/UV RESUME.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css"; // Core styles only
import StarryBackground from "../StarryBackground/StarryBackground";

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const viewerWidth = width > 786 ? "800px" : "90vw"; // 90% viewport width for mobile devices

  return (
    <div>
      <Container fluid className="resume-section">
        <StarryBackground />

        {/* PDF Viewer */}
        <Row className="resume">
          <div style={{ height: "950px", width: viewerWidth, margin: "auto", padding: "10px" }}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
              <Viewer
                fileUrl={pdf}
              />
            </Worker>
          </div>
        </Row>

        {/* Download Button below the resume */}
        <Row style={{ justifyContent: "center", marginTop: "20px" }}>
          <Button
            variant="primary"
            type="button"
            onClick={() => {
              console.log("Button clicked");
              window.open(pdf, '_blank');
            }}
            style={{ maxWidth: "250px", cursor: "pointer", position: "relative", zIndex: 10 }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
