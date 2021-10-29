import { Image } from './Image'

export const Footer = () => {
  return (
    <footer className="w-full h-24 flex justify-center items-center border border-solid border-gray-200">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center"
      >
        Powered by{' '}
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          height="64"
          width="64"
          className="ml-4"
        />
      </a>
    </footer>
  )
}

export const Header = () => {
  return (
    <>
      <h1 className="m-0 leading-tight text-6xl">
        Learn{' '}
        <a
          href="https://nextjs.org"
          className="text-blue-600 hover:underline focus:underline active:underline"
        >
          Next.js!
        </a>
      </h1>

      <p className="text-center leading-normal text-2xl">
        Get started by editing <code>pages/index.js</code>
      </p>
    </>
  )
}
