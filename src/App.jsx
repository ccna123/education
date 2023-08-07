import { Card } from "./components/Card";
import { CourseCard } from "./components/CourseCard";
import { Nav } from "./components/Nav";
import { PersonCard } from "./components/PersonCard";
import { StudentCard } from "./components/StudentCard";

function App() {
  return (
    <div className="App w-full overflow-hidden">
      <header
        className="p-4 h-full"
        style={{
          backgroundImage: `url(${require("./assets/imgs/bg.png")})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Nav />

        <article className="text-center mx-auto mt-20 lg:w-[50%] w-full">
          <h1 className="text-white font-bold md:text-4xl text-2xl">
            LEARN ONLINE FROM HOME
          </h1>
          <p className="my-4 text-white font-mono">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            suscipit consectetur dignissimos quasi consequuntur. Earum id dolore
          </p>
          <button
            type="button"
            className="bg-[#FD2370] px-6 py-2 shadow-lg rounded-full text-white"
          >
            Discover More
          </button>
        </article>
        {/* card course */}
        <main className="lg:gap-8 lg:flex grid grid-cols-2 lg:w-[45%] gap-4 my-10 mx-auto">
          {[1, 2, 3].map((card) => (
            <div key={card} className="flex justify-center">
              <Card card={card} />
            </div>
          ))}
        </main>
        {/* end card course */}
      </header>

      {/* about */}
      <main>
        <div className="text-center">
          <h1 className="text-[#FD2370] text-4xl">About</h1>
          <p className="text-lg text-gray-400">Start Your Journey With Us</p>
        </div>
        <div className="mx-auto flex lg:flex-row flex-col lg:w-[70%] p-10">
          <div className="my-auto order-last">
            <h1 className="text-[#FD2370] text-2xl font-bold">
              Start Your Journey To A Better Life With Our Practical Courses
            </h1>
            <p className="text-sm text-gray-400 my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              numquam quisquam velit dolor dolores quod eaque esse blanditiis ex
              doloremque, quibusdam enim ad. Consequatur ullam assumenda tempore
              corporis! Nobis, quasi.
            </p>
            <button
              type="button"
              className="bg-[#D771FB] px-6 py-2 rounded-full text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
            >
              <p className="hover:scale-x-110 duration-150">Learn More</p>
            </button>
          </div>
          <div className="order-1 lg:w-[1024px]">
            <img src={require("./assets/imgs/about.png")} />
          </div>
        </div>
      </main>
      {/* end about */}

      {/* teachers */}
      <main className="my-10">
        <div className="text-center mb-5">
          <h1 className="text-[#FD2370] text-4xl">Our Teacher</h1>
          <p className="text-lg text-gray-400">Meet Professional Trainers</p>
        </div>

        <section className="md:flex md:justify-center grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((card) => (
            <div key={card}>
              <PersonCard card={card} />
            </div>
          ))}
        </section>
      </main>
      {/* end teachers */}

      {/* courses */}
      <main className="my-10">
        <div className="text-center mb-5">
          <h1 className="text-[#FD2370] text-4xl">Popular Courses</h1>
          <p className="text-lg text-gray-400">
            Upgrade Your Skills With Newest Courses
          </p>
        </div>

        <section className="grid lg:grid-cols-3 p-4 grid-cols-2 gap-10 lg:w-[50%] mx-auto mt-10">
          {[1, 2, 3, 4, 5, 6].map((card) => (
            <div
              key={card}
              className="w-full  shadow-[8px_8px_0px_0px_#D771FB] rounded-lg"
            >
              <CourseCard card={card} />
            </div>
          ))}
        </section>
      </main>
      {/* end courses */}

      {/* students */}
      <main className="mb-10 mt-20">
        <div className="text-center my-4">
          <h1 className="text-[#FD2370] text-4xl">Students Review</h1>
          <p className="text-lg text-gray-400">
            What Our Students Say About Us
          </p>
        </div>

        <main className="gap-8 md:flex md:justify-center grid grid-cols-2 md:w-[45%] mx-auto mt-32">
          {[1, 2, 3].map((card) => (
            <div key={card} className=" flex justify-center">
              <StudentCard card={card} />
            </div>
          ))}
        </main>
      </main>
      {/* end student */}

      {/* contact */}
      <section className="bg-[#333231]">
        <div className="text-center my-5 py-5">
          <h1 className="text-[#FD2370] text-4xl">Contact Us</h1>
          <p className="text-lg text-gray-400">
            We Love Conversations, Lets Talk
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 flex flex-col text-center items-center mx-auto lg:w-[80%]">
          <div className="w-[512px]">
            <img src={require("./assets/imgs/contact.png")} />
          </div>
          <div className="w-full">
            <div className="my-4">
              <input
                className="w-[80%] rounded-full p-2 focus:outline-[#FD2370] focus:border-[#FD2370]"
                type="text"
                placeholder="Full name"
              />
            </div>
            <div className="my-4">
              <input
                className="w-[80%] rounded-full p-2 focus:outline-[#FD2370] focus:border-[#FD2370]"
                type="email"
                placeholder="Enter email"
              />
            </div>
            <div className="my-4">
              <input
                className="w-[80%] rounded-full p-2 focus:outline-[#FD2370] focus:border-[#FD2370]"
                type="number"
                placeholder="Enter number"
              />
            </div>
            <div>
              <textarea
                className="w-[80%] rounded-lg p-2 focus:outline-[#FD2370] focus:border-[#FD2370]"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button
              type="button"
              className="rounded-full my-4 px-10 py-2 hover:border-2 hover:text-[#FD2370] text-white bg-[#FD2370] hover:bg-[#333231] hover:border-[#FD2370]"
            >
              Message
            </button>
          </div>
        </div>
      </section>
      {/* end contact */}

      {/* social link */}
      <section className="flex justify-center lg:my-20 my-10 gap-4">
        <i class="fa-brands fa-facebook duration-150 rounded-full hover:bg-[#FD2370] hover:text-white hover:border-[#FD2370] border-[#D771FB] border-2 text-[#D771FB] cursor-pointer px-4 py-3 text-2xl"></i>
        <i class="fa-brands fa-twitter duration-150 rounded-full hover:bg-[#FD2370] hover:text-white hover:border-[#FD2370] border-[#D771FB] border-2 text-[#D771FB] cursor-pointer px-4 py-3 text-2xl"></i>
        <i class="fa-brands fa-instagram duration-150 rounded-full hover:bg-[#FD2370] hover:text-white hover:border-[#FD2370] border-[#D771FB] border-2 text-[#D771FB] cursor-pointer px-4 py-3 text-2xl"></i>
        <i class="fa-brands fa-github duration-150 rounded-full hover:bg-[#FD2370] hover:text-white hover:border-[#FD2370] border-[#D771FB] border-2 text-[#D771FB] cursor-pointer px-4 py-3 text-2xl"></i>
        <i class="fa-brands fa-linkedin duration-150 rounded-full hover:bg-[#FD2370] hover:text-white hover:border-[#FD2370] border-[#D771FB] border-2 text-[#D771FB] cursor-pointer px-4 py-3 text-2xl"></i>
      </section>
      {/* end social link */}
    </div>
  );
}

export default App;
