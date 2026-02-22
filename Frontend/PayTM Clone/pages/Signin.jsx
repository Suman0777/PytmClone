import { useNavigate } from "react-router"

const Signin = () => {
  const navbar = useNavigate();
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center px-4'>
      
      <form className='bg-white w-full max-w-sm p-8 rounded-2xl shadow-lg space-y-6'>
        
        <h1 className='text-2xl font-semibold text-gray-800 text-center'>
          Sign In
        </h1>

        {/* Username */}
        <div className='space-y-2'>
          <label className='text-sm text-gray-600'>Username</label>
          <input
            type="text"
            placeholder='Enter your username'
            required
            className='w-full px-4 py-2 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-gray-400 
                       transition '
          />
        </div>

        {/* Password */}
        <div className='space-y-2'>
          <label className='text-sm text-gray-600'>Password</label>
          <input
            type="password"
            required
            placeholder='Enter your password'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-gray-400 
                       transition'
          />
        </div>

        {/* Button */}
        <button
          type='submit'
          className='w-full bg-gray-800 hover:bg-gray-900 text-white 
                     py-2 rounded-lg transition duration-200 cursor-pointer'
        >
          Sign In
        </button>

        {/* Sign up link */}
        <div className='flex gap-1 text-sm'>
                <span>Go Back to </span>
                <span 
                    className='underline cursor-pointer font-medium'
                    onClick={() => navbar("/signup")}
                >
                    Sign up
                </span>
        </div>
      </form>
    </div>
  )
}

export default Signin