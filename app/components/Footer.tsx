import React from 'react'

export default function Footer() {
  return (
    <div className='absolute bottom-0 w-full bg-[#0B2A44] h-40'>
      <footer className="container mx-auto text-white  py-6 px-3">
        <p className="text-sm">
          If you have any questions or concerns, please feel free to contact us
          at{" "}
          <a
            href="mailto:info@thrivingskill.com"
            className="text-[#d6a5a5] font-semibold hover:underline"
          >
            info@thrivingskill.com
          </a>
        </p>
        <p className="text-sm mt-2">
          Or{" "}
          <strong className="font-bold text-lg">01312100288 (WhatsApp)</strong>.
        </p>

        <div className="border-t border-white opacity-50 my-4 w-full"></div>

        <p className="text-xs opacity-80">© 2024 Thriving Skills Limited</p>
    </footer>
    </div>
  )
}
