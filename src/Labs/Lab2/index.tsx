import { Container } from "react-bootstrap";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Flex from "./Flex";
import Float from "./Float";
import ForegroundColors from "./ForegroundColors";
import GridLayout from "./GridLayout";
import "./index.css";
import Margins from "./Margins";
import Padding from "./Padding";
import Positions from "./Positions";
import ReactIconsSampler from "./ReactIcons";
import ZIndex from "./zIndex";
import BootStrapGrids from "./BootStrapGrids";
import ScreenSizeLabel from "./ScreenSizeLabel";
import BootStrapTables from "./BootStrapTables";
import BootStrapLists from "./BootStrapLists";
import BootStrapForms from "./BootStrapForms";
import BootStrapNavigation from "./BootStrapNavigation";

export default function Lab2() {
  return (
    <Container>
      <div id="wd-lab2">
        <h2>Lab 2 - Cascading Style Sheets</h2>
        <h3>Styling with the STYLE attribute</h3>
        {/* We can use the style attribute to style the element from index.css */}
        <div id="wd-css-id-selectors">
          <h3>ID selectors</h3>
          <p id="wd-id-selector-1">
            Instead of changing the look and feel of all the elements of the
            same name, e.g., P, we can refer to a specific element by its ID
          </p>
          <p id="wd-id-selector-2">
            Here's another paragraph using a different ID and a different look
            and feel
          </p>
        </div>
        {/* Class selectors  as opposed to id selectors (groupings)*/}
        <div id="wd-css-class-selectors">
          <h3>
            Class selectors, groupings of elements as opposed to specific id's
          </h3>

          <p className="wd-class-selector">
            Instead of using IDs to refer to elements, you can use an element's
            CLASS attribute
          </p>

          <h4 className="wd-class-selector">
            This heading has same style as paragraph above
          </h4>
        </div>
        <div id="wd-css-document-structure">
          <div className="wd-selector-1">
            <h3>Document structure selectors</h3>
            <div className="wd-selector-2">
              Selectors can be combined to refer elements in particular places
              in the document
              <p className="wd-selector-3">
                This paragraph's red background is referenced as
                <br />
                .selector-2 .selector3
                <br />
                meaning the descendant of some ancestor.
                <br />
                <span className="wd-selector-4">
                  Whereas this span is a direct child of its parent
                </span>
                <br />
                You can combine these relationships to create specific styles
                depending on the document structure
              </p>
            </div>
          </div>
        </div>
        <h1>Foreground Colors</h1>
        <ForegroundColors />
        <h1>Background Colors</h1>
        <BackgroundColors />
        <h1>Borders</h1>
        <Borders />
        <h1>Padding</h1>
        <Padding />
        <h1>Margins</h1>
        <Margins />
        <h1>Rounded Corners</h1>
        <Corners />
        <h1>Dimensions</h1>
        <Dimensions />
        <h1>Positions</h1>
        <Positions />
        <h1>Z Index</h1>
        <ZIndex />
        <h1>Float</h1>
        <Float />
        <h1>Grid Layout</h1>
        <GridLayout />
        <h1>Flex</h1>
        <Flex />
        <h1>React Icons</h1>
        <ReactIconsSampler />
        <h1>BootStrap Grids</h1>
        <BootStrapGrids />
        <h1>Screen Size Label</h1>
        <ScreenSizeLabel />
        <h1>BootStrap Tables</h1>
        <BootStrapTables />
        <h1>BootStrap Lists</h1>
        <BootStrapLists />
        <h1>BootStrap Forms</h1>
        <BootStrapForms />
      </div>
      <BootStrapNavigation />
    </Container>
  );
}
