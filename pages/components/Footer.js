import { FaGithub, FaInstagram, FaChrome, FaGit } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';

function Footer() {
  return (
    <>
      <footer>
        <div class="bottom-0 py-6 bg-slate-800 flex flex-col w-screen">
          <div class="flex-row my-4 flex justify-center items-center drop-shadow-2xl text-gray-200">
            <a
              class=" h-8 w-8 rounded-full "
              href="mailto:emrekayik1905@gmail.com?subject=quotek&body=Hi Emre,"
              type="button"
            >
              <GoMail size={'1.5em'} />
            </a>

            <a
              class="h-8 w-8 rounded-full"
              type="button"
              href="https://studioek.github.io"
            >
              <FaChrome size={'1.5em'} />
            </a>

            <a
              class="h-8 w-8 rounded-full"
              type="button"
              href="https://www.instagram.com/studioek0"
            >
              <FaInstagram size={'1.5em'} />
            </a>

            <a
              class="h-8 w-8 rounded-full hover:fill-blue-500"
              type="button"
              href="http://www.github.com/studioek"
            >
              <FaGithub size={'1.5em'} className="hover:fill-blue-500" />
            </a>
          </div>
          <hr class="my-3 md:my-6 border-gray-400 w-1/2 m-auto" />
          <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-4/12 px-4 mx-auto text-center">
              <div class="text-sm text-gray-600 dark:text-gray-400 py-1">
                <a
                  href="https://github.com/studioek"
                  class="hover:underline hover:text-gray-300"
                >
                  StudioEK
                </a>
                <br />
                &copy;
                <span id="year">2022</span>{' '}
                <a
                  href="https://github.com/emrekayik"
                  class="hover:underline hover:text-gray-300"
                >
                  Emre Kayık
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
