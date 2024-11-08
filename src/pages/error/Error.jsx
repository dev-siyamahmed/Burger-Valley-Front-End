import errorBg from '../../assets/404bg.jpg'

export default function Error() {
  return (
    <div className='bg-black relative'>
      <div
        className="flex justify-center items-center h-screen text-2xl font-semibold opacity-40"
        style={{ backgroundImage: `url(${errorBg})`, backgroundSize: 'cover' }}
      >
      </div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <h2 className='text-white font-extrabold text-9xl md:text-[10rem] mb-24'>404</h2>
          <div className='flex w-full items-center justify-center'>
            <a
              href="/"
              className='bg-[#FF9D00] text-black font-medium px-8 py-3 rounded'
            >
              Back To Home
            </a>
          </div>
      </div>
    </div>

  );
}
