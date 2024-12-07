function UserProfile() {
	return (
	  <div className="bg-gray-100 sm:p-4 md:p-8 max-w-xs sm:max-w-sm md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
		<img
		  src="https://via.placeholder.com/150"
		  alt="User"
		  className="rounded-full mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36 hover:scale-110 transition-transform duration-300 ease-in-out"
		/>
		<h1 className="text-blue-800 text-lg sm:text-xl md:text-xl my-4 hover:text-blue-500 transition-colors duration-300 ease-in-out">
		  John Doe
		</h1>
		<p className="text-gray-600 text-sm sm:text-base">
		  Developer at Example Co. Loves to write code and explore new technologies.
		</p>
	  </div>
	);
  }
  
  export default UserProfile;
  