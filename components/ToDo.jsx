const ToDo = ({ index, title, description, mongoId, complete, deleteTodo, completeTodo }) => {
    return (
        <tr className="bg-white border-b">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {index + 1}
            </th>
            <td className="px-6 py-4">{title}</td>
            <td className="px-6 py-4">{description}</td>
            <td className="px-6 py-4">{complete ? "Completed" : "Pending"}</td>
            <td>
                <button className="px-2 bg-green-400 rounded-sm mx-1 text-white hover:bg-gray-600 transition-all ease-in-out" onClick={()=> completeTodo(mongoId)}>Done</button>
                <button className="px-2 bg-yellow-500 rounded-sm mx-1 text-white hover:bg-red-600 transition-all ease-in-out" onClick={() => deleteTodo(mongoId)}>Delete</button>
            </td>
        </tr>
    );
};

export default ToDo;
