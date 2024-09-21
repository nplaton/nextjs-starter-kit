import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">How it works</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Investors</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
          {/* Repeat for other sections */}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} LookLockers, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
export default Footer
