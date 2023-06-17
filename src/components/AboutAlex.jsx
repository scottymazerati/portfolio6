import React from 'react'

const AboutAlex = () => {
  return (
    <div name='About' className=' w-[80%] my-32 md:m-auto pt-20 '>

        <div className=' text-cyan-600 max-w-[1240px] mx-auto '>
            <div className=' text-center transition duration-500 hover:text-blue-700 '>
                <h2 className=' text-6xl font-bold '>Phsychedelic Artist</h2>
                <p className=' text-3xl py-6 my-3 font-bold '>Alex Grey is a renowned American artist who is best known for his visionary artwork that explores the intersections of spirituality, consciousness, and the human body. Born in 1953 in Columbus, Ohio, Grey initially pursued a career in science before turning to art, which he saw as a way to explore the mysteries of existence.
                <br></br>
                His detailed and intricate paintings, drawings, and sculptures are infused with psychedelic imagery and intricate anatomical studies. Grey's artwork has been featured in galleries and museums worldwide, including the American Visionary Art Museum, the Moscow Museum of Modern Art, and the Chapel of Sacred Mirrors, a museum he co-founded with his wife and collaborator, artist Allyson Grey.
                <br></br>
                In addition to his artistic endeavors, Grey is also a writer, lecturer, and advocate for the use of entheogenic substances as tools for personal and spiritual growth. His work has been featured in books, documentaries, and on album covers for musicians such as Tool, Nirvana, and The Beastie Boys.
                <br></br>
                Grey's art invites viewers to contemplate the nature of existence and the human experience, and his unique blend of spirituality and science has made him a prominent figure in the visionary art movement.</p>
            </div>

            <div className=' text-blue-800 grid md:grid-cols-3 gap-1 px-2 text-center bg-slate-100'>
                <div className=' py-2 bg-gradient-to-r from-sky-400 to-cyan-300 hover:text-indigo-600 border m-3 rounded-xl shadow-2xl transition duration-500 hover:scale-110 hover:bg-rose-100'>
                    <p className=' text-4xl font-bold '>ARTIST</p>
                    <p className=' mt-2 font-bold'>Sculpture/Painter</p>
                </div>
                <div className=' py-2 bg-gradient-to-r from-sky-400 to-cyan-300  hover:text-indigo-600 border m-3 rounded-xl shadow-2xl transition duration-500 hover:scale-110 hover:bg-rose-100'>
                    <p className=' text-4xl font-bold '>AUTHOR</p>
                    <p className=' mt-2 font-bold'>Books</p>
                </div>
                <div className=' py-2 bg-gradient-to-r from-sky-400 to-cyan-300  hover:text-indigo-600 border m-3 rounded-xl shadow-2xl transition duration-500 hover:scale-110 hover:bg-rose-100'>
                    <p className=' text-4xl font-bold '>TEACHER</p>
                    <p className=' mt-2 font-bold'>Vajrayana</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutAlex