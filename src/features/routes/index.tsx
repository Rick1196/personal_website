import { Routes as RRoutes, Route } from "react-router";
import Main from "../main";
import MobileView from "../mobile";
import Menu from "../../common/menu";
import PDFPreview from "../pdfPreview";

export default function Routes() {
    return <RRoutes>
        <Route index element={<Menu>
            <Main />
        </Menu>} />
        <Route path="mobile" element={<Menu>
            <MobileView />
        </Menu>} />
        <Route path="pdf" element={<Menu>
            <PDFPreview />
        </Menu>} />
    </RRoutes>
}