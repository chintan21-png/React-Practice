// UserCard.jsx
function UserCard({ user }) {
  return (
    <div className="w-72 bg-violet-300 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:scale-105 cursor-pointer">
      
      {/* Banner */}
      <div className="h-20 bg-linear-to-br from-indigo-900 via-indigo-700 to-indigo-400 relative">
        <div className="absolute top-2 right-3">
          <span className="text-xs font-medium bg-white/20 text-white px-2.5 py-0.5 rounded-full tracking-wide">
            {user.role}
          </span>
        </div>
      </div>

      <div className="px-5 pb-6">
        {/* Avatar row */}
        <div className="flex items-end justify-between mt-4 mb-3">
          <img
            src={user.image}
            alt={user.firstName}
            className="w-16 h-16 rounded-full border-3 border-white object-cover"
          />
          <div className="flex gap-1.5 pb-1">
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
              ✉
            </button>
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
              📞
            </button>
          </div>
        </div>

        {/* Name & email */}
        <h2 className="text-base font-semibold text-gray-900 mb-0.5">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-sm text-gray-400 mb-4">{user.email}</p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-violet-900 rounded-lg px-3 py-2.5">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-0.5">Age</p>
            <p className="text-lg font-medium text-gray-800">{user.age}</p>
          </div>
          <div className="bg-violet-900 rounded-lg px-3 py-2.5">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-0.5">City</p>
            <p className="text-lg font-medium text-gray-800">{user.address.city}</p>
          </div>
        </div>

        <button className="bg-cyan-950 text-cyan-400 border border-cyan-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group w-full mt-4">
           <span class="bg-cyan-400 shadow-cyan-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
             View Profile
        </button>
      </div>
    </div>
  );
}

export default UserCard;