

// src/PatientForm.jsx
// import React from 'react';

const PatientForm = () => {
    return (
        <>
            <form className="max-w-lg m-auto p-6">
                <h2 className="text-center text-2xl font-bold text-blue-600 mb-4">Patients Medical History</h2>
                <h3 className="text-center text-xl font-semibold text-blue-600 mb-3">Personal Information</h3>

                <div className="flex flex-col">
                    <input className="p-3 mb-4 border border-gray-300 rounded" type="text" placeholder="Full Name" />
                    <input className="p-3 mb-4 border border-gray-300 rounded" type="date" placeholder="Date of Birth" />
                    <select className="p-3 mb-4 border border-gray-300 rounded">
                        <option value="" className="bg-gray-700 ">Select Gender</option>
                        <option value="Male" className="bg-gray-700">Male</option>
                        <option value="Female" className="bg-gray-700" >Female</option>
                        <option value="Other" className="bg-gray-700">Other</option>
                    </select>
                    <input className="p-3 mb-4 border border-gray-300 rounded" type="tel" placeholder="Phone Number" />
                    <input className="p-3 mb-4 border border-gray-300 rounded" type="email" placeholder="Email" />
                    <textarea className="p-3 mb-4 border border-gray-300 rounded" placeholder="Address"></textarea>
                    <input className="p-3 mb-4 border border-gray-300 rounded" type="text" placeholder="Emergency Contact Name" />
                    <input className="p-3 mb-4 border border-gray-300 rounded" type="text" placeholder="Emergency Contact Relation" />
                    <input className="p-3 mb-4 border border-gray-300 rounded" type="tel" placeholder="Emergency Contact Phone" />
                </div>

                <h3 className="text-center text-xl font-semibold text-blue-600 mb-3">Medical Information</h3>
                <div className="flex flex-col">
                    <textarea className="p-3 mb-4 border border-gray-300 rounded" placeholder="Known Allergies"></textarea>
                    <textarea className="p-3 mb-4 border border-gray-300 rounded" placeholder="Medical History"></textarea>
                    <textarea className="p-3 mb-4 border border-gray-300 rounded" placeholder="Family Medical History"></textarea>
                    <textarea className="p-3 mb-4 border border-gray-300 rounded" placeholder="Current Medications"></textarea>
                    <textarea className="p-3 mb-4 border border-gray-300 rounded" placeholder="Vaccination Records"></textarea>
                    <input className="p-3 mb-4 border border-gray-300 rounded" type="text" placeholder="Blood Group" />
                    <textarea className="p-3 mb-4 border border-gray-300 rounded" placeholder="Lifestyle Information (e.g., smoking, alcohol consumption, exercise habits)"></textarea>
                </div>

                <h3 className="text-center text-xl font-semibold text-blue-600 mb-3">Insurance Details</h3>
                <div className="flex flex-col">
                    <input className="p-3 mb-4 border border-gray-300 rounded" type="text" placeholder="Insurance Provider Name" />
                    <input className="p-3 mb-4 border border-gray-300 rounded" type="text" placeholder="Policy Number" />
                    <textarea className="p-3 mb-4 border border-gray-300 rounded" placeholder="Coverage Details"></textarea>
                    <input className="p-3 mb-4 border border-gray-300 rounded" type="date" placeholder="Expiration Date" />
                </div>

                <h3 className="text-center text-xl font-semibold text-blue-600 mb-3">Health Metrics</h3>
                <div className="flex flex-col">
                    <input className="p-3 mb-4 border border-gray-300 rounded" type="text" placeholder="Weight" />
                    <input className="p-3 mb-4 border border-gray-300 rounded" type="text" placeholder="Height" />
                    <input className="p-3 mb-4 border border-gray-300 rounded" type="text" placeholder="BMI" />
                    <input className="p-3 mb-4 border border-gray-300 rounded" type="text" placeholder="Blood Pressure" />
                    <input className="p-3 mb-4 border border-gray-300 rounded" type="text" placeholder="Heart Rate" />
                </div>

                <div className="flex flex-col">
                    <div className="flex items-center mb-4">
                        <input className="mr-2" type="checkbox" id="consent" />
                        <label htmlFor="consent">I consent to data sharing for medical purposes</label>
                    </div>
                </div>

                <button className="bg-blue-600 text-white p-3 rounded mt-4 hover:bg-blue-700">Submit</button>
            </form>
        </>
    );
};

export default PatientForm;
