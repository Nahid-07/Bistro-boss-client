import { useQuery } from "@tanstack/react-query";
import { FaUsersCog } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const AllUser = () => {
    const {data: users=[], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/users');
            const data = res.json()
            return data
        }
    })
    return (
        <div>
            <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Roll</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-lg font-semibold">
              {users.map((user) => (
                <tr key={user._id}>
                  <td>
                    {user.userName}
                  </td>
                  <td>{user.userEmail}</td>

                  <td><button className="bg-[#D1A054] p-3 rounded-md text-white"><FaUsersCog /></button></td>
                  <td>
                    <button
                      className='bg-red-600 p-3 rounded-md text-white'
                    >
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
    );
};

export default AllUser;