interface MainProps extends React.HTMLAttributes<HTMLDivElement> {}


const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div>
      {/* add something like side bar here */}
      <aside></aside> 
      {/* render main contents here */}
      <main>
        {children}
      </main>
    </div>
  )
}

export default Main