export const Grid: React.FC = ({ children }) => {
  return (
    <div className="flex justify-center items-center flex-wrap mt-12 max-w-4xl xs:flex-col xs:w-full">
      {children}
    </div>
  )
}
