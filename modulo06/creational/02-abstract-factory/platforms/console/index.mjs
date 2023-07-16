import ViewFactory from "../../shared/base/viewFactory.mjs";
import TableConsoleComponent from "./table.mjs";

export default class ConsolwFactory extends  ViewFactory {
    createTable() {
        return new TableConsoleComponent()
    }
}
