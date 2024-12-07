function UserProfile() {
	return (
	  <div className="bg-gray-100 p-4 sm:p-8 max-w-xs sm:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
		<img
		  src="https://via.placeholder.com/150"
		  alt="User"
		  className="rounded-full mx-auto w-24 h-24 sm:w-36 sm:h-36"
		/>
		<h1 className="text-blue-800 text-lg sm:text-xl my-4">John Doe</h1>
		<p className="text-gray-600 text-sm sm:text-base">
		  Developer at Example Co. Loves to write code and explore new technologies.
		</p>
	  </div>
	);
  }
  
  export default UserProfile;
  