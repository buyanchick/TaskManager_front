import React from "react";
import { Checkbox, Table } from "antd";
import { Todo } from "./app/models/Todo.tsx";
import type { TableColumnsType } from "antd";
import "./TodoTable.css"

const columns: TableColumnsType<Todo> = [
  { title: "title", dataIndex: "title", key: "title" },
  { title: "createdAt", dataIndex: "createdAt", key: "createdAt" },
  { title: "updatedAt", dataIndex: "updatedAt", key: "updatedAt" },
  {
    title: "isCompleted",
    dataIndex: "isCompleted",
    key: "isCompleted",
    render: (value) => (
      <Checkbox className="todotable-checkbox"
        checked={value} />
    )
  },
];

const TodoTable = (props: Array<Todo>) => {
  return (
    <Table
      className="todotable-table"
      columns={columns}
      expandable={{
        expandedRowRender: (record) => (
          <p style={{ margin: 0 }}>{record.description}</p>
        )
      }}
      dataSource={props.props.todos}
      rowKey="id"
    />
  );
};

export default TodoTable;
