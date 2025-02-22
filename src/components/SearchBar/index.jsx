import React from 'react'

const Search = () => {
  return (
    <div className='flex gap-4 my-10 justify-center px-10'>
        <select className='w64 py-3 pl-4 bg-zinc-300 font-semibold rounded-md'>{/*add more options later */}
            <option value="" disabled hidden selected>Job Role</option>
            <option value="ios Developer">ios Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Android Developer">Android Developer</option>
            <option value="Developer Advocate">Developer Advocate</option>   
        </select>
        <select className="w-64 py-3 pl-4 bg-zinc-300 font-semibold rounded-md">
  <option value="" disabled selected hidden>Job Type</option>
  <option value="Full Time">Full Time</option>
  <option value="Part Time">Part Time</option>
  <option value="Contract">Contract</option>
</select>

<select className="w-64 py-3 pl-4 bg-zinc-300 font-semibold rounded-md">
  <option value="" disabled selected hidden>Location</option>
  <option value="Remote">Remote</option>
  <option value="In-Office">In-Office</option>
  <option value="Hybrid">Hybrid</option>
</select>

<select className="w-64 py-3 pl-4 bg-zinc-300 font-semibold rounded-md">
  <option value="" disabled selected hidden>Experience</option>
  <option value="Fresher">Fresher</option>
  <option value="Junior Level">Junior Level</option>
  <option value="Mid Level">Mid Level</option>
  <option value="Senior Level">Senior Level</option>
</select>
<button className='w-64 bg-blue-600 text-white font-bold py-3 rounded-md'>Search</button>
    </div>
  )
}

export default Search