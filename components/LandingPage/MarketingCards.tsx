
"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

const ProjectsData = [
  {
    id: 1,
    name: 'Nextjs 14',
    description: 'A framework for React that enables server-side rendering and effortless deployment.',
    image: '/nextjs.svg',
  },
  {
    id: 2,
    name: 'TypeScript',
    description: 'A typed superset of JavaScript that enhances code maintainability and scalability.',
    image: '/typescript.png',
  },
  {
    id: 3,
    name: 'Tailwind CSS',
    description: 'A utility-first CSS framework for building custom designs with ease.',
    image: '/tailwind.png',
  },
  {
    id: 4,
    name: 'Shadcn UI',
    description: 'Beautifully designed components by Shadcn.',
    image: '/shadcn.png',
  },
  {
    id: 5,
    name: 'Syntax UI',
    description: 'Beautifully designed components by Syntax UI.',
    image: '/syntaxUI.svg',
  },
  {
    id: 6,
    name: 'Postgres (Supabase)',
    description: 'PostgreSQL-based open-source database with Supabase for building scalable applications.',
    image: '/supabase.png',
  },
  {
    id: 7,
    name: 'Prisma ORM',
    description: 'Modern database toolkit for TypeScript and Node.js, simplifying database interactions.',
    image: '/prisma.png',
  },
  {
    id: 8,
    name: 'Clerk Authentication',
    description: 'Seamless and secure authentication service for web applications.',
    image: '/clerk.png',
  },
  {
    id: 9,
    name: 'Stripe Subsctiptions & One time payments',
    description: 'Payment processing solution for handling subscriptions and one-off transactions securely.',
    image: '/stripe.png',
  },
  {
    id: 10,
    name: 'Upstash (Redis)',
    description: 'Redis-based cloud database service for rate-limiting.',
    image: '/upstash.png',
  },
]

const SpringAnimatedFeatures = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className='flex flex-col mb-[3rem]'>
        <h1 className="scroll-m-20 text-3xl sm:text-xl md:text-3xl font-semibold tracking-tight lg:text-4xl text-center max-w-[700px]">
          Built with the best
        </h1>
        <p className="mx-auto max-w-[500px] text-gray-500 md:text-lg text-center mt-2 dark:text-gray-400">
          Your SAAS is built with the best technologies in the market
        </p>
      </div>
      <div className="grid w-full grid-cols-1 md:grid-cols-4 gap-6">
        {ProjectsData.map((project) => {
          return (
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                type: 'spring',
                bounce: 0.7,
              }}
              key={project.id}
              className="mt-5 text-left border p-6 rounded-md"
            >
              <a target="_blank" rel="noopener noreferrer" >
                <Image
                  src={project.image}
                  width={40}
                  height={30}
                  className="mb-3 rounded"
                  alt={project.name}
                />
                <div className="mb-1 text-sm font-medium text-gray-900">
                  {project.name}
                </div>
                <div className="max-w-[250px] text-sm font-normal text-gray-500">
                  {project.description}
                </div>
              </a>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default SpringAnimatedFeatures
