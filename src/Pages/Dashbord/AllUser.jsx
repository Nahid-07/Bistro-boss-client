import { useQuery } from "@tanstack/react-query";
import { FaUsersCog } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const AllUser = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://bistro-boss-server-lilac-iota.vercel.app/users");
      const data = res.json();
      return data;
    },
  });
  const handleCreateAdmin = (user) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: `Are you sure you want to make admin ${user.userName}`,
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Make adimin!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://bistro-boss-server-lilac-iota.vercel.app/users/admin/${user._id}`, {
            method: "PATCH",
          })
            .then((res) => res.json())
            .then(() => {
              refetch();
            });
          swalWithBootstrapButtons.fire({
            title: "Done!",
            text: `You successfully added ${user.userName} as admin`,
            icon: "success",
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: `Make admin ${user.userName} has been cancelled`,
            icon: "error",
          });
        }
      });
  };
  // handle delete 
  const handleDelete = id =>{
    const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});
swalWithBootstrapButtons.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Yes, delete it!",
  cancelButtonText: "No, cancel!",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`https://bistro-boss-server-lilac-iota.vercel.app/users/delete/${id}`,{
      method : "DELETE"
    }).then(res => res.json()).then(data => {
      refetch()
    })
    swalWithBootstrapButtons.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire({
      title: "Cancelled",
      text: "Your imaginary file is safe :)",
      icon: "error"
    });
  }
});
    
  }
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
                <td>{user.userName}</td>
                <td>{user.userEmail}</td>

                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleCreateAdmin(user)}
                      className="bg-[#D1A054] p-3 rounded-md text-white"
                    >
                      <FaUsersCog />
                    </button>
                  )}
                </td>
                <td>
                  <button onClick={()=>{handleDelete(user._id)}} className="bg-red-600 p-3 rounded-md text-white">
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
