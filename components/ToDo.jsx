

const ToDo = () => {
    return (
            <tr className="bg-white border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    1
                </th>
                <td className="px-6 py-4">
                    Study
                </td>
                <td className="px-6 py-4">
                    Learn Next Js
                </td>
                <td className="px-6 py-4">
                    Pending
                </td>
                <td>
                    <button className="px-2 bg-green-400 rounded-sm mx-1 text-white hover:bg-gray-600 transition-all ease-in-out">Done</button>
                    
                    <button className="px-2 bg-yellow-500 rounded-sm mx-1 text-white hover:bg-red-600 transition-all ease-in-out">Delete</button>
                </td>
            </tr>
    )
}

export default ToDo
