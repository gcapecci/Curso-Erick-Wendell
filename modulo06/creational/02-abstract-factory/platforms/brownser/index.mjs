import ViewFactory from "../../shared/base/viewFactory.mjs";
import TableBrownserComponent from "./table.mjs";

export default class BrownserFactory extends  ViewFactory {
    createTable() {
        return new TableBrownserComponent()
    }
}
