import axios from "axios";
import { Todo } from "./app/models/Todo.tsx";
import moment from "moment";

const API_URL = "https://localhost:7064/api/Tasks/";

class TodoService {
  getTasks(): Promise<Array<Todo>> {
    return axios
      .get(API_URL + "GetTasks")
      .then((response) => {
        response.data.forEach((el) => {
          el.createdAt = moment(el.createdAt).format("DD.MM.YYYY h:mm");
          el.updatedAt = moment(el.updatedAt).format("DD.MM.YYYY h:mm");
        });

        return response.data;
      })
      .catch((error) => console.log(error));
  }
}
export default new TodoService();
