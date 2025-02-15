import React from 'react'

export default function Footer() {
  return (
    <div className='absolute bottom-0 w-full bg-primaryText h-40'>
      <footer className="container mx-auto text-primaryBg  py-6 px-3">
        <p className="text-sm">
          If you have any questions or concerns, please feel free to contact us
          at{" "}
          <a
            href="mailto:info@Ebstac.com"
            className="text-secondaryText font-semibold hover:underline"
          >
            info@Ebstac.com
          </a>
        </p>
        <p className="text-sm mt-2">
          Or{" "}
          <strong className="font-bold text-lg">01312100288 (WhatsApp)</strong>.
        </p>

        <div className="border-t border-white opacity-50 my-4 w-full"></div>

        <p className="text-xs opacity-80">© 2024 Ebstac Skills Limited</p>
    </footer>
    </div>
  )
}
