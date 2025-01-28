const DoctorForm = () => {
    return (
        <>
            <form className="max-w-lg m-auto pt-6">
                <h2 className="text-center text-2xl font-bold mb-6">Doctor Details</h2>
                <div className="flex flex-col">
                    {/* Personal Information */}
                    <h3 className="text-lg font-semibold mt-4">Personal Information</h3>
                    <input
                        className="p-3 mb-4 border border-gray-300 rounded"
                        placeholder="Full Name"
                    />
                    <select className="p-3 mb-4 border border-gray-300 rounded">
                        <option value="" className="bg-gray-700 ">Select Gender</option>
                        <option value="Male" className="bg-gray-700">Male</option>
                        <option value="Female" className="bg-gray-700" >Female</option>
                        <option value="Other" className="bg-gray-700">Other</option>
                    </select>
                    <input
                        className="p-3 mb-4 border border-gray-300 rounded"
                        placeholder="Phone Number"
                    />
                    <input
                        className="p-3 mb-4 border border-gray-300 rounded"
                        placeholder="Email Address"
                        type="email"
                    />

                    {/* Professional Details */}
                    <h3 className="text-lg font-semibold mt-6">Professional Details</h3>
                    <input
                        className="p-3 mb-4 border border-gray-300 rounded"
                        placeholder="Specialization (e.g., Cardiology)"
                    />
                    <input
                        className="p-3 mb-4 border border-gray-300 rounded"
                        placeholder="Medical Registration Number"
                    />
                    <input
                        className="p-3 mb-4 border border-gray-300 rounded"
                        placeholder="Qualifications (e.g., MBBS, MD)"
                    />
                    <input
                        className="p-3 mb-4 border border-gray-300 rounded"
                        placeholder="Years of Experience"
                        type="number"
                    />
                    <input
                        className="p-3 mb-4 border border-gray-300 rounded"
                        placeholder="Clinic/Practice Name"
                    />
                    <input
                        className="p-3 mb-4 border border-gray-300 rounded"
                        placeholder="Languages Spoken"
                    />

                    {/* Availability */}
                    <h3 className="text-lg font-semibold mt-6">Availability</h3>
                    <input
                        className="p-3 mb-4 border border-gray-300 rounded"
                        placeholder="Consultation Hours"
                    />
                    <input
                        className="p-3 mb-4 border border-gray-300 rounded"
                        placeholder="Days of Operation (e.g., Mon-Fri)"
                    />
                    <input
                        className="p-3 mb-4 border border-gray-300 rounded"
                        placeholder="Vacation Schedule"
                    />

                    {/* Appointment Settings */}
                    <h3 className="text-lg font-semibold mt-6">Appointment Settings</h3>
                    <input
                        className="p-3 mb-4 border border-gray-300 rounded"
                        placeholder="Consultation Fees"
                        type="number"
                    />
                    <input
                        className="p-3 mb-4 border border-gray-300 rounded"
                        placeholder="Max Appointments Per Day"
                        type="number"
                    />

                    {/* Login and Additional Details */}
                    {/* <h3 className="text-lg font-semibold mt-6">Account Details</h3>
                    <input
                        className="p-3 mb-4 border border-gray-300 rounded"
                        placeholder="Username"
                    />
                    <input
                        className="p-3 mb-4 border border-gray-300 rounded"
                        placeholder="Password"
                        type="password"
                    /> */}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded mt-6 hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
};

export default DoctorForm;
