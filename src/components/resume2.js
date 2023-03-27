import { Document, Page } from "react-pdf";
import resume from "../media/GunnarCurryResume3.pdf";

function CustomToolbar() {
  return (
    <div>
      <button>Previous Page</button>
      <button>Next Page</button>
    </div>
  );
}

function Resume2() {
  return (
    <div>
      <h1>PDF Viewer</h1>
      <Document file={resume} renderToolbar={() => <CustomToolbar />}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default Resume2;
