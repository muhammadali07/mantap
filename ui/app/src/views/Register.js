import icons8_google from '../assets/img/icons8-google.svg';
import icons8_bitbucket from '../assets/img/icons8-bitbucket.svg';
import icons8_facebook from '../assets/img/icons8-facebook.svg';
import icons8_github from '../assets/img/icons8-github.svg';
import '../assets/css/App.css';



function App() {
  return (
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-6 lg:px-8">
      {/* <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
        <p class="mt-2 text-center text-sm text-gray-600 max-w">
          Already registered?
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">Sign in</a>
        </p>
      </div> */}

      {/* <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="p-5 bg-white py-8 px-6 shadow rounded-lg sm:px-10 ">
          <form class="mb-0 space-y-6" action="#" method="POST">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
              <div class="mt-1">
                <input id="email" name="email" type="email" autocomplete="email" required class="" />
              </div>
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <div class="mt-1">
                <input id="password" name="password" type="password" autocomplete="current-password" required class="" />
              </div>
            </div>

            <div>
              <label for="company-size" class="block text-sm font-medium text-gray-700">Company size</label>
              <div class="mt-1">
                <select name="company-size" id="company-size" class="">
                  <option value="">Please select</option>
                  <option value="small">1 to 10 employees</option>
                  <option value="medium">11 to 50 employees</option>
                  <option value="large">50+ employees</option>
                </select>
              </div>
            </div>

            <div class="flex items-center">
              <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" class="" />
              <label for="terms-and-privacy" class="ml-2 block text-sm text-gray-900"
              >I agree to the
                <a href="#" class="text-indigo-600 hover:text-indigo-500">Terms</a>
                and
                <a href="#" class="text-indigo-600 hover:text-indigo-500">Privacy Policy</a>.
              </label>
            </div>

            <div>
              <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign up</button>
            </div>
          </form>
        </div>
      </div> */}

      {/* <div className='mt-2 sm:mx-auto sm:w-full sm:max-w-md'>
        <p class="mt-2 text-center text-sm text-gray-600 max-w">Or Sign Up with :</p>
      </div>
      <div className='mt-2 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10 grid grid-cols-4 gap-4'>
          <button><img class="mx-auto h-12 w-auto" src={icons8_google} alt="Google" /></button>
          <button><img class="mx-auto h-12 w-auto" src={icons8_github} alt="Github" /></button>
          <button><img class="mx-auto h-12 w-auto" src={icons8_bitbucket} alt="Bitbucket" /></button>
          <button><img class="mx-auto h-12 w-auto" src={icons8_facebook} alt="Facebook" /></button>
        </div>
      </div> */}

      <div class="bg-gray-50 min-h-screen flex items-center justify-center px-16">
        <div class="relative w-full max-w-lg">
          <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
            <p class="mt-2 text-center text-sm text-gray-600 max-w">
              Already registered?
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">Sign in</a>
            </p>
          </div>
          <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <form action="#" method="POST">
            <div class="m-8 relative space-y-4">
            <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div class="flex-1">
                  {/* <div class="h-4 w-48 bg-gray-300 rounded"></div> */}
                  <input id="email" name="email" type="text" autocomplete="text" required class="" placeholder="create a username" />
                </div>
                {/* <div>
                <div class="w-24 h-6 rounded-lg bg-purple-300"></div>
              </div> */}
              </div>
              <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div class="flex-1">
                  {/* <div class="h-4 w-48 bg-gray-300 rounded"></div> */}
                  <input id="email" name="email" type="email" autocomplete="email" required class="" placeholder="type your email" />
                </div>
                {/* <div>
                <div class="w-24 h-6 rounded-lg bg-purple-300"></div>
              </div> */}
              </div>
              <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div class="flex-1">
                  {/* <div class="h-4 w-56 bg-gray-300 rounded"></div> */}
                  <input id="password" name="password" type="password" autocomplete="current-password" required class="" placeholder="create a new password" />
                </div>
                {/* <div>
                <div class="w-20 h-6 rounded-lg bg-yellow-300"></div>
              </div> */}
              </div>
              <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div class="flex-1">
                  {/* <div class="h-4 w-56 bg-gray-300 rounded"></div> */}
                  <input id="password" name="password" type="password" autocomplete="current-password" required class="" placeholder="confirm a new password" />
                </div>
                {/* <div>
                <div class="w-20 h-6 rounded-lg bg-yellow-300"></div>
              </div> */}
              </div>
              <div class="flex items-center">
                <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" class="" />
                <label for="terms-and-privacy" class="ml-2 block text-sm text-gray-900"
                >I agree to the
                  <a href="#" class="text-indigo-600 hover:text-indigo-500">Terms</a>
                  and
                  <a href="#" class="text-indigo-600 hover:text-indigo-500">Privacy Policy</a>.
                </label>
              </div>
              <div class='flex justify-center'>
                <button type="submit" class="w-full flex justify-center py-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign up</button>
              </div>
              <div className='mt-2 sm:mx-auto sm:w-full sm:max-w-md'>
                <p class="mt-2 text-center text-sm text-gray-600 max-w">Or Sign Up with :</p>
              </div>
              <div class="p-4 bg-gray-200 rounded-full flex items-center justify-between space-x-8">
                <div class="flex-1 grid grid-cols-4 gap-4">
                  {/* <div class="h-4 w-44 bg-gray-300 rounded"></div> */}
                  <button><img class="mx-auto h-12 w-auto" src={icons8_google} alt="Google" /></button>
                  <button><img class="mx-auto h-12 w-auto" src={icons8_github} alt="Github" /></button>
                  <button><img class="mx-auto h-12 w-auto" src={icons8_bitbucket} alt="Bitbucket" /></button>
                  <button><img class="mx-auto h-12 w-auto" src={icons8_facebook} alt="Facebook" /></button>
                </div>
                {/* <div>
                <div class="w-28 h-6 rounded-lg bg-pink-300"></div>
              </div> */}
              </div>
            </div>
          </form>

        </div>
      </div>

    </div>
  );
}

export default App;
