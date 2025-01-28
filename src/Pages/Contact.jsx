import React from 'react'

function Contact() {
  return (
    <section
    id="contact"
    className="py-16 px-4  bg-purple-600 text-white font-Georgia font-serif "
  >
    <div className="mb-16 text-left md:text-left">
      <h2 className="text-3xl font-lexendaGiga">About Us</h2>
    </div>
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-lg">
          <h2 className="text-xl font-lexendaGiga font-bold mb-2">
            Tail AI Products
          </h2>
          <ul className="font-lexendaGiga text-sm ">
            <li>&#8594; RULE ENGINE</li>
            <li>&#8594; LABEL DESIGNER</li>
            <li>&#8594; API GENISIS</li>
            <li>&#8594; TOUCHLESS APP</li>
          </ul>
          <h2 className="text-xl font-lexendaGiga font-bold mt-12">
            Our Partners
          </h2>
          <ul>
            <li className="mt-2 text-sm font-lexendaGiga">
              &#8594; JHONSON & JHONSON
              <br />
              &#8594; HERITAGE
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl  font-lexendaGiga font-bold mb-2">Locations</h2>
          <ul className="text-sm font-lexendaGiga">
            <li>
              India
              <br />
              Suite #601, Aditya Trade Center
              <br />
              Ameerpet
              <br />
              Hyderabad - 500038
            </li>
            <li className="mt-16 text-sm">
              Frisco, Texas
              <br />
              USA
              <br />
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl  font-lexendaGiga  font-bold mb-2">Contact us</h2>
          <div className="text-sm font-lexendaGiga">
            <p>hrsupport@tail.com</p>
            <p>(+91) 8121219737</p>
          </div>
          <p className="text-sm mt-32 font-lexendaGiga">
            Subscribe to get emails about new products and features from
            TAIL CORP
          </p>
        </div>
      </div>

      <div className="text-center font-lexendaGiga mt-12 text-sm">
        <p>&copy; 2025 Tail Theme. All Rights Reserved</p>
      </div>
    </div>
  </section>
  )
}

export default Contact